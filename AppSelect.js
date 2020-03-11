const appSelectTemplate = document.createElement('template')
appSelectTemplate.innerHTML = `

<!-- Style -->
<style>
:host {
  display: inline-block;
  width: 250px;
}
app-text-field {
  width: 100%;
  height: 56px;
}
.menu-wrapper {
  position: relative;
  width: 100%;
}
app-menu {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  opacity: 0;
}
</style>

<!-- Template -->
<app-text-field>
  <span slot="label">Password</span>
</app-text-field>
<div class="menu-wrapper">
  <app-menu></app-menu>
</div>
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
    this.$items = [{ text: 'one' }, { text: 'two' }, { text: 'three' }]

    this._menu = this._shadowRoot.querySelector('app-menu')
    this._menu.items = this.$items

    this._opener = this._shadowRoot.querySelector('app-text-field')

    this._label = this._shadowRoot.querySelector('span')
    this._label.innerHTML = this.label
    this._selected = null
  }

  connectedCallback() {
    const style = this._menu.style
    this._opener.addEventListener('onfocus', () => {
      this.showMenu(style)
    })
    this._opener.addEventListener('onblur', () => {
      this.hideMenu(style)
    })
    this._opener.addEventListener('oninput', input => {
      this.handleInput(input)
    })
  }

  showMenu(style) {
    this._menu.items = this.$items
    style.transition = 'opacity 0.1s linear'
    style.opacity = 1
  }
  hideMenu(style) {
    style.transition = ''
    style.opacity = 0
  }

  handleInput(input) {
    const filtered = this.$items.filter(item =>
      item.text.includes(input.detail)
    )
    this._menu.items = filtered
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
