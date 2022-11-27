<template>
  <div class="text-container">
    <a
      :href="link_Text"
      target="_blank"
      rel="noreferrer noopener"
      class="text-link"
    >
      <p class="text-text">{{ Text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Text',
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
.text-container {
  display: flex;
  position: relative;
}
.text-link {
  display: contents;
}
.text-text {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .text-text {
    color: rgb(128, 255, 68);
  }
}
</style>
