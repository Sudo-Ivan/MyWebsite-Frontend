<template>
  <section class="card2-card">
    <img :alt="image_alt" :src="image_src" class="card2-image" />
    <main class="card2-content">
      <h1 class="card2-header">{{ Header }}</h1>
      <p class="card2-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Card2',
  props: {
    Header: {
      type: String,
      default: 'Linux Foundation',
    },
    Description: {
      type: String,
      default: 'Certifications',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/linux-foundation-logo.png',
    },
  },
}
</script>

<style scoped>
.card2-card {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.card2-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.card2-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.card2-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.card2-description {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
@media(max-width: 479px) {
  .card2-card {
    width: 80%;
  }
  .card2-image {
    width: 80px;
    height: 80px;
  }
}
</style>
