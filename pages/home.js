import { html, render } from '../helpers/html'
import '../styles/home.scss'

const name = 'Mark Hkr'
const pageTemplate = name => html`
  <section class="home">
    <h1 class="title1">Somos los mejores en el desarrollo de Aplicaciones Web y Móviles.</h1>
    <h1 class="title2">Todos los servicios para tus aplicaciones en un solo lugar.</h1>
    <h1 class="title3">Brindamos soluciones móviles de punta a punta para la mayoría de las industrias.</h1>
    <!--a href="#/about" data-navigo>About</a-->
  </section>
`

export const renderPage = node => render(name, pageTemplate, node)
