<template>
  <div class="text1-container">
    <a
      :href="link_Text"
      target="_blank"
      rel="noreferrer noopener"
      class="text1-link"
    >
      <p class="text1-text">{{ Text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Text1',
  props: {
    link_Text: String,
    Text: {
      type: String,
      default: 'View',
    },
  },
}
</script>

<style scoped>
.text1-container {
  display: flex;
  position: relative;
}
.text1-link {
  display: contents;
}
.text1-text {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .text1-text {
    color: rgb(128, 255, 68);
  }
}
</style>
