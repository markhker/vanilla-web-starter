import { html, render } from '../helpers/html'

const name = 'Mark Hkr'
const pageTemplate = name => html`<h1>${name} you clicked a button</h1>`

export const renderPage = node => render(name, pageTemplate, node)
