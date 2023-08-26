import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
// import mdui
import "mdui/dist/css/mdui.css";
import "mdui/dist/js/mdui";

const app = createApp(App);
app.use(router).mount("#app");
