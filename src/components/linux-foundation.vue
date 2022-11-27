<template>
  <section class="linux-foundation-card">
    <img :alt="image_alt" :src="image_src" class="linux-foundation-image" />
    <main class="linux-foundation-content">
      <h1 class="linux-foundation-header">{{ Header }}</h1>
      <p class="linux-foundation-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'LinuxFoundation',
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
.linux-foundation-card {
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
.linux-foundation-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.linux-foundation-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.linux-foundation-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.linux-foundation-description {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
@media(max-width: 479px) {
  .linux-foundation-card {
    width: 80%;
  }
  .linux-foundation-image {
    width: 80px;
    height: 80px;
  }
}
</style>
