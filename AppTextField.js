const appTextFieldTemplate = document.createElement('template')

appTextFieldTemplate.innerHTML = `
<style>
/* Container */
.container {
  display: flex;
  align-items: stretch;
  position: relative;
  max-width: 250px;
  font-family: Roboto, sans-serif;
}

.container:focus {
  max-width: 200px;
}

/* Input */
input {
  position: absolute;
  width: calc(100% - 24px);
  padding: 12px 8px 12px 14px;
  border: none;
  top: 1px;
  left: 1px; 
  font-size: 1rem;
  background: transparent;
  
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

  border-right: none;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.notch {
  position: relative;
  padding: 12px 2px;
  border-right: none;
  border-left: none;
  border-radius: 0;
}
.trailing {
  flex: 1;

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
  transition: all 150ms;
  background: transparent;
}
input:not(:placeholder-shown) ~ .notch, input:focus ~ .notch {
  border-top-color: transparent;
}
input:not(:placeholder-shown) ~ .notch > label, input:focus ~ .notch > label {
  top: calc(-28px + 0.375rem);
  font-size: 0.75rem;
}

input::placeholder {
  color: transparent;
}
</style>
<div class="container">
  <input placeholder="stub" name="main">
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
}

customElements.define('app-text-field', AppTextField)
