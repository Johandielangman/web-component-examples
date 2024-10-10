const template = document.createElement('template'); // Create a template element
template.innerHTML = `
    <style>
        h3 {
            color: green;
        }
    </style>
    <h3></h3>
`; // Set the innerHTML of the template element

class TodoItem extends HTMLElement { // Inherit from HTMLElement
    constructor() {
        super(); // Initialize the HTMLElement constructor
        const shadow = this.attachShadow({mode: 'open'}); // Create a shadow root -- open mode allows us to access the shadow root from JavaScript

        // Append the template content to the shadow root
        const instance = template.content.cloneNode(true);
        const h3 = instance.querySelector('h3');
        h3.textContent = this.textContent;
        
        shadow.appendChild(instance);
    }
}

// Register the custom element with the DOM
customElements.define('to-do', TodoItem); // Register the custom element with the DOM: NB! Needs to have a hyphen in the name