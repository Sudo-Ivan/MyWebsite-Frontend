<template>
  <div class="about-me-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <div class="about-me-container1">
      <h1>Want to know more about me?</h1>
      <span class="about-me-text01">
        <span>
          Alright here goes...
          <span v-html="rawvnui"></span>
        </span>
        <br />
        <br />
        <span>
          So I am a very private person. I highly value my security and privacy. I
          rarely use social media, except for my official accounts.
        </span>
        <br />
        <br />
        <br />
        <span>
          I grew up in Gauteng, South Africa. When I turned 12 my parents decided
          to look for a better life in the United States. Ten years later, here I
          am trying to start a company out of Texas.
        </span>
        <span><span v-html="rawnz9s"></span></span>
        <br />
        <br />
        <span>
          During my free time I work as a freelance software engineer, mostly
          designing server admin panels and server software for small hosting
          companies.
          <span v-html="raw7hs2"></span>
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
        <span><span v-html="rawsseu"></span></span>
        <span>
          I have experiance using many hosting companies and I can say that they
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
        <br />
        <span>
          Thank you for coming to my TED talk
          <span v-html="rawuubc"></span>
        </span>
        <br />
        <br />
        <span>Join my Revolt or Discord or both!</span>
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
      rawvnui: ' ',
      rawnz9s: ' ',
      raw7hs2: ' ',
      rawsseu: ' ',
      rawuubc: ' ',
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
          'https://cdn.opengraphimage.com/3lzTVyGS9Y9tA10WvHH-NA/?s=1592593d175f10c352fa99c4548304fa',
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
.about-me-text01 {
  width: 50%;
  margin-top: var(--dl-space-space-threeunits);
  text-align: center;
  margin-bottom: var(--dl-space-space-fiveunits);
}
</style>
