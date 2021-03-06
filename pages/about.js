import { html, render } from '../helpers/html'

const name = 'Mark Hkr'
const pageTemplate = name => html`
  <h1>${name} you clicked a button</h1>
  <a href="/#" data-navigo>Home</a>
`

export const renderPage = node => render(name, pageTemplate, node)
