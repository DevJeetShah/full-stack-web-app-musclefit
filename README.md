# MuscleFit App
MuscleFit is a full stack web application for fitness enthusiasts to craft their meal plan with macros and log their workout

Live site: https://musclefit.cyclic.app/

![](public/images/muscleFitAppGif.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Bootstrap, MongoDB, Express, EJS, Passport and Nodejs

The idea to build this app came after I experienced the annoying pain of having to use using an excel sheet to create and update my meal plans and log my workouts. The app was designed specifically keeping in mind to have an easy to navigate inteface, clean and appealing UI, all while having a solid core functionality

The actual building of the app started off with this list of things I would have wanted a user to be able to do:

1. Sign up as a new user with email and password credentials
2. Log In as a new or an existing user with email and password credentials
3. Log out as a new or an existing user
4. Create a new meal plan with as many entries as the user wants
5. Edit an existing meal plan
6. Delete a meal plan
7. Log a workout and display it in a box along with date of workout
8. Delete any workout log

After this, I drew a wireframe drawing of this app based on the MVP architecture. It allowed me to get a general idea of how many models(User, MealPlan, WorkoutLog) would be required for the app to do its function. So when the requests are made to the server from the client side, I would know excatly what model to reference to pull specific data from the MongoDB through the Mongoose schema.  

I used passport for authentication, and EJS as a templating language to render the javscript functionality and spit out html to the client.

I finished off the project with a touch of bootstrap and custom css for styling. 


## Optimizations

1. An edge case for the logger where a user can not log a workout without selecting values from the dropdown

2. An edge case when creating a meal plan, where I coded the javscript for the submit button to show up only when a user clicks to add a meal plan item.

3. Beautiful card style views to view meal plan on smaller devices like phone

4. Included a scrolling functionality for the "recent logs" box so the user doesn't have to keeping scrolling the entire web page to view the logs, and rather instead can view them by scrolling inside the box.

## Lessons Learned:

1. I learned that the wireframe made it intuitive for me to create routes for every request made and controllers to route those requests as applicable.

3. As exciting and nervewracking the "Meal Plan Editor" functionality was, it was indeed a great learning curve for me because I learned a lot about using client side javascript to manipulate the dom, to retrieve values from the table, and to loop them, through row by row, cell by cell to send it over to the server. Ran into so many errors doing it, but every error, I was learning how to debug, learning diff syntaxes and methods, learning how to change things around, how to bring it all together step by step.

2. Doing repeated codewars challenges everyday allowed me to have enough self awareness of objects, arrays and string methods, that it successfully allowed me to turn my functionality ideas into reality in this project.

