<template>
  <section class="card3-card">
    <img :alt="image_alt" :src="image_src" class="card3-image" />
    <main class="card3-content">
      <h1 class="card3-header">{{ Header }}</h1>
      <p class="card3-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Card3',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    Description: {
      type: String,
      default: 'Certifications',
    },
    Header: {
      type: String,
      default: 'Red Hat',
    },
    image_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/redhat-logo.png',
    },
  },
}
</script>

<style scoped>
.card3-card {
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
.card3-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.card3-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.card3-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.card3-description {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
@media(max-width: 479px) {
  .card3-card {
    width: 80%;
  }
}
</style>
