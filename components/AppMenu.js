const appMenuTemplate = document.createElement('template')
appMenuTemplate.innerHTML = `
<!-- Style -->
<style>
:host {
  display: block;
  position: relative;
  width: 100%;

  min-width: 112px;

  transition: opacity 100ms;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  border-radius: 4px;

  box-shadow: var(--elevation-2dp);
  background: var(--surface);
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

:host([class="hidden"]) {

  opacity: 0;
  z-index: -1;
}
:host([class="shown"]) {

  opacity: 1;
  z-index: 1;
}
</style>

<!-- Template -->
<ul></ul>

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
    this.classList.add('hidden')
    this._render()
  }

  // TODO: optimize this to create only missing items
  _render() {
    const sr = this._shadowRoot
    const list = sr.querySelector('ul')

    // Clear list
    list.innerHTML = ''
    // Add items
    this._items.forEach(item => {
      const typography = document.createElement('app-body2')
      typography.innerHTML = item.text

      const li = document.createElement('li')
      li.appendChild(typography)

      const overlay = document.createElement('app-overlay')
      overlay.appendChild(li)
      overlay.onclick = () => {
        this.dispatchEvent(new CustomEvent('select', { detail: item }))
      }
      list.appendChild(overlay)
    })
  }

  hide() {
    this.classList = ''
    this.classList.add('hidden')
  }

  show() {
    this.classList = ''
    this.classList.add('shown')
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

customElements.define('app-menu', AppMenu)
