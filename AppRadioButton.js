const appRadioButtonTemplate = document.createElement('template')
appRadioButtonTemplate.innerHTML = `

<!-- Style -->
<style>
:host {
  display: flex;
}
:host([vertical]) {
  flex-direction: column;
}

input[type='radio'] {
  display: none;
  /*removes original button*/
}

.outerCircle {
  /*styles outer circle*/
  width: 16px;
  height: 16px;

  border-radius: 11px;
  border: 2px solid ;
  border-color: var(--divider);
  background-color: transparent;
}

label {
  display: flex;
  align-items: center;
  position: relative;
  /* padding: 8px 20px 8px 32px; */
}

input:checked + .innerCircle {
  /*styles inside circle*/
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 9px;
  left: 5px;
  background-color: var(--primary);
}
input:focus + app-overlay {
  
}
</style>

<!-- Template -->
`

class AppRadioButton extends HTMLElement {
  static get observedAttributes() {
    return []
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appRadioButtonTemplate.innerHTML

    this._items = []
  }

  connectedCallback() {
    this._render()
  }

  _render() {
    this.items.forEach(item => {
      const radioButton = document.createElement('input')
      radioButton.setAttribute('type', 'radio')
      radioButton.setAttribute('name', 'appRadioButtonsGroup')
      radioButton.setAttribute('id', item.value)
      radioButton.setAttribute('value', item.value)

      const innerCircle = document.createElement('div')
      innerCircle.classList.add('innerCircle')

      const outerCircle = document.createElement('div')
      outerCircle.classList.add('outerCircle')

      const label = document.createElement('label')
      label.setAttribute('for', item.value)

      const text = document.createElement('app-body2')
      text.innerHTML = item.text

      label.appendChild(outerCircle)
      label.appendChild(radioButton)
      label.appendChild(innerCircle)
      label.appendChild(text)

      this._shadowRoot.appendChild(label)
    })
  }
  // Getters and setters
  get items() {
    return this._items
  }
  set items(val) {
    this._items = val
    this._render()
  }
}

customElements.define('app-radio-button', AppRadioButton)
