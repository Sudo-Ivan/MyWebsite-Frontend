<template>
  <section class="redhat-card">
    <img :alt="image_alt" :src="image_src" class="redhat-image" />
    <main class="redhat-content">
      <h1 class="redhat-header">{{ Header }}</h1>
      <p class="redhat-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Redhat',
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
.redhat-card {
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
.redhat-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.redhat-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.redhat-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.redhat-description {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
@media(max-width: 479px) {
  .redhat-card {
    width: 80%;
  }
}
</style>
