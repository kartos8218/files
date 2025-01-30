// Method 1: Using querySelector and style.display

// Select the element using its class name
const headerElement = document.querySelector('.Embed\\.Header'); // Note the escaped dot

// Check if the element exists before trying to modify it.  This is good practice!
if (headerElement) {
  headerElement.style.display = 'none';
} else {
  console.error("Element with class 'Embed.Header' not found.");
}



// Method 2:  Using getElementsByClassName (returns a collection)

const headerElements = document.getElementsByClassName('Embed.Header'); // Note the escaped dot

// getElementsByClassName returns a HTMLCollection, so you need to loop through it.
// Even if there's only one element, it's still a collection.

for (let i = 0; i < headerElements.length; i++) {
  headerElements[i].style.display = 'none';
}

// Or, if you are *absolutely sure* there's only one element with that class:
if (headerElements.length > 0) {
  headerElements[0].style.display = 'none';
} else {
  console.error("Element with class 'Embed.Header' not found.");
}


// Method 3 (Less common, but demonstrates classList):

const headerElement2 = document.querySelector('.Embed\\.Header');

if (headerElement2) {
  headerElement2.classList.add('hidden'); // Add a 'hidden' class
} else {
    console.error("Element with class 'Embed.Header' not found.");
}

// Then, in your CSS, you would define the 'hidden' class:
/* .hidden {
  display: none;
} */


// Important Note about the Escaped Dot:

// The class name "Embed.Header" has a dot in it.  Dots have special meaning in CSS selectors (they separate classes).  Therefore, you *must* escape the dot with a backslash (`\`) when using querySelector or querySelectorAll.  So, you have to use `.Embed\\.Header`.  If you don't escape it, the selector won't work correctly.  `getElementsByClassName` is a bit more forgiving, and sometimes works without escaping the dot, but it's best practice to always escape it for consistency.

// Which method to use?

* `querySelector` is generally preferred for its flexibility and ability to select elements using more complex CSS selectors.  It's also more concise if you only expect one element.
* `getElementsByClassName` is slightly older but can be useful if you need to work with a collection of elements that share the same class.
* Using `classList` and a CSS rule is often a good approach because it separates your JavaScript (for DOM manipulation) from your CSS (for styling). This makes your code more maintainable.

// Place the JavaScript Code:

You should place this JavaScript code either:

1. **Inside a `<script>` tag just before the closing `</body>` tag** of your HTML. This ensures that the HTML is parsed before the script runs.
2. **In a separate .js file**, and then include it in your HTML using `<script src="your-script.js"></script>` just before the closing `</body>` tag.  This is generally the better approach for larger projects.

Make sure the script runs *after* the element you're trying to modify exists in the DOM.
