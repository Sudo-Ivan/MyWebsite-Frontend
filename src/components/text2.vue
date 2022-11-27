<template>
  <div class="text2-container">
    <a
      :href="link_Text"
      target="_blank"
      rel="noreferrer noopener"
      class="text2-link"
    >
      <p class="text2-text">{{ Text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Text2',
  props: {
    Text: {
      type: String,
      default: 'View',
    },
    link_Text: String,
  },
}
</script>

<style scoped>
.text2-container {
  display: flex;
  position: relative;
}
.text2-link {
  display: contents;
}
.text2-text {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .text2-text {
    color: rgb(128, 255, 68);
  }
}
</style>
