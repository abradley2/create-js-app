const m = require("mithril")
const css = require("sheetify")
css("./main.css")

const state = {
	message: "Start building something!"
}

const app = {
	view() {
		return m("div.blue", [state.message])
	}
}

const appNode = document.body.appendChild(document.createElement("div"))

m.route(appNode, "/", {
	"/": app
})
