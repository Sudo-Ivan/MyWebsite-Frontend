<template>
  <div class="feature-card1-feature-card" v-bind:class="rootClassName">
    <h2 class="feature-card1-text">{{ title }}</h2>
    <img :alt="image_alt" :src="image_src" class="feature-card1-image" />
  </div>
</template>

<script>
export default {
  name: 'FeatureCard1',
  props: {
    image_src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
    },
    title: {
      type: String,
      default: 'Lorem ipsum',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.feature-card1-feature-card {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  max-width: var(--dl-size-size-maxwidth);
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.feature-card1-feature-card:hover {
  transform: scale(1.02);
}
.feature-card1-text {
  margin-bottom: var(--dl-space-space-twounits);
}
.feature-card1-image {
  width: var(--dl-size-size-medium);
  height: var(--dl-size-size-medium);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-radius4);
}








</style>
