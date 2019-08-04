---
title: "SQL — The Case statement"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "python"
date: "06/17/2019"
tags:
  - postgresql
  - databases
  - software-engineering
---

# SQL — The Case statement

Databases are just tools for storing data but the query language which comes with it, SQL, can be really powerful too.

![](https://cdn-images-1.medium.com/max/4080/1*5ya4p7Uh08D7-fl4ZmMm0g.png)

In programming languages like JavaScript, Java or C# we use complex logical operations all the time. So it would be completely normal to do things like this:

```js
const vehicles = [
  "Airbus A333-300",
  "Volkswagen Golf",
  "Porsche Cayenne",
  "Airbus A380-800"
];

const vehiclesWithTypes = vehicles.map(vehicle => {
  switch (vehicle) {
    case "Airbus A380-800":
    case "Airbus A333-300":
      return {
        name: vehicle,
        type: "airplane"
      };
      break;
    case "Volkswagen Golf":
    case "Porsche Cayenne":
      return {
        name: vehicle,
        type: "car"
      };
    default:
      return {
        name: vehicle,
        type: null
      };
  }
});

console.log(vehiclesWithTypes);
```

Basically, it will take an array/list of strings which are the vehicle names in this example. What we want to have in the end is the single names with a property called type to work on more expensive operations later maybe.

```json
{
  "name": "Airbus A333-300",
  "type": "airplane"
}
```

The full result list will look like:

```json
[
  {
    "name": "Airbus A333-300",
    "type": "airplane"
  },
  {
    "name": "Volkswagen Golf",
    "type": "car"
  },
  {
    "name": "Porsche Cayenne",
    "type": "car"
  },
  {
    "name": "Airbus A380-800",
    "type": "airplane"
  }
]
```

For example, this could be done in the application code as you see above but in a lot of cases, the problem which arises here is that we are using the application’s server CPU. This is not ideal because these things can be done with SQL.

But first, we need to show which data we have in the database. Let us look at an example table.

| Id  | Name            | Price      |
| --- | --------------- | ---------- |
| 1   | Airbus A330-300 | 1500000.00 |
| 2   | Volkswagen Golf | 35000.00   |
| 3   | Porsche Cayenne | 65000.00   |
| 4   | Airbus A380-800 | 3000000.00 |

It is quite simple data but what is missing here is the grouping of the vehicles. To do the grouping on application level might be too CPU-intensive but we have a grouping functionality there already. There is a possibility to translate the grouping function from our application code into the SQL statement.

Welcome to the CASE statement in SQL 🎉

The CASE statement can be used nearly everywhere in queries. The examples in this blog post will focus on PostgreSQL but should be applicable in nearly every relational database management system (RDBMS).

For creating proper SQL queries I can recommend to visualize the result we want to achieve first. Our expected result would look like:

| Type     | Price      |
| -------- | ---------- |
| Airplane | 4500000.00 |
| Car      | 100000.00  |

This is a grouped table by vehicle type which is just existing in our application code and the sum of the amounts of each vehicle grouped by the type.

To see what is the first step in our current we need to see which data is missing in our raw data. In the case of our base SQL table data, this is the vehicle type. The vehicle type was programmed in the application code already, so it could be taken from there. To insert it into the query we should learn about the ANY operator in PostgreSQL first. You can find documentation at this link: [https://www.postgresql.org/docs/9.4/functions-comparisons.html](https://www.postgresql.org/docs/9.4/functions-comparisons.html) or follow the blog here.

Basically ANY is the same functionality as the includes in JavaScript or contains in Java. It is a functionality to check if an item is inside a list or iterable data type. In PostgreSQL, this is commonly used with Arrays. A list can be defined in two ways for our use cases:

```sql
VALUES ('Airbus A333-300'), ('Airbus A380-800')
```

```sql
ARRAY['Airbus A333-300', 'Airbus A380-800']
```

The second approach seems to be more natural and similar to what we are used to in modern programming languages so I will follow this approach. It is what we will use throughout this blog post. So the first thing to use it is probably in a simple query to get all airplanes from our data set. The most simple query would look something like this:

```sql
SELECT * FROM vehicles
WHERE name = ANY (ARRAY['Airbus A333-300', 'Airbus A380-800']);
```

It will check all vehicles which have a name which is included in the list.

The same query could be constructed for cars too. It would yield in just returning rows which will include cars. So let us inspect the CASE statement now in an easy way to append the type of vehicle to the data. The first common approach would be to use something like this:

```sql
SELECT *,
       CASE
           WHEN name = 'Airbus A333-300' THEN 'airplane'
           WHEN name = 'Airbus A380-800' THEN 'airplane'
           WHEN name = 'Volkswagen Golf' THEN 'car'
           WHEN name = 'Porsche Cayenne' THEN 'car'
           ELSE null
           END AS type
FROM vehicles;
```

This approach is working but really has one big disadvantage: with every new data element in this query we will have another line of code and it is repeating a lot of code WHEN name = '...' THEN vehicle_type. A specialty here is also that we need to call a CASE and END keyword to make the case statement work.

But this could be improved by the ANY operator we have learned before:

```sql
SELECT *,
       CASE
           WHEN name = ANY(ARRAY['Airbus A333-300', 'Airbus A380-800']) THEN 'airplane'
           WHEN name = ANY(ARRAY['Volkswagen Golf', 'Porsche Cayenne']) THEN 'car'
           ELSE null
           END AS type
FROM vehicles;
```

This would result in the following data set:

| Id  | Name            | Price      | type     |
| --- | --------------- | ---------- | -------- |
| 1   | Airbus A330-300 | 1500000.00 | airplane |
| 2   | Volkswagen Golf | 35000.00   | car      |
| 3   | Porsche Cayenne | 65000.00   | car      |
| 4   | Airbus A380-800 | 3000000.00 | airplane |

This is really near to the end result which should be achieved. But for the last part, the query would need to aggregate the prices by the vehicle_type. This can be easily done by using the GROUP BY statement.

```sql
SELECT SUM(price),
       CASE
           WHEN name = ANY (ARRAY ['Airbus A333-300', 'Airbus A380-800']) THEN 'airplane'
           WHEN name = ANY (ARRAY ['Volkswagen Golf', 'Porsche Cayenne']) THEN 'car'
           ELSE null
           END AS type
FROM vehicles
GROUP BY vehicle_type;
```

This is what the query would look like. Maybe it could be optimized by filtering out the rows which have NULL as vehicle_type but in this example should have shown the main point which is the CASE keyword. The keyword could be used in a lot of other use-cases (ba dum tss) like in complex JOIN ‘s on multiple tables. Just experience with this keyword a bit and see if it could be applied somewhere in your queries.

Overall this article showed that this kind of logic of “missing data” could be even achieved on database level rather than in application code where it is cluttering the whole code. Even though you should be really careful when putting business logic on the database level, but in this case, it is just data extension.

> Thanks for reading this. You rock* 🤘*
> Also check my other blog articles like [Function parameters in JavaScript](https://medium.com/@kevin_peters/function-parameters-in-javascript-clean-code-4caac109159b), [Learn how to refactor Vue.js Single File Components with a real-world example](https://medium.com/@kevin_peters/learn-how-to-refactor-vue-js-single-file-components-on-a-real-world-example-501b3952ae49) or [Auto formatters for Python](https://medium.com/3yourmind/auto-formatters-for-python-8925065f9505).
> If you have any feedback or want to add something to this article just comment here. You can also follow me on [twitter](https://twitter.com/kevinpeters_) or visit my [personal site](https://www.kevinpeters.net/) to stay up-to-date with my blog articles and many more things.
