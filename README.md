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
2. Installed SASS.
3. Started styling BreedDetail hero section but remember that I need to start mobile first! Will finish styling later.
----

#### March 8, 2018
1. Changed from material ui to semantic ui table to display breeds. Material UI was giving me grief when trying to select a row.
2. Added 2 columns to traits table
    -Hypoallergenic. Realized this is one of the most important characteristics for some people to know!
    - Spotlight. If I have time to do this feature, I will be able to toggle which breeds are highlighted on the home page!
3. Discovered something AWESOME with postgresql.
    - Added cascading feature on traits table so that when I delete an id from the breeds table, it is automatically deleted on traits table!!!
4. Delete button on admin page now functional!
5. Started working on update. **Need to finish** 
6. Added youtube player to breed detail page.
    - also added column in trait table for breed specific youtube id
7. Styled introduction and video portion of breed detail component, with media queries.
---

#### March 9, 2018
1. Moved axios get call on BreedDetail component to Redux to allow progress bar components access to currentBreed state.
2. Started styling Progress bar Components.
---

#### March 10, 2018
1. Designed logos for header and started styling
---

#### March 11, 2018
1. Found cool library called react-window-size. It allows you to easily see the window size by 'this.props'
2. Styled fullsize header.
3. Re-styled breed detail hero section to be mobile responsive.
---

#### March 12, 2018
1. Created a second reducer and split 2 reducers between user and admin.
2. Worked on Photos component
    - Using req.params.id, made call to server to hit Dog CEO API.
    - Got photos back for each breed and made simple carousel.
        - need to style some more.
3. Started styling home page.
    - Added GET_SPOTLIGHT to reducer which sends spotlighted breeds to homepage.
        - got those breeds coming back. Just need to style!
---

#### March 13, 2018
1. Worked on Update for most of the day. It's almost functional.
2. Styled spotlight section of homepage with media queries.
---

#### March 14, 2018
1. Created genetics table on breed detail page!
2. Update finally working!
---

#### March 15, 2018
1. Worked on admin table
    - Admin can now add and remove spotlighted breeds from homepage
---

#### March 16, 2018
1. Created /explore route 
    - trying to figure out the best way to filter through all attributes. 
---

#### March 17, 2018
1. Got filter on Explore component working!
    - Added buttons to filter section. Button color depends on if that attribute has been selected or not. 
    - When button is clicked, the value is sent to redux and filtered throught underscore.js
    - Reset button restores all breeds to Explore component
    - Need to figure out a way to remove filters rather than resetting all data.
2. Styled explore 
3. Started sorting option on explore component.
---
#### March 18, 2018
1. Couldn't figure out why sort wasn't working. Realized by console logging typeof() that my the data coming back from my tables was all in strings.
    - Changed column types in traits table to 'integer' rather than numeric. Problem solved!
2. Removed video on homepage and added it back as a modal for a cleaner look.
3. Added and styled articles on homepage.
---

#### March 19, 2018
1. Finished styling Recent Articles on Home page.
    - Couldn't figure out how to make background darker without making the text darker too. Solved by
        - ```background-color: rgba(0,0,0,.6); ```
2. Created routes for Breed Matching quiz.