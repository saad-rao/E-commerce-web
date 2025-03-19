// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase Auth
    const auth = firebase.auth();

    // DOM Elements
    const signupBtn = document.getElementById('signup-btn');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
    const errorMessage = document.getElementById('signup-error');

    // Signup Function
    signupBtn.addEventListener('click', () => {
        const email = emailInput.value;
        const password = passwordInput.value;

        if (!email || !password) {
            errorMessage.textContent = 'Please fill all fields';
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                errorMessage.textContent = 'Signed up successfully as: ' + user.email;
                // Redirect to login page after signup
                // window.location.href = "index.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                let message = 'Signup failed: ';
                switch (errorCode) {
                    case 'auth/email-already-in-use':
                        message += 'Email already in use';
                        break;
                    case 'auth/invalid-email':
                        message += 'Invalid email format';
                        break;
                    case 'auth/weak-password':
                        message += 'Password should be at least 6 characters';
                        break;
                    default:
                        message += error.message;
                }
                errorMessage.textContent = message;
            });
    });

    // Check Auth State
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log('User is logged in: ', user.email);
            // Optionally redirect
            // window.location.href = "dashboard.html";
        } else {
            console.log('No user is logged in');
        }
    });
});