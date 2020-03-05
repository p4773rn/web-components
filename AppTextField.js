const appTextFieldTemplate = document.createElement('template')

appTextFieldTemplate.innerHTML = `
<style>
/* Container */
.container {
  display: flex;
  position: relative;
  max-width: 250px;
}

.container:focus {
  max-width: 200px;
}

/* Input */
input {
  position: absolute;
  width: calc(100% - 28px);
  padding: 0;
  border: none;
  top: 16px;
  left: 14px; 
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5);
  
}

input:focus {
  outline: none;
}

/* Outlines */
.outline {
  padding: 12px 0;
  transition: all 150ms;
  border-radius: 4px;
  border: 1px solid;
}
.leading {
  width: 14px;
  background: rgba(255, 0, 0, 0.4);

  border-right: none;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.notch {
  position: relative;
  background: rgba(0, 255, 0, 0.4);

  border-right: none;
  border-left: none;
  border-radius: 0;
}
.trailing {
  flex: 1;
  background: rgba(0, 0, 255, 0.4);

  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Label */
label {
  position: relative;
  top: 0;
  left: 0;
  font-size: 1rem;
  transition: all 200ms;
}
input:focus ~ .notch > label {
  top: -28px;
  font-size: 0.75rem;
}
</style>
<div class="container" onclick="this.getRootNode().host.focus()">
  <input name="main">
  <div class="outline leading"></div>
  <div class="outline notch">
    <label for="main">Label</label>
  </div>
  <div class="outline trailing"></div>
</div>
`

class AppTextField extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(appTextFieldTemplate.content.cloneNode(true))
  }

  connectedCallback() {
    const input = this.shadowRoot.querySelector('input')
    const label = this.shadowRoot.querySelector('label')
  }

  focus() {
    // Allow text input
    console.log('xD')
    const input = this.shadowRoot.querySelector('input')
    input.focus()
  }
}

customElements.define('app-text-field', AppTextField)
