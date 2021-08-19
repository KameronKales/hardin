import { html } from 'lit';
import '../src/lit-element.js';

export default {
  title: 'LitElement',
  component: 'lit-element',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <lit-element
      style="--lit-element-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </lit-element>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
