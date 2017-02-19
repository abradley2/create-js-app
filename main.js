const html = require('yo-yo')
const css = require('sheetify')

css('tachyons')

const state = {
  message: 'Start building!',
  editMessage: function (msg) {
    state.message = msg
    update()
  }
}

const styles = css`
  :host > h3 {
    color: blue;
  }
`

function app () {
  return html`<div class=${styles + ' pt3 center measure'}>
    <input
      type='text'
      value=${state.message}
      oninput=${function (e) {
        state.editMessage(e.target.value)
      }}
    />
    <h3>${state.message}</h3>
  </div>`
}

const appNode = document.createElement('div')

function update () {
  html.update(appNode, html`${app()}`)
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(appNode)
  update()
})
