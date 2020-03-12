const appTextFieldTemplate = document.createElement('template')

appTextFieldTemplate.innerHTML = `
<style>
:host {
  display: flex;
  align-items: stretch;

  position: relative;

  height: 100%;
  width: 250px;

  font-family: Roboto, sans-serif;
  background: transparent;
}
/* Container */

.container:focus {
  max-width: 200px;
}

/* Input */
input {
  position: absolute;
  width: calc(100% - 24px);
  padding: 13px 9px 13px 15px;
  border: none;
  top: 0;
  left: 0; 
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
  border: 1px solid var(--divider);
}
.outline:focus {
  outline: none;
}
.leading {
  width: 10px;

  border-right: none;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.notch {
  position: relative;
  padding: 12px 4px;
  border-right: none;
  border-left: none;
  border-radius: 0;
  pointer-events: none;
}
.trailing {
  flex: 1;

  padding-right: 14px;

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
  background: transparent;
  color: var(--dark-gray);

  transition: all 150ms;
}

/* All border manipulations should be above Floating Label style */
input:hover ~ .outline {
  border-color: var(--input-hover);
}

/* Add border thickness of 1 px => make all outline divs 1px smaller*/
input:focus ~ .outline {
  border-color: var(--primary);
  border-width: 2px;
  padding-top: 11px;
  padding-bottom: 11px;
}
input:focus ~ .leading {
  width: 9px;
}
input:focus ~ .trailing {
  padding-right: 13px;
}

/* Floating label */
input:not(:placeholder-shown) ~ .notch, input:focus ~ .notch {
  border-top-color: transparent;
}
input:not(:placeholder-shown) ~ .notch > label, input:focus ~ .notch > label {
  top: calc(-28px + 0.375rem);
  font-size: 0.75rem;
}

input:focus ~ .notch > label {
  color: var(--primary)
}

/* Inisible placeholder hack to detect existing input text and keep label floating */
input::placeholder {
  color: transparent;
}
</style>
<input placeholder="stub" name="main">
<div class="outline leading"></div>
<div class="outline notch">
  <label for="main">
    <slot name='label'>Label</slot>
  </label>
</div>
<div class="outline trailing"></div>
`

class AppTextField extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(appTextFieldTemplate.content.cloneNode(true))
    this._input = shadowRoot.querySelector('input')
  }

  connectedCallback() {
    this._input.onfocus = () => {
      this.dispatchEvent(new CustomEvent('focus'))
    }
    this._input.onblur = () => {
      this.dispatchEvent(new CustomEvent('blur'))
    }
    this._input.oninput = () => {
      this.dispatchEvent(
        new CustomEvent('oninput', { detail: this._input.value })
      )
    }
  }

  // Getters and setters
  get inputValue() {
    return this._input.value
  }
  set inputValue(val) {
    this._input.value = val
  }
}

customElements.define('app-text-field', AppTextField)
