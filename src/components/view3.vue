<template>
  <div class="view3-container">
    <a
      :href="link_Text"
      target="_blank"
      rel="noreferrer noopener"
      class="view3-link"
    >
      <p class="view3-text">{{ Text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'View3',
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
.view3-container {
  display: flex;
  position: relative;
}
.view3-link {
  display: contents;
}
.view3-text {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .view3-text {
    color: rgb(128, 255, 68);
  }
}
</style>
