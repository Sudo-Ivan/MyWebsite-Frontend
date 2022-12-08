<template>
  <section id="first" class="firstsection-firstsection">
    <div class="firstsection-hero">
      <div class="firstsection-content">
        <main class="firstsection-main">
          <header class="firstsection-header">
            <h1 class="firstsection-heading">
              <span class="firstsection-text">I am a</span>
              <span class="firstsection-text1">Software Engineer</span>
              <br />
            </h1>
            <span class="firstsection-caption">{{ Caption }}</span>
          </header>
          <div class="firstsection-buttons">
            <div class="firstsection-myprojects button">
              <span class="firstsection-text3">{{ Text }}</span>
            </div>
            <div class="firstsection-portfolio button">
              <span class="firstsection-text4">{{ Text1 }}</span>
            </div>
            <a
              href="https://github.com/Sudo-Ivan"
              target="_blank"
              rel="noreferrer noopener"
              class="firstsection-link"
            >
              <div class="firstsection-github button">
                <span class="firstsection-text5">
                  <span>GitHub</span>
                  <br />
                </span>
              </div>
            </a>
          </div>
        </main>
      </div>
      <div class="firstsection-image">
        <img
          id="terminal"
          :alt="image_alt"
          :src="image_src"
          loading="eager"
          class="firstsection-image1"
        />
      </div>
      <div class="firstsection-image2">
        <img :alt="image_alt1" :src="image_src1" class="firstsection-image3" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Firstsection',
  props: {
    Caption: {
      type: String,
      default: 'Building Secure, Private, and Efficient applications. ',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    Text1: {
      type: String,
      default: 'Portfolio',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/svg/terminal-overlay01.svg',
    },
    Text: {
      type: String,
      default: 'My Projects',
    },
    image_src1: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/svg/terminal-overlay.svg',
    },
  },
}
</script>

<style scoped>
.firstsection-firstsection {
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
.firstsection-hero {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.firstsection-content {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
}
.firstsection-main {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.firstsection-header {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.firstsection-heading {
  color: rgb(255, 255, 255);
  font-size: 64px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.firstsection-text {
  color: #80ff44;
}
.firstsection-caption {
  color: rgb(255, 255, 255);
  font-size: 20px;
  align-self: flex-start;
  font-family: Poppins;
  line-height: 30px;
}
.firstsection-buttons {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.firstsection-myprojects {
  background-color: #2A2A2A;
}
.firstsection-text3 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.firstsection-portfolio {
  background-color: #2A2A2A;
}
.firstsection-text4 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.firstsection-link {
  display: contents;
}
.firstsection-github {
  text-decoration: none;
  background-color: #2A2A2A;
}
.firstsection-text5 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.firstsection-image {
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
.firstsection-image1 {
  width: 900px;
  height: 670px;
  object-fit: cover;
}
.firstsection-image2 {
  display: none;
}
@media(max-width: 1600px) {
  .firstsection-firstsection {
    border-color: rgba(81, 81, 90, 0);
  }
  .firstsection-image {
    width: 50%;
    height: 10%;
    flex-direction: column;
    justify-content: center;
  }
  .firstsection-image1 {
    top: var(--dl-space-space-unit);
    left: -40px;
    width: 821px;
    height: auto;
    position: absolute;
    align-self: center;
  }
}
@media(max-width: 1200px) {
  .firstsection-firstsection {
    justify-content: flex-start;
  }
  .firstsection-hero {
    justify-content: center;
  }
  .firstsection-heading {
    align-self: center;
    text-align: center;
  }
  .firstsection-caption {
    align-self: center;
    text-align: center;
  }
  .firstsection-buttons {
    align-self: center;
    justify-content: center;
  }
  .firstsection-image {
    width: 50%;
  }
  .firstsection-image1 {
    top: 285px;
    left: -419px;
    width: 815px;
    height: 617px;
    position: absolute;
    align-self: center;
  }
}
@media(max-width: 991px) {
  .firstsection-firstsection {
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
  }
  .firstsection-hero {
    gap: var(--dl-space-space-fourunits);
    flex: 1;
    position: relative;
    max-width: auto;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .firstsection-content {
    position: relative;
    align-items: center;
  }
  .firstsection-main {
    align-items: center;
  }
  .firstsection-heading {
    text-align: left;
  }
  .firstsection-text {
    text-align: left;
  }
  .firstsection-text1 {
    text-align: left;
  }
  .firstsection-caption {
    text-align: left;
  }
  .firstsection-buttons {
    width: 100%;
  }
  .firstsection-myprojects {
    flex: 1;
  }
  .firstsection-portfolio {
    flex: 1;
  }
  .firstsection-github {
    flex: 1;
  }
  .firstsection-image {
    right: 0px;
    display: none;
    position: absolute;
    flex-direction: column;
  }
  .firstsection-image2 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .firstsection-image3 {
    width: 600px;
    align-self: center;
  }
}
@media(max-width: 767px) {
  .firstsection-content {
    gap: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .firstsection-heading {
    font-size: 40px;
  }
  .firstsection-text {
    font-size: 40px;
  }
  .firstsection-text1 {
    font-size: 40px;
  }
  .firstsection-caption {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-family: Poppins;
    line-height: 24px;
  }
  .firstsection-myprojects {
    display: none;
  }
  .firstsection-portfolio {
    display: none;
  }
  .firstsection-github {
    display: none;
  }
  .firstsection-image3 {
    width: 500px;
  }
}
@media(max-width: 479px) {
  .firstsection-header {
    align-items: flex-start;
  }
  .firstsection-heading {
    max-width: 280px;
    text-align: center;
  }
  .firstsection-text {
    max-width: 280px;
  }
  .firstsection-text1 {
    max-width: 280px;
  }
  .firstsection-image3 {
    width: 400px;
    align-self: center;
  }
}
</style>
