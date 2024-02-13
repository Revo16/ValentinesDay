var isPasswordEntered = false;

// Function to check the password
function checkPassword() {
  if (!isPasswordEntered) {
      var enteredPassword = document.getElementById("password").value;
      var correctPassword = "bear"; // Change this to your desired password

      if (enteredPassword === correctPassword) {
          isPasswordEntered = true;
          document.getElementById("password-prompt").style.display = "none";
          document.getElementById("main-content").style.display = "block";
      } else {
          // Show an error message on the page
          document.getElementById("password-error").style.display = "block";
      }
  }
}

function showMessage(response) {
    if (isPasswordEntered) {
        if (response === "No") {
            const noButton = document.getElementById("no-button");
            const container = document.querySelector(".container");
            const maxWidth = window.innerWidth - noButton.offsetWidth;
            const maxHeight = window.innerHeight - noButton.offsetHeight;

            // Set button position to absolute
            noButton.style.position = "absolute";

            // Change image source to "gun.gif"
            document.getElementsByClassName("image")[0].src = "images/gun.gif";

            // Generate random coordinates within the visible container
            const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
            const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

            // Apply new coordinates to the button
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";

            // Update text content and hide name message
            document.getElementById("question").textContent =
                "The no button is just for the visual silly";
            document.getElementById("name").style.display = "none";

            // Optional: You can also add a timeout to reset the position after a few seconds
        }

        if (response === "Yes") {
            // Remove name message and no button
            document.getElementById("name").remove();
            document.getElementById("no-button").remove();

            // Update text content, show message, and change image source to "dance.gif"
            const yesMessage = document.getElementById("question");
            yesMessage.textContent = "Can't wait to spend the 14th with you :)";
            yesMessage.style.display = "block";
            yesMessage.style.fontStyle = "normal";
            document.getElementsByClassName("image")[0].src = "images/dance.gif";

            // Remove yes button
            document.getElementById("yesButton").remove();
        }
    } else {
        alert("Please enter the password first.");
    }
}

// Function to initialize the page state
function init() {
  // Hide the main content initially
  document.getElementById("main-content").style.display = "none";
}

// Call the init function to set up the initial state
init();