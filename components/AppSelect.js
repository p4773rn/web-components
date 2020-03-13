const appSelectTemplate = document.createElement('template')
appSelectTemplate.innerHTML = `

<!-- Style -->
<style>
:host {
  display: inline-block;
  width: 250px;
}
:host:focus {
  outline: none;
}
app-text-field {
  width: 100%;
}
</style>

<!-- Template -->
<app-text-field>
  <span slot="label">Password</span>
</app-text-field>
<app-menu></app-menu>

`

class AppSelect extends HTMLElement {
  static get observedAttributes() {
    return ['label']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.innerHTML = appSelectTemplate.innerHTML

    this._defaultLabel = 'Label'
    this.$items = [
      { text: 'one', value: 1 },
      { text: 'two', value: 2 },
      { text: 'three', value: 3 },
    ]

    this._menu = this._shadowRoot.querySelector('app-menu')
    this._menu.items = this.$items

    this._opener = this._shadowRoot.querySelector('app-text-field')

    this._label = this._shadowRoot.querySelector('span')
    this._label.innerHTML = this.label
    this._selected = null
  }

  connectedCallback() {
    if (!this.hasAttribute('tabindex')) this.setAttribute('tabindex', 0)

    this.onfocus = () => {
      this.style.outline = 'none'
      this._menu.items = this.$items
      this._menu.show()
    }
    this.onblur = () => {
      this._menu.hide()
    }

    this._menu.addEventListener('select', event => {
      this.handleSelect(event.detail)
      this.blur()
    })
    this._opener.addEventListener('focus', () => {
      this._menu.show()
    })

    this._opener.addEventListener('oninput', event => {
      this.handleInput(event.detail)
    })
  }

  // Filter menu items
  handleInput(input) {
    const filtered = this.$items.filter(item => item.text.includes(input))

    if (filtered.length === 0) {
      // TODO: restrict selecting non-existing item
    }

    this._menu.items = filtered
  }

  // Put selected item text into text-field's input
  handleSelect(item) {
    this._selected = item
    this._opener.inputValue = item.text
  }

  // Getters and setters
  get label() {
    if (this.hasAttribute('label')) {
      return this.attributes.type.value
    } else {
      return this._defaultLabel
    }
  }
  set label(val) {
    const hasType = Boolean(val)
    if (hasType) {
      this.setAttribute('label', val)
    } else {
      this.removeAttribute('label')
    }
  }
}

customElements.define('app-select', AppSelect)
