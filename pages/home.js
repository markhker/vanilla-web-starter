import { html, render } from '../helpers/html'

const name = 'Mark Hkr'
const pageTemplate = name => html`
  <h1>${name} Home content</h1>
  <a href="#/about" data-navigo>About</a>
`

export const renderPage = node => render(name, pageTemplate, node)
