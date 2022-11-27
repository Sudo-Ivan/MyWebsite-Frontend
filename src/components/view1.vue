<template>
  <div class="view1-container">
    <a
      :href="link_Text"
      target="_blank"
      rel="noreferrer noopener"
      class="view1-link"
    >
      <p class="view1-text">{{ Text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'View1',
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
.view1-container {
  display: flex;
  position: relative;
}
.view1-link {
  display: contents;
}
.view1-text {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .view1-text {
    color: rgb(128, 255, 68);
  }
}
</style>
