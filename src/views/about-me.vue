<template>
  <div class="about-me-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <div class="about-me-container1">
      <h1 class="about-me-text">Want to know more about me?</h1>
      <span class="about-me-text01">
        <span>
          Alright here goes...
          <span v-html="raw56ld"></span>
        </span>
        <br />
        <br />
        <span>
          So I am a very private person. I highly value my security and privacy. I
          rarely use social media, except for my official accounts.
        </span>
        <br />
        <br />
        <span>
          During my free time I work as a freelance software engineer, mostly
          designing server admin panels and server software for small hosting
          companies.
          <span v-html="raw7oav"></span>
        </span>
        <br />
        <br />
        <span>
          I maintain my own set of open-source projects and contribute to many
          others during my free time. My favorite programming languages are Rust,
          Go and Python.
        </span>
        <br />
        <br />
        <span>
          I have been hosting servers since I was 14 (8 years ago), I started out
          doing it for friends and over the years I have been getting more
          experienced with repetition, practice and applying in real life by
          hosting for gaming communities.
        </span>
        <br />
        <br />
        <span><span v-html="rawsf4h"></span></span>
        <span>
          I have experience using many hosting companies and I can say that they
          all lack either security, privacy and a good fucking panel with a UI
          meant for the user not just a developer.
        </span>
        <br />
        <br />
        <span>
          Now my goal is to create a hosting company that actually cares about
          your privacy, your security, the environment and to make a panel that is
          actually good.
        </span>
        <br />
      </span>
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'

export default {
  name: 'AboutMe',
  components: {
    AppNavbar,
  },

  data() {
    return {
      raw56ld: ' ',
      raw7oav: ' ',
      rawsf4h: ' ',
    }
  },

  metaInfo: {
    title: 'About-Me - Ivan Ryan | Software Engineer',
    meta: [
      {
        name: 'description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
      },
      {
        property: 'og:title',
        content: 'About-Me - Ivan Ryan | Software Engineer',
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
.about-me-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.about-me-container1 {
  width: 1103px;
  height: 735px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.about-me-text {
  color: #ffffff;
}
.about-me-text01 {
  color: rgb(255, 255, 255);
  width: 50%;
  margin-top: var(--dl-space-space-threeunits);
  text-align: center;
  margin-bottom: var(--dl-space-space-fiveunits);
}
@media(max-width: 1600px) {
  .about-me-text {
    color: #ffffff;
  }
  .about-me-text01 {
    color: #ffffff;
  }
}
</style>
