const appMenuTemplate = document.createElement('template')
appMenuTemplate.innerHTML = `
<!-- Style -->
<style>
:host {
  display: inline-block;
  
  min-width: 112px;
  max-width: 280px;

  border-radius: 4px;

  box-shadow: var(--elevation-2dp);
  background: var(--surface);
}
div {
  display: flex;
  flex-direction: column;
}
div > app-overlay {
  display: flex;
  align-items: center;
  min-height: 48px;
}
div > app-overlay > span {
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 16px;
}
</style>

<!-- Template -->
<div>
</div>
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
    console.log(this.$items)

    this.$items.forEach(item => {
      const span = document.createElement('span')
      span.innerHTML = item.text

      const overlay = document.createElement('app-overlay')
      overlay.appendChild(span)
      overlay.onclick = sr.querySelector('div').appendChild(overlay)
    })
  }

  get data() {}
  // Getters and setters
}

customElements.define('app-menu', AppMenu)
