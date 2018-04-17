import Navigo from 'navigo'

const root = null
const useHash = true
const pageselector = '.pages'
export const router = new Navigo(root, useHash)

router
  .on({
    'about': async() => {
      const aboutPage = await import('../pages/about')
      aboutPage.renderPage(pageselector)
    },
    '*': async() => {
      const aboutPage = await import('../pages/home')
      aboutPage.renderPage(pageselector)
    }
  })
  .resolve()
