import { createApp } from "vue";
import App from "./App.vue";
import VueMarkdownIt from "vue3-markdown-it";

// const app = createApp(App).mount("#app");
const app = createApp();
app.use(VueMarkdownIt);
app.config.productionTip = false;
