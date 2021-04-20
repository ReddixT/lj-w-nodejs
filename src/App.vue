<template>
  <div id="app">
    <Editor />
  </div>
</template>

<script>
import Editor from "./components/Editor.vue";

export default {
  name: "App",
  components: {
    Editor,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table,
tr,
td,
th {
  border: 1px solid black;
  border-collapse: collapse;
}
tr,
th,
td {
  text-align: left;
}
td p {
  margin-top: 10px;
  margin-bottom: 10px;
}
table {
  width: 90%;
  margin: auto;
}
</style>
