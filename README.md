# Assignment #5. JavaScript Basics (DOM Manipulation & Events)
 
## Student Information
- Name: Adilzhan Kairgaliyev
- Group: SE-2540
## Links
- GitHub repository: PASTE YOUR REPOSITORY LINK HERE
- GitHub Pages: PASTE YOUR github.io LINK HERE
---
 
## Project Overview
In this lab assignment, I added a JavaScript profile page to my StrideHouse web application. I practiced working with JavaScript objects and data types, arithmetic operators, form input, event listeners and DOM manipulation (creating and removing list items). The page is `profile.html` and the code is in `profile.js`.
 
---
 
## Tasks & Assignments
 
### Part 1. Profile Object, Data Types & Arithmetic
 
- Task 1. The Personal Info Object
- What I did: Created a `const` object named `userProfile`. It has a string (`name`), a number (`birthYear`), a boolean (`isDeveloper`) and an array (`hobbies`).
<img width="569" height="167" alt="image" src="https://github.com/user-attachments/assets/d2fc6540-d5ff-4976-aa03-e130cf382fef" />

- Task 2. Arithmetic Calculations
- What I did: Calculated the age with `new Date().getFullYear() - userProfile.birthYear`, so the current year is taken automatically. Also calculated the age in months (age * 12) and the hobbies count (`hobbies.length`). The values are shown on the page and in the console.
<img width="647" height="106" alt="image" src="https://github.com/user-attachments/assets/212d5e46-9b92-4b71-a6cd-7a32e9a027fa" />

### Part 2. Form Input & Event Responses
 
- Task 3. HTML Form Setup
- What I did: Made a form with an input for Username, an input for Birth Year and a "Create / Update Profile" submit button.
<img width="508" height="422" alt="Скриншот 2026-10-25 153745" src="https://github.com/user-attachments/assets/97b62798-e064-4ed9-b760-265d85b5a813" />

- Task 4. Event Listener
- What I did: Added a `submit` event listener to the form. When the button is clicked, the script reads the values from the inputs, updates the `userProfile` object and shows the new profile and the new age on the page. If the birth year is not real (for example 1800), it shows an error message.
<img width="1008" height="436" alt="image" src="https://github.com/user-attachments/assets/6594a9d7-983e-4b08-b8f6-04c2ca4515a2" />
<img width="508" height="475" alt="image" src="https://github.com/user-attachments/assets/9ea401fd-b68c-4c3f-bc73-46cf2da001e8" />
<img width="1027" height="455" alt="image" src="https://github.com/user-attachments/assets/6fb8e24b-49ea-425a-b2ba-0907599149d2" />

### Part 3. DOM List Manipulation
 
- Task 5. Creating & Removing Elements
- What I did: Made an unordered list `<ul>` with my hobbies. The "Add Item" button takes the text from the input, creates a new `<li>` with `createElement` and adds it to the list with `appendChild`. The "Remove Item" button deletes the last item from the list. The hobbies count on the page updates after each change.
<img width="843" height="361" alt="image" src="https://github.com/user-attachments/assets/b3aae53e-4a7f-4d00-b31e-9046c06b2355" />
<img width="814" height="388" alt="image" src="https://github.com/user-attachments/assets/12661941-543f-48e4-99ee-81a48070b959" />
<img width="791" height="339" alt="image" src="https://github.com/user-attachments/assets/de950fc2-7181-4a03-b25e-ba1f1e7f634c" />

---
 
## Workflow Process
 
- Step 1. Preparing the page
- Created `profile.html` and `profile.js`. Used the same menu, footer and styles as the other pages of the shop and added the "Profile" page to the navigation.
- Step 2. Object and calculations (Tasks 1 & 2)
- Wrote the `userProfile` object with four data types. Then wrote functions for the age and the age in months and checked the output in the browser console (F12).
- Step 3. Form and events (Tasks 3 & 4)
- Made the form in HTML. In JavaScript I used `addEventListener("submit", ...)` with `preventDefault()`, read the input values and updated the object and the page with `textContent`.
- Step 4. Working with the list (Task 5)
- Used `document.createElement("li")` and `appendChild` to add items and `lastElementChild.remove()` to delete the last item. Also added a check so an empty item is not added.
- Step 5. Testing and publishing
- Tested everything in the browser with correct and wrong values. Uploaded the project to GitHub and turned on GitHub Pages. Finished up the README.
