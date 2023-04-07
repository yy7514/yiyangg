A3 - README.txt

Code Source: 
    
    This code is based on codes from CSCI1170 A1 and A2. 

Things to know: 

    There is a css file called: common.css, which is linked to all html files. 
    For each webpage (html files), there is a corresponding css files. 
    There are two javascript files: JavaScript.js and theme.js.

Website Overview:

    This is a personal professional website. Since I aim to be a programmer after I graduate from university. This website is designed for an informative pupose. I wish this website could be helpful for my future carrer, so it contains information, such as personal skills and educational experience. 

Asset Lists: 

    codemusic.m4a
    email.png
    facebook.png
    instagram.png
    icon.png
    java code sample.png
    java code sample 2.png
    python method 1.png
    1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg, 10.jpg, 11.jpg, 12.jpg, 13.jpg, 14.jpg, 15.jpg, 16.jpg
    contact.MOV
    Youtube video: "What do programmers do?"
    Link to facebook page: https://www.facebook.com/profile.php?id=100089836434398
    Link to instagram page: https://instagram.com/g.yiyang?igshid=MWI4MTIyMDE=
    Link to email address: yysec002@gmail.com 

file structure:

    A3:
        CSS:
            codesamples.css
            common.css
            contact.css
            index.css
            myskills.css
        html:
            codesamples.html
            contact.html
            index.html
            myskills.html
        JS:
            JavaScript.js
            theme.js
        vid&aud:
            codemusic.m4a
            contact.MOV
        support doc:
            README.txt
            Code Review.pdf
            Wireframes.pdf
        picture:
            email.png
            facebook.png
            instagram.png
            icon.png
            java code sample.png
            java code sample 2.png
            python method 1.png
            1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg, 10.jpg, 11.jpg, 12.jpg, 13.jpg, 14.jpg, 15.jpg, 16.jpg 

    There are 6 directories in the file: CSS, HTML, JS, picture, support doc, and vid&aud directory. In each directory, the corresponding files are located there. For example, index.html is in html directory. 

Functions used in JavaScript.js :

    Line 2 - 24: these code are used to change the theme of the website based on user selection. It works by adding event listeners to three different buttons, each representing a different theme option. When the user selects one of the buttons, the corresponding theme is applied to the website.
    Line 6 - 24: add event listeners to the first, second and third button. When the button is clicked, the code inside the curly braces is executed. lovalStorage sets a value in the browser's local storage to remember the user's theme preference. In this case, it sets the "theme" key to the value "default", indicating that the default theme is selected.
    Line 28 - 49: the validateForm() function is used to validate a web form called "contactForm" when it is submitted by the user. The validation checks if any of the required fields of the form are left empty, and if so, it sets their background color to yellow to indicate an error.
    Line 56 - 72: the showArticle(articleId) function is used to show a specific article on a page based on the articleId and highlight the corresponding button while hiding all other articles and removing the highlight from their corresponding buttons.
    Line 76 - 80: the document.querySelector() is used to select the first element with the id, "contactForm". the function displays an notification with the text "Please contact me for any questions or inquiries."

Functions used in theme.js:

    Line 1 - 2: this code retrieves the current theme from localStorage and applies it to the body element of the webpage, allowing the appropriate styles to be applied to the entire page based on the selected theme. if the localStorage is null, the function returns 'default'.

Functions used in index.html :

    Line 25-34: I used a table to arrange the self-introduction part. I used <h1> and <h2> tags to highlight the text. 
    Line 51-54: I used audio to embed an audio track, which is a piece of music written in the C programming language. I include this music in my website to show that the programmer can do lots of things. 
    Line 59: I used iframe to embed a Youtube video, which explains the role of the programmer. 

Functions used in myskills.html :

    Line 35-40: I used ol (ordered list) to create a list of soft skills I have to be a programmer. 
    Line 45-53: I used the nested list to create a list of hard skills I possess. There is a ul (unordered list) inside an ol (ordered list).
    Line 48-49: I used anchor tags to create two section links for both 'java' and 'python' code samples, which correspond to the fragment identifiers in codesamples.html. 

Functions used in codesamples.html :

    Line 45-50: I used ul (unordered list) to explain the input information for the Java program. 
    Line 55 & 59 & 95: I used img to embed a screenshot of my Java and Python code. 
    Line 30 & 75: I use id="" to create two fragment identifiers. 
    Line 100: I used an anchor tag to create a link that links to an external resource about Canadian elections. 

Functions used in contact.html :

    Line 30-34: I used 3 anchor tags to create links that link to my email address, Instagram page, and Facebook page. These are used for contact information.
    Line 38-40: I used video to embed a short video of my cat. 


References:

    [1] Alexander Zolotov. 2021. Music created with the C programming language. YouTube. Retrieved February 8, 2023 from https://www.youtube.com/watch?v=8r8wsvHUbC
    [2] Codecedemy. 2020. What do programmers do?. YouTube. Retrieved February 8, 2023 from https://www.youtube.com/watch?v=kEjCfsrotAM&list=PPSV
    [3] Icons8. facebook. Retrieved February 8, 2023 from https://icons8.com/icons/set/facebook
    [4] Icons8. instagram. Retrieved February 8, 2023 from https://icons8.com/icons/set/instagram
    [5] Icons8. email. Retrieved February 8, 2023 from https://icons8.com/icons/set/email
    [6] Icons8. Y. Retrieved February 8, 2023 from https://icons8.com/icons/set/y
    [7] Monica White. 2022. 9 Highest Paying Programming Jobs in 2023. SpringBoard. Retrieved April 7, 2023 from https://www.springboard.com/blog/software-engineering/highest-paying-programming-jobs
    [8] Pexels. Retrieved April 7, 2023 from https://www.pexels.com/
   
