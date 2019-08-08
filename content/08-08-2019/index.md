---
title: "Find rows from a list that do not exist in a PostgreSQL table"
cover: "https://unsplash.it/1152/300/?random?FaityWitch"
category: "databases"
date: "08/08/2019"
tags:
  - postgresql
  - databases
  - software-engineering
---

# Find rows from a list that do not exist in a PostgreSQL table

A lot of web applications have to deal with a lot of data. This data has to be saved into some database at some point in time. Those processes are normally done in big batches but making sure that every data entry was inserted into the database is quite hard.

To understand the main problem we are looking here at, let us look at the architecture of a system which could save a lot of data into the database.

