<template>
  <div>
    <vue3-markdown-it :source="source" />
  </div>
</template>

<script>
import VueMarkdownIt from "vue3-markdown-it";

export default {
  name: "MarkdownIt",
  components: {
    VueMarkdownIt,
  },
  data() {
    return {
      source: "# Hello World!",
    };
  },
};
</script>