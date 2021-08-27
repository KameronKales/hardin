import {LitElement, html, css} from 'lit';

import {loginForm} from '@holdequity/logic';

export class HardinLoginElement extends LitElement {
  static get properties() {
    return {
      name: String,
      count: Number,
    };
  }

  constructor() {
    super();
    console.log('onInit', loginForm);
    this.name = 'World';
    this.count = 0;
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

window.customElements.define('hardin-login-element', HardinLoginElement);
