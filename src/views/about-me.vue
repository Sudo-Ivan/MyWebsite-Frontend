<template>
  <div class="about-me-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <div class="about-me-container1">
      <h1>Want to know more about me?</h1>
      <span class="about-me-text01">
        <span>
          Alright here goes...
          <span v-html="raw6j5n"></span>
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
        <br />
        <br />
        <span>
          I currently serve in the US Army. I was a former infantryman (says with
          a prideful voice lol) and now work as an MQ-1 Operator stationed out of
          Fort Hood, Texas.
          <span v-html="rawmqtd"></span>
        </span>
        <br />
        <br />
        <span>
          During my free time I work as a freelance software engineer, mostly
          designing server admin panels and server software for small hosting
          companies.
          <span v-html="rawufbj"></span>
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
        <span><span v-html="rawr9zd"></span></span>
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
          <span v-html="rawj2pa"></span>
        </span>
        <br />
        <br />
        <span>Join my Revolt or Discord or both!</span>
      </span>
    </div>
    <div class="about-me-container2">
      <a
        href="https://rvlt.gg/HH22HNCw"
        target="_blank"
        rel="noreferrer noopener"
        class="about-me-link"
      >
        <img
          alt="image"
          src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/logo/revolt-logo.svg"
          class="about-me-image"
        />
      </a>
      <span>OR</span>
      <img
        alt="image"
        src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/logo/discordlogo.png"
        loading="lazy"
        class="about-me-image1"
      />
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
      raw6j5n: ' ',
      rawmqtd: ' ',
      rawufbj: ' ',
      rawr9zd: ' ',
      rawj2pa: ' ',
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
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
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
.about-me-text01 {
  width: 50%;
  margin-top: var(--dl-space-space-threeunits);
  text-align: center;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.about-me-container2 {
  flex: 0 0 auto;
  width: 220px;
  height: auto;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  margin-bottom: var(--dl-space-space-fiveunits);
  justify-content: space-between;
}
.about-me-link {
  display: contents;
}
.about-me-image {
  width: 80px;
  align-self: center;
  object-fit: cover;
  text-decoration: none;
}
.about-me-image1 {
  width: 80px;
  object-fit: cover;
}
</style>
