<template>
  <div class="portfolio-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <h1 class="portfolio-text">
      Sorry this page is being redesigned with a new blazing fast system.
    </h1>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'

export default {
  name: 'Portfolio',
  components: {
    AppNavbar,
  },
  metaInfo: {
    title: 'Portfolio - Ivan Ryan | Software Engineer',
    meta: [
      {
        name: 'description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
      },
      {
        property: 'og:title',
        content: 'Portfolio - Ivan Ryan | Software Engineer',
      },
      {
        property: 'og:description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic Hosting.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5db3d8d-896c-4432-adf9-a9c05a2ff362/52d8462e-a143-486c-8202-7b857426b144?org_if_sml=1',
      },
    ],
  },
}
</script>

<style scoped>
.portfolio-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.portfolio-text {
  margin-top: var(--dl-space-space-sixunits);
}
@media(max-width: 1600px) {
  .portfolio-text {
    width: 50%;
    height: 103px;
    margin-top: var(--dl-space-space-fourunits);
    text-align: center;
  }
}
@media(max-width: 479px) {
  .portfolio-text {
    width: 289px;
    height: 241px;
  }
}
</style>
