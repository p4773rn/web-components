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
    if (this.$items === undefined) {
      this.$items = []
    }
  }

  connectedCallback() {
    const sr = this._shadowRoot

    this.$items.forEach(item => {
      const li = document.createElement('li')
      li.innerHTML = item.text

      const overlay = document.createElement('app-overlay')
      overlay.appendChild(li)
      overlay.onclick = sr.querySelector('ul').appendChild(overlay)
    })
  }

  get data() {}
  // Getters and setters
}

customElements.define('app-menu', AppMenu)
