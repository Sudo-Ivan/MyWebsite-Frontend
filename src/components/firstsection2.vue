<template>
  <section
    id="first"
    class="firstsection2-firstsection"
    v-bind:class="rootClassName"
  >
    <div class="firstsection2-hero">
      <div class="firstsection2-content">
        <main class="firstsection2-main">
          <header class="firstsection2-header">
            <h1 class="firstsection2-heading">
              <span class="firstsection2-text">I am a </span>
              <span class="firstsection2-text1">Software Engineer</span>
              <br />
            </h1>
            <span class="firstsection2-caption">{{ Caption }}</span>
          </header>
          <div class="firstsection2-buttons">
            <div class="firstsection2-myprojects button">
              <span class="firstsection2-text3">{{ Text }}</span>
            </div>
            <div class="firstsection2-portfolio button">
              <span class="firstsection2-text4">{{ Text1 }}</span>
            </div>
            <a
              href="https://github.com/Sudo-Ivan"
              target="_blank"
              rel="noreferrer noopener"
              class="firstsection2-link"
            >
              <div class="firstsection2-github button">
                <span class="firstsection2-text5">
                  <span>GitHub</span>
                  <br />
                </span>
              </div>
            </a>
          </div>
        </main>
      </div>
      <div class="firstsection2-image">
        <img
          id="terminal"
          :alt="image_alt"
          :src="image_src"
          loading="eager"
          class="firstsection2-image1"
        />
      </div>
      <div class="firstsection2-image2">
        <img :alt="image_alt1" :src="image_src1" class="firstsection2-image3" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Firstsection2',
  props: {
    image_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/terminal-overlay.png',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/terminal-overlay.png',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    Caption: {
      type: String,
      default: 'Building Secure, Private, and Efficient applications. ',
    },
    Text: {
      type: String,
      default: 'My Projects',
    },
    Text1: {
      type: String,
      default: 'Portfolio',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.firstsection2-firstsection {
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  justify-content: center;
}
.firstsection2-hero {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.firstsection2-content {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
}
.firstsection2-main {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.firstsection2-header {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.firstsection2-heading {
  color: rgb(255, 255, 255);
  font-size: 64px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.firstsection2-text {
  color: #80ff44;
}
.firstsection2-caption {
  color: rgb(255, 255, 255);
  font-size: 20px;
  align-self: flex-start;
  font-family: Poppins;
  line-height: 30px;
}
.firstsection2-buttons {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.firstsection2-myprojects {
  background-color: #2A2A2A;
}
.firstsection2-text3 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.firstsection2-portfolio {
  background-color: #2A2A2A;
}
.firstsection2-text4 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.firstsection2-link {
  display: contents;
}
.firstsection2-github {
  text-decoration: none;
  background-color: #2A2A2A;
}
.firstsection2-text5 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.firstsection2-image {
  top: var(--dl-space-space-fourunits);
  right: 0px;
  width: 50%;
  height: 900px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: center;
  border-color: rgba(120, 120, 120, 0);
  border-style: dashed;
  border-width: 2px;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(47, 47, 47, 0);
}
.firstsection2-image1 {
  width: 900px;
  height: 670px;
  align-self: flex-start;
  object-fit: cover;
}
.firstsection2-image2 {
  display: none;
}

@media(max-width: 1600px) {
  .firstsection2-firstsection {
    border-color: rgba(81, 81, 90, 0);
  }
  .firstsection2-image {
    width: 50%;
    height: 10%;
    flex-direction: column;
    justify-content: center;
  }
  .firstsection2-image1 {
    top: var(--dl-space-space-unit);
    left: -40px;
    width: 821px;
    height: auto;
    position: absolute;
    align-self: center;
  }
}
@media(max-width: 1200px) {
  .firstsection2-firstsection {
    justify-content: flex-start;
  }
  .firstsection2-hero {
    justify-content: center;
  }
  .firstsection2-heading {
    align-self: center;
    text-align: center;
  }
  .firstsection2-caption {
    align-self: center;
    text-align: center;
  }
  .firstsection2-buttons {
    align-self: center;
    justify-content: center;
  }
  .firstsection2-image {
    width: 50%;
  }
  .firstsection2-image1 {
    top: 285px;
    left: -419px;
    width: 815px;
    height: 617px;
    position: absolute;
    align-self: center;
  }
}
@media(max-width: 991px) {
  .firstsection2-firstsection {
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
  }
  .firstsection2-hero {
    gap: var(--dl-space-space-fourunits);
    flex: 1;
    position: relative;
    max-width: auto;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .firstsection2-content {
    position: relative;
    align-items: center;
  }
  .firstsection2-main {
    align-items: center;
  }
  .firstsection2-heading {
    text-align: left;
  }
  .firstsection2-text {
    text-align: left;
  }
  .firstsection2-text1 {
    text-align: left;
  }
  .firstsection2-caption {
    text-align: left;
  }
  .firstsection2-buttons {
    width: 100%;
  }
  .firstsection2-myprojects {
    flex: 1;
  }
  .firstsection2-portfolio {
    flex: 1;
  }
  .firstsection2-github {
    flex: 1;
  }
  .firstsection2-image {
    right: 0px;
    display: none;
    position: absolute;
    flex-direction: column;
  }
  .firstsection2-image2 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .firstsection2-image3 {
    width: 600px;
    align-self: center;
  }
}
@media(max-width: 767px) {
  .firstsection2-content {
    gap: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .firstsection2-heading {
    font-size: 40px;
  }
  .firstsection2-text {
    font-size: 40px;
  }
  .firstsection2-text1 {
    font-size: 40px;
  }
  .firstsection2-caption {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-family: Poppins;
    line-height: 24px;
  }
  .firstsection2-myprojects {
    display: none;
  }
  .firstsection2-portfolio {
    display: none;
  }
  .firstsection2-github {
    display: none;
  }
  .firstsection2-image3 {
    width: 500px;
  }
}
@media(max-width: 479px) {
  .firstsection2-hero {
    height: 554px;
  }
  .firstsection2-header {
    align-items: flex-start;
  }
  .firstsection2-heading {
    max-width: 280px;
    text-align: center;
  }
  .firstsection2-text {
    max-width: 280px;
  }
  .firstsection2-text1 {
    max-width: 280px;
  }
  .firstsection2-image2 {
    height: 350px;
  }
  .firstsection2-image3 {
    width: 400px;
    align-self: center;
  }
  .firstsection2-root-class-name {
    margin-top: var(--dl-space-space-unit);
  }
}
</style>
