const appTextFieldTemplate = document.createElement('template')
appTextFieldTemplate.innerHTML = `
<style>
input {
  border: solid 1px var(--divider);
  border-radius: 4px;

  padding: 16px 8px 16px 14px;

  font-size: 1rem;

  background: transparent;
}

input:hover {
  border-color: var(--input-hover);
}

input:focus {
  border-color: var(--primary)
}
</style>
<input type="text">`

class AppTextField extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(appTextFieldTemplate.content.cloneNode(true))
  }
}

customElements.define('app-text-field', AppTextField)
