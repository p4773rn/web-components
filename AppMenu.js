const appMenuTemplate = document.createElement('template')
appMenuTemplate.innerHTML = `
<!-- Style -->
<style>
:host {
  display: block;
  
  min-width: 112px;
  border-radius: 4px;

  box-shadow: var(--elevation-2dp);
  background: var(--surface);
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
ul > app-overlay {
  display: flex;
  align-items: center;
  min-height: 48px;
}
ul > app-overlay > li {
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 16px;
}
</style>

<!-- Template -->
<ul>
</ul>
`

class AppMenu extends HTMLElement {
  static get observedAttributes() {
    return []
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = appMenuTemplate.innerHTML
    if (this._items === undefined) {
      this._items = []
    }
  }

  connectedCallback() {
    this._render()
  }

  // TODO: optimize this to create only missing items
  _render() {
    const sr = this._shadowRoot
    const list = sr.querySelector('ul')

    // Clear list
    list.innerHTML = ''
    this._items.forEach(item => {
      const typography = document.createElement('app-body2')
      typography.innerHTML = item.text

      const li = document.createElement('li')
      li.appendChild(typography)

      const overlay = document.createElement('app-overlay')
      overlay.appendChild(li)
      overlay.onclick = () => {
        list.dispatchEvent()
      }
      list.appendChild(overlay)
    })
  }

  get items() {
    return this._items
  }
  set items(val) {
    this._items = val
    this._render()
  }
  // Getters and setters
}

customElements.define('app-menu', AppMenu)
