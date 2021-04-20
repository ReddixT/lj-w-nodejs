import { createApp } from "vue";
import App from "./App";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

createApp({
  el: "#main",
  components: { App, mavonEditor },
  template: "<App/>",
  data() {
    return { value: "" };
  },
});
