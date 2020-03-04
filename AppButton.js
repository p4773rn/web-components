// Contained button, for now
const appButtonTemplate = document.createElement('template')
appButtonTemplate.innerHTML = `
<style>
  /* Base (Text) style */
  button {
    position: relative;

    min-width: 64px;
    height: 36px;

    padding: var(--horizontal-3);

    border: none;
    text-decoration: none;
    background: none;

    box-shadow: var(--elevation-0dp);

    cursor: pointer;

    transition: all 0.1s;

    z-index: 0;
  }
  button:focus {
    outline: none;
  }
  button:focus > .overlay {
    opacity: 0.12;
  }
  button:hover > .overlay {
    opacity: 0.08;
  }
  button:active > .overlay {
    opacity: 0.16;
  }

  .text {
    position: relative;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 14px;
    color: var(--primary);

    z-index: 2;
  }

  /* Disabled style */
  :host([type="disabled"]) {
    cursor: default;
    pointer-events: none;
    user-select: none;
  }
  button:disabled {
    background: var(--disabled);
    cursor: default;
  }
  button:disabled > .text {
    color: var(--on-disabled)
  }

  /* Contained button style */
  :host([type="contained"]) > button {
    box-shadow: var(--elevation-2dp);
    background-color: var(--primary)
  }
  :host([type="contained"]) > button:hover {
    box-shadow: var(--elevation-4dp);
  }
  :host([type="contained"]) > button:active {
    box-shadow: var(--elevation-8dp);
  }
  :host([type="contained"]) > button > .text {
    color: var(--on-primary)
  }

  /* Overlay */
  .overlay {
    position: absolute;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    opacity: 0;
    z-index: 1;
  }
</style>
<button onClick="">
  <span class="text">
    <slot>Submit</slot>
  </span>
  <span class="overlay"></span>
</button>

`
class AppButton extends HTMLElement {
  static get observedAttributes() {
    return ['type']
  }
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(appButtonTemplate.content.cloneNode(true))
  }

  connectedCallback() {
    const button = this.shadowRoot.querySelector('button')
    if (!this.hasAttribute('role')) this.setAttribute('role', 'button')
    if (this.type === 'disabled') button.setAttribute('disabled', '')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const hasValue = newValue !== null
    if (newValue === 'disabled') {
      this.shadowRoot.querySelector('button').setAttribute('disabled', '')
    }
  }

  get type() {
    if (this.hasAttribute('type')) {
      return this.attributes.type.value
    } else {
      return false
    }
  }
  set type(val) {
    const hasType = Boolean(val)
    if (hasType) {
      this.setAttribute('type', val)
    } else {
      this.removeAttribute('type')
    }
  }
}

customElements.define('app-button', AppButton)
