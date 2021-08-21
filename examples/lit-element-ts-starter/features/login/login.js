import {LitElement, html, css} from 'lit';
import {FieldType, DataField} from '@holdequity/hardin';

export class HardinLoginForm extends LitElement {
  static get properties() {
    return {
      name: String,
      count: Number,
    };
  }

  constructor() {
    super();
    this.name = 'Testing';
    this.count = 0;
  }

  connectedCallback() {
    console.log({FieldType});
    console.log('DataField', DataField);
  }

  _onClick() {
    this.count++;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }
}

window.customElements.define('hardin-login-form', HardinLoginForm);
