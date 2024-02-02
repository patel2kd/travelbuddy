/*async function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            console.log('User signed up successfully');
        } else {
            console.error('Failed to sign up:', response.statusText);
        }
    } catch (error) {
        console.error('Error during signup:', error.message);
    }
}

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            console.log('User logged in successfully');
        } else {
            console.error('Failed to log in:', response.statusText);
        }
    } catch (error) {
        console.error('Error during login:', error.message);
    }
}
*/
// script.js

document.addEventListener('DOMContentLoaded', () => {
    loadHome(); // Load home content by default
});

async function loadHome() {
    clearContent();
    // Fetch and display home content (posts, etc.)
    console.log('Loading Home');
}

async function loadExplore() {
    clearContent();
    // Fetch and display explore content
    console.log('Loading Explore');
}

async function loadProfile() {
    clearContent();
    // Fetch and display user profile
    await getUserProfile(); // Make sure this function is defined
    console.log('Loading Profile');
}

async function loadSignup() {
    clearContent();
    // Display the signup form
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Sign Up</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Your email">

        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Your password">

        <button onclick="signup()">Sign Up</button>
    `;
    console.log('Loading Sign Up');
}

async function loadLogin() {
    clearContent();
    // Display the login form
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Your email">

        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Your password">

        <button onclick="login()">Login</button>
    `;
    console.log('Loading Login');
}

function clearContent() {
    // Clear the content section
    const content = document.getElementById('content');
    content.innerHTML = '';
}


function post() {
    let postContent = document.getElementById('postContent').value;

    if (postContent.trim() !== '') {
        let postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p>${postContent}</p>
            <button onclick="comment(this)">Comment</button>
        `;

        document.getElementById('posts').appendChild(postElement);

        // Clear the textarea after posting
        document.getElementById('postContent').value = '';
    }
}
document.getElementById('postButton').addEventListener('click', post);


function comment(button) {
    let commentContent = prompt("Comment on this post:");
    if (commentContent !== null) {
        let commentElement = document.createElement('p');
        commentElement.innerHTML = `<strong>You:</strong> ${commentContent}`;
        button.parentNode.appendChild(commentElement);
    }
}

