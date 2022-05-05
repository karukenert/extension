import { createApp } from "vue";
import App from "./App.vue";

//window.addEventListener('DOMContentLoaded', async () => {
//  console.log("DOMContentLoaded");
//});

window.onload = async () => {
	const el = document.querySelector(".js-header-wrapper ");
	if (el) {
		console.log(el);
		el.insertAdjacentHTML("afterend", '<div id="app">hello</div>');
		const app = createApp(App);
		app.mount("#app");
	}
};