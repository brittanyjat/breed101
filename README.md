# This is a portfolio piece to showcase what I have learned while attending DevMountain.

## Using

* React
* Redux
* Node with Express
* Postgres


---

#### March 5, 2018
1. Set up Redux
    - Made dynamic function in reducer to update state of new breed.
2. Set up form to add new breed
    - Started setting up database to create new breed

----

#### March 6, 2018
1. Finished Add form.
    - I need to make a better call in my controller where it can only add breed if all tables are correctly added.
2. Created all database tables
3. Experimented with dog.ceo api.
    - Decided to add the get request url to the database because the API uses weird breed names.
4. Completed MVP planning.
5. Changed column types to numeric in order to use decimals.
6. Search component now sends ID as param to breed detail component :smiley:
----

#### March 7, 2018
1. Changed breed controller when adding new breed. I was having a problem where if 1 field failed, it would still add to the database on all the other tables which made my data inconsistent. 
    - Consolidated all characteristic tables into one 'traits' table
    - Made one call in controller that adds breed name and photo to 'breeds' table, returning the id. Then using that id, all the info is added to the traits table. Very cool!!
    