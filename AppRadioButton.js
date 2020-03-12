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

label:before {
  /*styles outer circle*/
  content: " ";
  display: inline-block;
  position: relative;
  top: 5px;
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 11px;
  border: 2px solid var(--divider);
  background-color: transparent;
}

label {
  position: relative;
}

label input:checked + span {
  /*styles inside circle*/
  border-radius: 11px;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 11px;
  left: 6px;
  display: block;
  background-color: var(--primary);
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

      const insideCircle = document.createElement('span')

      const label = document.createElement('label')
      label.setAttribute('for', item.value)
      label.innerHTML = item.text

      label.appendChild(radioButton)
      label.appendChild(insideCircle)

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
