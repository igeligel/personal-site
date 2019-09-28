---
title: "How to PostgreSQL wildcards like a Pro"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "postgresql"
date: "09/27/2019"
tags:
  - postgresql
  - databases
  - software-engineering
---

# How to PostgreSQL wildcards like a Pro

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

## Explanation

PostgreSQL wildcards are an important tool for searching in SQL databases. Most of the time text in PostgreSQL databases is saved in columns as `TEXT` or `VARCHAR` type. The general recommendation is to use `TEXT` though.

So searching for an exact text in a column is quite easy with a statement like:

```sql
SELECT * FROM example_table WHERE example_column='Mel';
```

From a table with a lot of entries it will filter all rows which have the column `example_column` with the value `Mel`.

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

Exactly what we wanted to achieve. But for more advanced use cases like filtering all names which start with `Mel`, we would need to use wildcards. For example, we want to get all rows which have a value __like__ Mel. This can be achieved with a wildcard character. In this case here it is not important how many characters are wildcarded. This basically means it could be anything like `Melissa`, `Melloremipsum` or `Mel`. For getting this to work, PostgreSQL offers the character `%`. With this we can build a query in theory which can match all of the words above. There is one nuance though, instead of using the `WHERE ... = '...'` filter, we need to use a statement called `LIKE`. The statement will look like `SELECT * FROM ... WHERE ... LIKE '...'`.

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

---

To match all three characters starting with `M`.

```sql
SELECT * FROM example_table WHERE example_column LIKE 'M__';
```
