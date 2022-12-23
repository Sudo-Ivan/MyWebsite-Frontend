<template>
  <div class="p-d-fmerger-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <div class="p-d-fmerger-container1"></div>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'

export default {
  name: 'PDFmerger',
  components: {
    AppNavbar,
  },
  metaInfo: {
    title: 'PDFmerger - Ivan Ryan | Software Engineer',
    meta: [
      {
        name: 'description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
      },
      {
        property: 'og:title',
        content: 'PDFmerger - Ivan Ryan | Software Engineer',
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
.p-d-fmerger-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #D9D9D9;
}
.p-d-fmerger-container1 {
  width: 100%;
  height: 602px;
  display: flex;
  align-items: flex-start;
}
</style>
