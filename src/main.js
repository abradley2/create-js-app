/** @flow */
/** @jsx m */
const m = require("mithril")
const css = require("sheetify")
css("./main.css")

const state = {
  message: "Start building!"
}

const app = {
  view(one: String) {
    var myobj = { one: "one" }
    return (
      <div>
        {state.message} {myobj}
      </div>
    )
  }
}

const appNode = document.body.appendChild(document.createElement("div"))

m.route(appNode, "/", {
  "/": app
})
