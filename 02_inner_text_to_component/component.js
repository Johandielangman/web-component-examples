class TodoItem extends HTMLElement { // Inherit from HTMLElement
    constructor() {
        super(); // Initialize the HTMLElement constructor
        this.innerHTML = `<p>${this.innerText}</p>` // Pass through the inner text
    }
}


// Register the custom element with the DOM

customElements.define('to-do', TodoItem); // Register the custom element with the DOM: NB! Needs to have a hyphen in the name