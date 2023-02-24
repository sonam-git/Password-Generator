# Password-Generator
The main purpose of this project is to tackle the challange to create using the javaScript skills and knowledge you learned from the class.

# Description
This project requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week’s coursework will teach you all the skills you need to succeed in this assignment.

## User Story
* AS AN employee with access to sensitive data
* I WANT to randomly generate a password that meets certain criteria
* SO THAT I can create a strong password that provides greater security
## Acceptance Criteria
* GIVEN I need a new, secure password
* WHEN I click the button to generate a password
* THEN I am presented with a series of prompts for password criteria
* WHEN prompted for password criteria
* THEN I select which criteria to include in the password
* WHEN prompted for the length of the password
* THEN I choose a length of at least 8 characters and no more than 128 characters
* WHEN asked for character types to include in the password
* THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt
* THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered
* THEN a password is generated that matches the selected criteria
* WHEN the password is generated
* THEN the password is either displayed in an alert or written to the page
# Motivation
This motivates you to work on Array, function, Javascript Window prompt() method,The Document method querySelector() etc. It basically helps you to get ready for the coming up challange and more depth understanding of this subjects.

# Technologies Used
* HTML
* CSS
* JavaScript
# Build Status
We were already given a starter code for this challange, and we mostly need to code around script.js file to the work done.

# code Style
Since we’re already given a starter code for this project. I didn’t do anything for index.html file. However, I updated little on css file and spent most of my time coding within the script.js file.

## HTML
Added link element with to link the reset.css file and modified it’s relative path.
## CSS
Added style on button ( border styling and hover for the same button, align h2 element center)
## JavaScript
* set default character length as 8
* created empty array to store the possible user inputs
* created 4 arrays with different value as per requirement asked in Acceptance Criteria.
* Get references to the #generate element
* Add event listener to generate button
* create function a function called writePassword() with the getPrompts function in it.
* getPrompts function basically get the user input, which display a prompt to ask for different input as per acceptance crite area such as length of the password, use of lowercase,uppercase,special characters, and numbers.
* There is another function called generatePassword (), which generates the passwords after user input and met all the requirements. I created a for loop, Math.floor() and Math.random() to create the password after user input.
* Most of the code inside the function were already given in the starter code, The only function I created is getPrompts for user input choice, and added for loop and Math.random() method to generate the password using user input .
# Screenshots
### First Render

![first preview](https://user-images.githubusercontent.com/89502092/221241752-c8503927-db25-4a21-9952-7efa46e19539.png)

### Ask user to input the length of password ( between 8 - 128)

![length](https://user-images.githubusercontent.com/89502092/221241815-a722c518-a221-4d37-9743-14b807a3e283.png)

### Ask if user wants to include lowercase in the password?

![lowercase](https://user-images.githubusercontent.com/89502092/221241882-279dccdb-8543-4f48-8e7e-fc1e1dd5a9d7.png)

### Ask if user wants to include uppercase in the password?

![uppercase](https://user-images.githubusercontent.com/89502092/221241936-fb4a202a-c449-44cb-b6cb-7116f4f651ee.png)

### Ask if user wants to include special characters in the password?

![special characters](https://user-images.githubusercontent.com/89502092/221241973-a9a8de79-6eed-4ec5-8a20-332ebb845aa0.png)

### Ask if user wants to include numbers in the password?

![numbers](https://user-images.githubusercontent.com/89502092/221242010-2c583b6e-28a4-4fca-849a-5cecfe7f033e.png)

### Final render with the generated password using user inputs

![password generated](https://user-images.githubusercontent.com/89502092/221242069-08157fe8-a45b-4b87-a7ad-ac235bdd744b.png)

# Github URL:
https://github.com/sonam-git/Password-Generator

# Deployed Live URL:
https://sonam-git.github.io/Password-Generator/

# License
N/A
