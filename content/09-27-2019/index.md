---
title: "How to query with PostgreSQL wildcards like a Pro"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "postgresql"
date: "09/27/2019"
tags:
  - postgresql
  - databases
  - software-engineering
---

# How to query with PostgreSQL wildcards like a Pro

## How to filter with any characters or wildcards in PostgreSQL

```sql
# Get all entries like Melissa, Melli.
# Not depending on how many characters are wildcarded.
SELECT * FROM example_table WHERE example_column LIKE 'Mel%';

# Get all entries like Meli, Melo.
# Depending on how many characters are wildcarded.
SELECT * FROM example_table WHERE example_column LIKE 'Mel_';

# Or for multiple characters, here 2
SELECT * FROM example_table WHERE example_column LIKE 'Mel__';

# Get all entries which include mel, not case-sensitive.
# To match: Melissa, Emelio, Mel
SELECT * FROM example_table WHERE LOWER(example_column) LIKE '%mel%';
```

## Quicklinks

1. [Basic filtering in PostgreSQL or SQL](#basic-filtering-in-postgresql-or-sql)
1. [The `%` wildcard operator in a nutshell](#the-%-wildcard-operator-in-a-nutshell)
1. [The `_` wildcard operator in a nutshell]()
1. [Search with dynamic cases or full text search](#search-with-dynamic-cases-or-full-text-search)
1. [Conclusion](#conclusion)

## Basic filtering in PostgreSQL or SQL

PostgreSQL wildcards are an important tool for searching in SQL databases. Most of the time text in PostgreSQLnd databases is saved in columns as `TEXT` or `VARCHAR` type. The general recommeation is to use `TEXT` though. It is no problem though if something like the `VARCHAR` type is used. All the solutions work the same here in PostgreSQL.

Searching for an exact text in a column is quite easy with a statement like:

```sql
SELECT * FROM example_table WHERE example_column='Mel';
```

From a table with a lot of entries of fictional person data, it will filter all rows which have the column `example_column` with the value `Mel`.

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>...</th>
      <th>example_column</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr style="opacity: 0.2;">
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>203</td>
      <td>...</td>
      <td>Max</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>204</td>
      <td>...</td>
      <td>Michael</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>205</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>206</td>
      <td>...</td>
      <td>Melissa</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>207</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>208</td>
      <td>...</td>
      <td>Taylor</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>209</td>
      <td>...</td>
      <td>Emelio</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

After executing the query it would filter out all non-highlighted rows above, resulting in the following table:

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>...</th>
      <th>example_column</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>205</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr>
      <td>207</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

Exactly what we wanted to achieve. But for more advanced use cases like filtering all names which start with `Mel`, we would need to use wildcards.

## The `%` wildcard operator in a nutshell

In our previous dataset we filtered all values which start with `Mel` in the exact casing. Now we filter all rows which have the value **like** Mel out of our original dataset. This can be achieved with a wildcard character. In this case here it is not important how many characters are wildcarded. This basically means it could be anything like `Melissa`, `Melloremipsum` or `Mel`. For getting this to work, PostgreSQL offers the character `%`. With this we can build a query in theory which can match all of the words above. There is one nuance though, instead of using the `WHERE ... = '...'` filter, we need to use a statement called `LIKE`. The statement will look like `SELECT * FROM ... WHERE ... LIKE '...'`.

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>...</th>
      <th>example_column</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr style="opacity: 0.2;">
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>203</td>
      <td>...</td>
      <td>Max</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>204</td>
      <td>...</td>
      <td>Michael</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>205</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>206</td>
      <td>...</td>
      <td>Melissa</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>207</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>208</td>
      <td>...</td>
      <td>Taylor</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>209</td>
      <td>...</td>
      <td>Emelio</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

To get these results the query could look like:

```sql
SELECT * FROM example_table WHERE example_column LIKE 'Mel%';
```

And it would result in the following table as SQL query result.

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>...</th>
      <th>example_column</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>205</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr>
      <td>206</td>
      <td>...</td>
      <td>Melissa</td>
      <td>...</td>
    </tr>
    <tr>
      <td>207</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

The `%` sign in the query acts as a match for any character. But not even just a match. It is a match for zero to infinite characters. That is why this operator is matching `Mel` and `Melissa`. A lot of use cases result out of this and that is why this is the most used wildcard in SQL or PostgreSQL overall.

## The `_` wildcard operator in a nutshell

In the last search, we have defined on infinite wildcards with the `%` which match strings with zero to an infinite amount of characters and other filters. Sometimes we have use-cases to just wildcard a specific character in some text. For example there could be types with or without a single number attached. These types could be `SALE` but also `SALE1` or `SALE8`. In this example our matches look really similar, but if we know that there is just on number in the matching string, we could use the wildcard operator `_` to match exactly the cases we want. For our sale types we could use `SALE_`.

In our example table, we could have different results based on this. To make a good search though, we could find all names in the table which have three characters but must start with `M`. In the example table there are three entries which will match the condition.

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>...</th>
      <th>example_column</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr style="opacity: 0.2;">
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>203</td>
      <td>...</td>
      <td>Max</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>204</td>
      <td>...</td>
      <td>Michael</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>205</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>206</td>
      <td>...</td>
      <td>Melissa</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>207</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>208</td>
      <td>...</td>
      <td>Taylor</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>209</td>
      <td>...</td>
      <td>Emelio</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

The highlighted results in this table should be queried for with a PostgreSQL wildcard. The query is looking quite easy again.

```sql
SELECT * FROM example_table WHERE example_column LIKE 'M__';
```

An important point here is that the query is using two PostgreSQL wildcard characters which is a simple underscore `_`. The reason for this is that one underscore `_` will replace one character in the queried value.

After executing the query with the PostgreSQL wildcard, it will output the following result:

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>...</th>
      <th>example_column</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>203</td>
      <td>...</td>
      <td>Max</td>
      <td>...</td>
    </tr>
    <tr>
      <td>205</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr>
      <td>207</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

This result is not a surprise and resulted in our expected output. It includes the rows for the `example_column`s `Max` and `Mel`, where for `Mel` there exist two rows.

## Search with dynamic cases or full text search

Another problem most people are facing is to search in different cases with PostgreSQL wildcards. This functionality in most programming languages is called `include` or similar. In JavaScript the `includes` prototype function is existing for arrays. This can be used to check if an array includes a specific value. This works relatively well for primitive data types.

```js
const numbers = [1, 4, 9];
const includesFour = numbers.includes(4);
console.log(includesFour);
```

The above script will output `true` to the console since the list includes the number `4`. The `includes` functionality can also be used for texts like:

```js
const name = "Emilio";
const includesPattern = name.includes("mel");
console.log(includesPattern);
```

This script also outputs `true` to the console. A problem here is that names like `Melissa` would not be matched with the same script but just exchanging the name because the functionality is case-sensitive.

```js
const name = "Melissa";
const includesPattern = name.includes("mel");
console.log(includesPattern);

// Outputs false
```

A simple trick is existing in almost all programming languages to make the incoming value, which is the name in this case, lowercase. Basically it will transform all letters of a word to the small version of the letter. `Melissa` would get to `melissa`.

In JavaScript this is done in a way like this:

```js
const name = "Melissa";
const includesPattern = name.toLowerCase().includes("mel");
console.log(includesPattern);

// Outputs true
```

The `includes` functionality is not existing in PostgreSQL or SQL in general. But for these cases the PostgreSQL wildcards exist. As in the section earlier mentioned, there is an operator `%` which matches zero to infinite amount of random characters in a word. We can use this operator for matching our desired rows.

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>...</th>
      <th>example_column</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr style="opacity: 0.2;">
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>203</td>
      <td>...</td>
      <td>Max</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>204</td>
      <td>...</td>
      <td>Michael</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>205</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>206</td>
      <td>...</td>
      <td>Melissa</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>207</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>208</td>
      <td>...</td>
      <td>Taylor</td>
      <td>...</td>
    </tr>
    <tr style="background-color: #f0ffff;">
      <td>209</td>
      <td>...</td>
      <td>Emelio</td>
      <td>...</td>
    </tr>
    <tr style="opacity: 0.2;">
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

All of the highlighted rows have `Mel` or `mel` of the value of the `example_column` included. A simple approach here is to write a query which includes both like:

```sql
SELECT * FROM example_table
WHERE example_column LIKE '%mel%'
OR example_column LIKE '%Mel%';
```

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>...</th>
      <th>example_column</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>205</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr>
      <td>206</td>
      <td>...</td>
      <td>Melissa</td>
      <td>...</td>
    </tr>
    <tr>
      <td>207</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr>
      <td>209</td>
      <td>...</td>
      <td>Emelio</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

This is quite tedious, if there are more cases then just the first letter changing. The more dynamic approach to this would be to convert the `example_column` value to lower-case to work in a simpler way with it. To enable this feature and adjust the query, we just have to use the `LOWER` functionality of PostgreSQL. The functionality should be applied to the `example_column` column. The SQL query for this scenario would look similar to this:

```sql
SELECT * FROM example_table WHERE LOWER(example_column) LIKE '%mel%';
```

It would result in the exact same table output as before but the query looks far more condense and understandable.

<table>
  <thead>
    <tr>
      <th>id</th>
      <th>...</th>
      <th>example_column</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>205</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr>
      <td>206</td>
      <td>...</td>
      <td>Melissa</td>
      <td>...</td>
    </tr>
    <tr>
      <td>207</td>
      <td>...</td>
      <td>Mel</td>
      <td>...</td>
    </tr>
    <tr>
      <td>209</td>
      <td>...</td>
      <td>Emelio</td>
      <td>...</td>
    </tr>
  </tbody>
</table>

## Conclusion

PostgreSQL wildcards are an amazing tool to extend queries. Queries are adjusted to include a wide range of dyanmic filtering which is important for systems with big data. Most of the time this data is unstructured on the value-base. A good example are the sale types mentioned in an earlier example which could be `SALE1` or `SALE2`. For some sub-systems this difference might be important but for some systems it is not important. Also the data should rather be structured to include `detailed_...` column for these cases to achieve SQL normalization. With the wildcards, we can search for these "unnormalized" values in an easy way.

<!--
- like
- PostgreSQL wildcards
- postgres wildcard
- query
- search
- index
- string
- match
- operator
-->
