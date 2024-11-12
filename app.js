// Get DOM elements
const signupForm = document.querySelector('.signup-container');
const loginLink = document.querySelector('.login-link a');
const headerText = document.querySelector('.signup-container h2');
const submitButton = document.querySelector('button');

// Track current form state
let isLoginForm = false;

// Function to toggle between signup and login
function toggleForm(e) {
    if (e) {
        e.preventDefault();
    }

    // Toggle state
    isLoginForm = !isLoginForm;

    // Add fade out animation
    signupForm.style.opacity = '0';
    
    setTimeout(() => {
        // Update form content
        if (isLoginForm) {
            headerText.textContent = 'LOGIN';
            submitButton.textContent = 'Login';
            loginLink.textContent = 'Don\'t have an account? Sign Up';
        } else {
            headerText.textContent = 'SIGN UP';
            submitButton.textContent = 'Sign Up';
            loginLink.textContent = 'Already have an account? Login';
        }

        // Add fade in animation
        signupForm.style.opacity = '1';
    }, 200);
}

// Add transition style to the form
signupForm.style.transition = 'opacity 0.2s ease-in-out';

// Add click event listener to the login/signup link
loginLink.addEventListener('click', toggleForm);

// Handle form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    if (isLoginForm) {
        console.log('Login attempted');
        console.log('Email:', email);
        console.log('Password:', password);
    } else {
        console.log('Signup attempted');
        console.log('Email:', email);
        console.log('Password:', password);
    }
});


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBmnfvxXf-MdS8wQtpITJuLoTgSjAaiDNY",
    authDomain: "me-tube-b0ff9.firebaseapp.com",
    projectId: "me-tube-b0ff9",
    storageBucket: "me-tube-b0ff9.firebasestorage.app",
    messagingSenderId: "760533061101",
    appId: "1:760533061101:web:1a43918dc0b6b56392ebe4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);