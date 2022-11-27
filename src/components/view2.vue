<template>
  <div class="view2-container">
    <a
      :href="link_Text"
      target="_blank"
      rel="noreferrer noopener"
      class="view2-link"
    >
      <p class="view2-text">{{ Text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'View2',
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
.view2-container {
  display: flex;
  position: relative;
}
.view2-link {
  display: contents;
}
.view2-text {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .view2-text {
    color: rgb(128, 255, 68);
  }
}
</style>
