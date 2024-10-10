class TodoItem extends HTMLElement { // Inherit from HTMLElement
    constructor() {
        super(); // Initialize the HTMLElement constructor
        this.innerHTML = 'Hello World, from the custom element!'; // Set the innerHTML of the custom element
    }
}


// Register the custom element with the DOM

customElements.define('to-do', TodoItem); // Register the custom element with the DOM: NB! Needs to have a hyphen in the name