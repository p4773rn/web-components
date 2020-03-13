// Contained button, for now
const appButtonTemplate = document.createElement('template')
appButtonTemplate.innerHTML = `
<style>
  :host {
    display: block;
  }
  /* Base (Text) style */
  button {
    position: relative;

    min-width: 64px;
    width: 100%;
    height: 36px;

    padding: var(--horizontal-3);

    border: none;
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

  typography-button {
    position: relative;
    color: var(--primary);

    z-index: 2;
  }

  /* Disabled style */
  :host([disabled]) {
    cursor: default;
    pointer-events: none;
    user-select: none;
  }
  button:disabled {
    background: var(--disabled);
    cursor: default;
  }
  button:disabled > typography-button {
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
  :host([type="contained"]) > button > typography-button {
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
<button>
  <typography-button>
    <slot>Submit</slot>
  </typography-button>
  <span class="overlay"></span>
</button>

`
class AppButton extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'disabled']
  }

  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(appButtonTemplate.content.cloneNode(true))
    this._button = this.shadowRoot.querySelector('button')
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'button')

    if (!this.hasAttribute('type')) this.setAttribute('type', 'text')
    if (this.hasAttribute('disabled')) this._button.setAttribute('disabled', '')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'disabled') {
      this._button.setAttribute('disabled', '')
    }
  }

  // Getters and setters
  get type() {
    console.log(this.attributes.type.value)
    return this.attributes.type.value
  }
  set type(val) {
    const hasType = Boolean(val)
    if (hasType) {
      this.setAttribute('type', val)
    } else {
      this.removeAttribute('type')
    }
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }
  set disabled(val) {}
}

customElements.define('app-button', AppButton)
