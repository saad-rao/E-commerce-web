// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Firebase Auth
    const auth = firebase.auth();

    // DOM Elements
    const loginBtn = document.getElementById('login-btn');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const errorMessage = document.getElementById('error-message');

    // Login Function
    loginBtn.addEventListener('click', () => {
        const email = emailInput.value;
        const password = passwordInput.value;

        // Basic Validation
        if (!email || !password) {
            errorMessage.textContent = 'Please fill all fields';
            return;
        }

        // Firebase Login
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('Logged in successfully as: ' + user.email);
                // Redirect to another page if needed
                window.location.href = "index.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                let message = 'Login failed                                          ';
                alert(`${message} You need to create an account first`)
                switch (errorCode) {
                    case 'auth/wrong-password':
                        message += 'Incorrect password';
                        break;
                    case 'auth/user-not-found':
                        message += 'User not found';
                        break;
                    case 'auth/invalid-email':
                        message += 'Invalid email format';
                        break;
                    default:
                        // message += error.message;
                }
                errorMessage.textContent = message;
            });
    });

    // Check Auth State (Optional: redirect if already logged in)
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