const appMenuDrawerTemplate = document.createElement('template')
appMenuDrawerTemplate.innerHTML = `

<!-- Style -->
<style>
app-button {
  position: relative;
}
app-menu {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: scale(0);
  transform-origin: 50% 0 0;
  transition: opacity .03s linear, transform .12s cubic-bezier(0,0,.2,1), -webkit-transform .12s cubic-bezier(0,0,.2,1);
}
</style>

<!-- Template -->
<app-button type="contained">Open menu</app-button>
<app-menu></app-menu>
`

class AppMenuDrawer extends HTMLElement {
  static get observedAttributes() {
    return []
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.innerHTML = appMenuDrawerTemplate.innerHTML

    this._menuIsOpen = false
    this._menu = this._shadowRoot.querySelector('app-menu')
    this._menu.$items = [{ text: 'one' }, { text: 'two' }, { text: 'three' }]

    this.$opener = this._shadowRoot.querySelector('app-button')
    this.$opener.onclick = () => {
      this.toggleMenu()
    }
  }

  connectedCallback() {}

  toggleMenu() {
    const style = this._menu.style
    this._menuIsOpen ? this.showMenu(style) : this.hideMenu(style)
    this._menuIsOpen = !this._menuIsOpen
  }

  showMenu(style) {
    style.transform = 'scale(1)'
    style.opacity = 1
  }
  hideMenu(style) {
    style.transform = 'scale(0)'
    style.opacity = 0
  }
  // Getters and setters
}

customElements.define('app-menu-drawer', AppMenuDrawer)
