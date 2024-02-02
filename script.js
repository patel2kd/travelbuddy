// Sample data for local development
let users = [];
let travelPosts = [];

// Function to handle user signup
function signup() {
    // Get form values
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Create user object
    let user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    // Add user to the list
    users.push(user);

    // Clear the form
    document.getElementById('signupForm').reset();

    alert("Signup successful! Please login.");
}

// Function to handle user login
function login() {
    // Get form values
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Check if user exists
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Clear the form
        document.getElementById('loginForm').reset();

        // Redirect to home page (for now, you might use a better navigation method)
        window.location.href = 'home.html';
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Function to handle posting travel plans
function post() {
    // Get post content
    let postContent = document.getElementById('postContent').value;

    // Create post object
    let post = {
        user: "Current User", // You might associate posts with logged-in users
        content: postContent,
        comments: []
    };

    // Add post to the list
    travelPosts.push(post);

    // Clear the form
    document.getElementById('postForm').reset();

    // Update posts on the home page
    updatePosts();
}

// Function to update posts on the home page
function updatePosts() {
    let postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    travelPosts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.innerHTML = `
            <p>${post.user}: ${post.content}</p>
            <button type="button" onclick="comment('${post.user}', '${post.content}')">Comment</button>
        `;

        // Display comments
        post.comments.forEach(comment => {
            postElement.innerHTML += `<p>${comment.user}: ${comment.content}</p>`;
        });

        postsContainer.appendChild(postElement);
    });
}

// Function to handle comments on travel posts
function comment(user, content) {
    // Sample: Prompt for simplicity, in a real app you'd have a better UI
    let commentContent = prompt(`Comment on ${user}'s post: "${content}"`);

    // Find the post
    let post = travelPosts.find(p => p.user === user && p.content === content);

    if (post) {
        // Add comment to the post
        post.comments.push({ user: "Current User", content: commentContent });

        // Update posts on the home page
        updatePosts();
    }
}

// Initial update of posts on page load
updatePosts();
