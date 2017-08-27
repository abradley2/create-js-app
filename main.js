const html = require('yo-yo')
const css = require('sheetify')
css('./main.css')

const state = {
  message: 'Start building!'
}

const appNode = document.body.appendChild(document.createElement('div'))

;(function update () {
  html.update(appNode, html`<div class='pt3 center measure'>
    <input
      type='text'
      value=${state.message}
      oninput=${editMessage}
    />
    <h3>${state.message}</h3>
  </div>`)

  function editMessage (e) {
    state.message = e.target.value
    update()
  }
})()
