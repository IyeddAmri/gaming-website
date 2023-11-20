document.addEventListener("DOMContentLoaded", function () {
    // Get the button element by its ID
    var navigateButton = document.getElementById("here");

    // Add a click event listener to the button
    navigateButton.addEventListener('click', function () {
      // Navigate to another HTML page (replace 'anotherPage.html' with the actual file name)
      window.location.href = 'http://127.0.0.1:5501/index.html';
    });
  })