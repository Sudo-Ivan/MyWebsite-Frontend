<template>
  <div class="breach-check-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <div class="breach-check-pasted-image">
      <h1 class="breach-check-text">FreeBreachChecker.exe</h1>
    </div>
    <div class="breach-check-container1">
      <textarea
        placeholder="email (one per line if multiple)"
        class="breach-check-textarea textarea"
      ></textarea>
      <div class="breach-check-pasted-image1">
        <h1 class="breach-check-text1">&gt; RUN</h1>
      </div>
    </div>
    <span class="breach-check-text2">
      <span>How it works:</span>
      <br />
      <br />
      <br />
    </span>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'

export default {
  name: 'BreachCheck',
  components: {
    AppNavbar,
  },
  metaInfo: {
    title: 'BreachCheck - Ivan Ryan | Software Engineer',
    meta: [
      {
        name: 'description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
      },
      {
        property: 'og:title',
        content: 'BreachCheck - Ivan Ryan | Software Engineer',
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
.breach-check-container {
  width: 100%;
  display: flex;
  z-index: 100;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.breach-check-pasted-image {
  width: 438px;
  height: 63px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
.breach-check-text {
  color: #ffffff;
  width: 379px;
  height: 38px;
  text-align: center;
}
.breach-check-container1 {
  width: 800px;
  height: 600px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: url('https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/BreachCheck800x600BG.png');
}
.breach-check-textarea {
  width: 612px;
  height: 395px;
  text-align: center;
}
.breach-check-pasted-image1 {
  left: 510px;
  width: 195px;
  bottom: 17px;
  height: 63px;
  display: flex;
  position: absolute;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-image: url('https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5db3d8d-896c-4432-adf9-a9c05a2ff362/4b2c1c4c-ebd9-4d0b-851d-758c634631d6?org_if_sml=11499');
  background-position: center;
}
.breach-check-text1 {
  color: #bfbdbd;
  font-size: 20px;
  font-family: Noto Sans;
}
.breach-check-text2 {
  font-size: 20px;
  margin-top: var(--dl-space-space-fourunits);
}
@media(max-width: 1600px) {
  .breach-check-text {
    width: 50%;
    height: 103px;
    margin-top: var(--dl-space-space-fourunits);
    text-align: center;
  }
}
@media(max-width: 479px) {
  .breach-check-pasted-image {
    width: 100%;
    height: 60px;
  }
  .breach-check-text {
    width: 100%;
    height: 100%;
  }
  .breach-check-container1 {
    width: 450px;
    height: 550px;
  }
}
</style>
