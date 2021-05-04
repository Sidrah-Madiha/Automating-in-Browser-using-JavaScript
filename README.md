# Automating in Browser Using JavaScript:

We can automate user action using JavaScript in Chrome Dev Tools to help in testing before moving on to automation tools. Chrome Dev Tools have a built-in IDE (in the form of code snippet) where we can run small chunks of code to automate user actions using bots.

For this we are going to use a To Do list app written in Vanilla JS, found here > https://todomvc.com/examples/vanillajs/

### Details:
Each step of creating an automation bit is given in separate JS file in the repo.
Here we are essentially doing model based testing, where we create a model of all possible user actions.

**First Step:**
Create functions for each possible step. For this use `document.querySelector` as well as inspect what event listeners are attached to UI elements that can be leverage to dispatch event.
Please see file: step1.js

**Second Step:**
Create an function based class to put all your functions created in 1st step, this will help in accessing every user action easily by just using object dot notation function;
Please see file: step2.js

**Third Step**
Before creating a bot, lets learn how to create test data in bulk in automated way, for this you can either use setTimeout or SetInterval.
Also you can add `javascript:` before such function put it in bookmarklet and use them as needed.
Please see file: step3.js 

**Fourth Step**
Create a function based class that randomly fetches index of items to use in function from object created in second step
Please see file: step4.js 

**Fifth Step**
Using the wrapper object created in fourth step, now creaate an object that randomly fetches and execute function from the object created in step 4, this is your bot that does random actions on your application.

**End Notes**

This is example of model based test automation where we model application function and created a bot to randomly to execute all functions
This can be used to find memory leaks if we keep running the bot (without delete functionality) or to simulate multi-user actions for testing purpose by creating 2 bots 
Please note you can also use breakpoints in source code of your js code to get objects from application to interact and use them for understancding the application as well.

**Credits**
Thanks @eviltester for the course where I learnt to automate this application.