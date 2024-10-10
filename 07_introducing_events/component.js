const template = document.createElement('template'); // Create a template element
template.innerHTML = `
    <style>
        label {
            display: block;
            color: red;
        }

        .description {
            font-size: .65rem;
            font-weight: lighter;
            color: #777;
        }
    </style>
    <label>
        <input type="checkbox"/>
        <slot></slot>
        <span class="description">
            <slot name="description"></slot>
        </span>
    </label>
`; // Set the innerHTML of the template element

class TodoItem extends HTMLElement { // Inherit from HTMLElement
    constructor() {
        super(); // Initialize the HTMLElement constructor
        const shadow = this.attachShadow({mode: 'open'}); // Create a shadow root -- open mode allows us to access the shadow root from JavaScript

        // Append the template content to the shadow root
        shadow.appendChild(template.content.cloneNode(true));
        this.checkbox = shadow.querySelector('input');
    }

    // register  what attributes to watch
    static get observedAttributes() {
        return ['checked'];
    }

    // Add an event listener to the checkbox
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
        if (name === 'checked') this.updateChecked(newValue)
    }

    // An event listener for connecting
    connectedCallback() {
        console.log("connected!")
    }

    // An event listener for disconnecting
    disconnectedCallback() {
        console.log("connected!")
    }

    // Define a function which will check the checkbox
    updateChecked(value) {
        this.checkbox.checked = value != null && value !== "false";
    }
}


// Register the custom element with the DOM
customElements.define('to-do', TodoItem); // Register the custom element with the DOM: NB! Needs to have a hyphen in the name


// Set the checked attribute of the custom element every 0.5 seconds

const item = document.querySelector('to-do');
// item.remove()

// let checked = true;
// setInterval(() => {
//     document.querySelector('to-do').setAttribute('checked', checked);
//     checked = !checked;
// }, 500); 