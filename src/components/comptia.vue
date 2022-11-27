<template>
  <section class="comptia-card">
    <img :alt="image_alt" :src="image_src" class="comptia-image" />
    <main class="comptia-content">
      <h1 class="comptia-header">{{ Header }}</h1>
      <p class="comptia-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Comptia',
  props: {
    image_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/comptia-logo.png',
    },
    Header: {
      type: String,
      default: 'CompTIA',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    Description: {
      type: String,
      default: 'Certifications',
    },
  },
}
</script>

<style scoped>
.comptia-card {
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
.comptia-image {
  width: 100px;
  object-fit: cover;
}
.comptia-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.comptia-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.comptia-description {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
@media(max-width: 479px) {
  .comptia-card {
    width: 80%;
  }
}
</style>
