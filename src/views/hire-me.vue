<template>
  <div class="hire-me-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <h1 class="hire-me-text">
      Sorry this page is being redesigned with a new blazing fast system.
    </h1>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'

export default {
  name: 'HireMe',
  components: {
    AppNavbar,
  },
  metaInfo: {
    title: 'Hire-me - Ivan Ryan | Software Engineer',
    meta: [
      {
        name: 'description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
      },
      {
        property: 'og:title',
        content: 'Hire-me - Ivan Ryan | Software Engineer',
      },
      {
        property: 'og:description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic Hosting.',
      },
      {
        property: 'og:image',
        content:
          'https://cdn.opengraphimage.com/3lzTVyGS9Y9tA10WvHH-NA/?s=1592593d175f10c352fa99c4548304fa',
      },
    ],
  },
}
</script>

<style scoped>
.hire-me-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.hire-me-text {
  color: #ffffff;
  margin-top: var(--dl-space-space-sixunits);
}
@media(max-width: 1600px) {
  .hire-me-text {
    width: 50%;
    height: 103px;
    margin-top: var(--dl-space-space-fourunits);
    text-align: center;
  }
}
@media(max-width: 479px) {
  .hire-me-text {
    width: 289px;
    height: 241px;
  }
}
</style>
