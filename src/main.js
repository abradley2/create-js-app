const m = require("mithril")
const css = require("sheetify")
css("./main.css")

const state = {
	message: "Start building!"
}

const app = {
	view() {
		return m("div", [state.message])
	}
}

const appNode = document.body.appendChild(document.createElement("div"))

m.route(appNode, "/", {
	"/": app
})
