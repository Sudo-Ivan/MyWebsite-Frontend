<template>
  <section id="first" class="firstsection1-firstsection">
    <div class="firstsection1-hero">
      <div class="firstsection1-content">
        <main class="firstsection1-main">
          <header class="firstsection1-header">
            <h1 class="firstsection1-heading">
              <span class="firstsection1-text">I am a</span>
              <span class="firstsection1-text1">Software Engineer</span>
              <br />
            </h1>
            <span class="firstsection1-caption">{{ Caption }}</span>
          </header>
          <div class="firstsection1-buttons">
            <div class="firstsection1-myprojects button">
              <span class="firstsection1-text3">{{ Text }}</span>
            </div>
            <div class="firstsection1-portfolio button">
              <span class="firstsection1-text4">{{ Text1 }}</span>
            </div>
            <a
              href="https://github.com/Sudo-Ivan"
              target="_blank"
              rel="noreferrer noopener"
              class="firstsection1-link"
            >
              <div class="firstsection1-github button">
                <span class="firstsection1-text5">
                  <span>GitHub</span>
                  <br />
                </span>
              </div>
            </a>
          </div>
        </main>
      </div>
      <div class="firstsection1-image">
        <img
          id="terminal"
          :alt="image_alt"
          :src="image_src"
          loading="eager"
          class="firstsection1-image1"
        />
      </div>
      <div class="firstsection1-image2">
        <img :alt="image_alt1" :src="image_src1" class="firstsection1-image3" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Firstsection1',
  props: {
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/svg/terminal-overlay.svg',
    },
    image_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/svg/terminal-overlay01.svg',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    Text: {
      type: String,
      default: 'My Projects',
    },
    Text1: {
      type: String,
      default: 'Portfolio',
    },
    Caption: {
      type: String,
      default: 'Building Secure, Private, and Efficient applications. ',
    },
  },
}
</script>

<style scoped>
.firstsection1-firstsection {
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
.firstsection1-hero {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.firstsection1-content {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
}
.firstsection1-main {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.firstsection1-header {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.firstsection1-heading {
  color: rgb(255, 255, 255);
  font-size: 64px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.firstsection1-text {
  color: #80ff44;
}
.firstsection1-caption {
  color: rgb(255, 255, 255);
  font-size: 20px;
  align-self: flex-start;
  font-family: Poppins;
  line-height: 30px;
}
.firstsection1-buttons {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.firstsection1-myprojects {
  background-color: #2A2A2A;
}
.firstsection1-text3 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.firstsection1-portfolio {
  background-color: #2A2A2A;
}
.firstsection1-text4 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.firstsection1-link {
  display: contents;
}
.firstsection1-github {
  text-decoration: none;
  background-color: #2A2A2A;
}
.firstsection1-text5 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.firstsection1-image {
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
.firstsection1-image1 {
  width: 900px;
  height: 670px;
  align-self: flex-start;
  object-fit: cover;
}
.firstsection1-image2 {
  display: none;
}
@media(max-width: 1600px) {
  .firstsection1-firstsection {
    border-color: rgba(81, 81, 90, 0);
  }
  .firstsection1-image {
    width: 50%;
    height: 10%;
    flex-direction: column;
    justify-content: center;
  }
  .firstsection1-image1 {
    top: var(--dl-space-space-unit);
    left: -40px;
    width: 821px;
    height: auto;
    position: absolute;
    align-self: center;
  }
}
@media(max-width: 1200px) {
  .firstsection1-firstsection {
    justify-content: flex-start;
  }
  .firstsection1-hero {
    justify-content: center;
  }
  .firstsection1-heading {
    align-self: center;
    text-align: center;
  }
  .firstsection1-caption {
    align-self: center;
    text-align: center;
  }
  .firstsection1-buttons {
    align-self: center;
    justify-content: center;
  }
  .firstsection1-image {
    width: 50%;
  }
  .firstsection1-image1 {
    top: 285px;
    left: -419px;
    width: 815px;
    height: 617px;
    position: absolute;
    align-self: center;
  }
}
@media(max-width: 991px) {
  .firstsection1-firstsection {
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
  }
  .firstsection1-hero {
    gap: var(--dl-space-space-fourunits);
    flex: 1;
    position: relative;
    max-width: auto;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .firstsection1-content {
    position: relative;
    align-items: center;
  }
  .firstsection1-main {
    align-items: center;
  }
  .firstsection1-heading {
    text-align: left;
  }
  .firstsection1-text {
    text-align: left;
  }
  .firstsection1-text1 {
    text-align: left;
  }
  .firstsection1-caption {
    text-align: left;
  }
  .firstsection1-buttons {
    width: 100%;
  }
  .firstsection1-myprojects {
    flex: 1;
  }
  .firstsection1-portfolio {
    flex: 1;
  }
  .firstsection1-github {
    flex: 1;
  }
  .firstsection1-image {
    right: 0px;
    display: none;
    position: absolute;
    flex-direction: column;
  }
  .firstsection1-image2 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .firstsection1-image3 {
    width: 600px;
    align-self: center;
  }
}
@media(max-width: 767px) {
  .firstsection1-content {
    gap: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .firstsection1-heading {
    font-size: 40px;
  }
  .firstsection1-text {
    font-size: 40px;
  }
  .firstsection1-text1 {
    font-size: 40px;
  }
  .firstsection1-caption {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-family: Poppins;
    line-height: 24px;
  }
  .firstsection1-myprojects {
    display: none;
  }
  .firstsection1-portfolio {
    display: none;
  }
  .firstsection1-github {
    display: none;
  }
  .firstsection1-image3 {
    width: 500px;
  }
}
@media(max-width: 479px) {
  .firstsection1-header {
    align-items: flex-start;
  }
  .firstsection1-heading {
    max-width: 280px;
    text-align: center;
  }
  .firstsection1-text {
    max-width: 280px;
  }
  .firstsection1-text1 {
    max-width: 280px;
  }
  .firstsection1-image3 {
    width: 400px;
    align-self: center;
  }
}
</style>
