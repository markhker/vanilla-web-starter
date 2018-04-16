import './styles/main.scss'

document.getElementById('message').innerText = 'Hello World HMR!'

document.querySelector('#bt').addEventListener('click', async() => {
  console.log('Button Clicked')
  const aboutPage = await import('./pages/about')
  aboutPage.renderPage('.holder')
})