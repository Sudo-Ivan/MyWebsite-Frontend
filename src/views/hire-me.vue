<template>
  <div class="hire-me-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
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
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
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
  background-color: #000000;
}
</style>
