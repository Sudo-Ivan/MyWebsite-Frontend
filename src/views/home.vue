<template>
  <div class="home-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <span class="home-w-i-p">
      <span>
        Hello! my website is currently being re-designed from the ground up.
        <span v-html="rawyjwo"></span>
      </span>
      <br />
      <span>You can still reach me at ivan@ivanryan.dev</span>
      <br />
    </span>
    <app-firstsection2
      rootClassName="firstsection2-root-class-name"
    ></app-firstsection2>
    <app-codesecureprotect></app-codesecureprotect>
    <app-aboutme></app-aboutme>
    <app-certs></app-certs>
    <app-blog></app-blog>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppFirstsection2 from '../components/firstsection2'
import AppCodesecureprotect from '../components/codesecureprotect'
import AppAboutme from '../components/aboutme'
import AppCerts from '../components/certs'
import AppBlog from '../components/blog'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  components: {
    AppNavbar,
    AppFirstsection2,
    AppCodesecureprotect,
    AppAboutme,
    AppCerts,
    AppBlog,
    AppFooter,
  },

  data() {
    return {
      rawyjwo: ' ',
    }
  },

  metaInfo: {
    title: 'Ivan Ryan | Software Engineer',
    meta: [
      {
        name: 'description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
      },
      {
        property: 'og:title',
        content: 'Ivan Ryan | Software Engineer',
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
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.home-w-i-p {
  font-size: 18px;
  text-align: center;
  line-height: 1.4;
  color: #fff;
}
</style>
