//your JS code here. If required.
// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
  // Get form elements
  const preferencesForm = document.getElementById("preferencesForm");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Load saved preferences from cookies
  const savedFontSize = getCookie("fontSize");
  const savedFontColor = getCookie("fontColor");

  // Apply saved preferences or defaults
  if (savedFontSize) {
    fontSizeInput.value = savedFontSize;
    document.body.style.fontSize = savedFontSize + "px";
  }
  if (savedFontColor) {
    fontColorInput.value = savedFontColor;
    document.body.style.color = savedFontColor;
  }

  // Add event listener for form submission
  preferencesForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Save preferences as cookies
    setCookie("fontSize", fontSizeInput.value, 30); // Save for 30 days
    setCookie("fontColor", fontColorInput.value, 30);

    // Apply preferences immediately
    document.body.style.fontSize = fontSizeInput.value + "px";
    document.body.style.color = fontColorInput.value;

    alert("Preferences saved successfully!");
  });

  // Function to set cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
  }

  // Function to get cookie
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }
});
