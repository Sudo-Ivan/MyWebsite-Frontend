<template>
  <section id="aboutme" class="aboutme-aboutme">
    <header class="aboutme-header">
      <span class="section-head">{{ Section }}</span>
      <h2 class="aboutme-whoami">{{ whoami }}</h2>
    </header>
    <section class="aboutme-note">
      <div class="aboutme-content">
        <div class="aboutme-main">
          <div class="aboutme-heading">
            <h2 class="aboutme-aboutme1 section-heading">{{ aboutme }}</h2>
            <img
              :alt="selfie_alt"
              :src="selfie_src"
              loading="lazy"
              class="aboutme-selfie"
            />
            <p class="aboutme-paragraph section-description">
              <span>
                I am Ivan Ryan, the founder and CEO of Voltaic Hosting, an
                international provider of sustainable, secure, and private hosting
                solutions. We are working on architecture that makes data centers
                more efficient and secure.
              </span>
              <br />
              <br />
              <span>
                I am also a for-hire developer specializing in creating a
                multitude of applications that offer exceptional scalability,
                performance, security, and privacy, while fully complying with
                standards and regulations in Europe and the United States.
                <span v-html="raw0jub"></span>
              </span>
              <br />
              <br />
              <span>
                I hold a number of professional certifications, including Red Hat
                Certified Systems Engineer and Linux Foundation Certified System
                Engineer, among others, which you can find here.
                <span v-html="rawky42"></span>
              </span>
              <br />
              <br />
              <span>
                My goal is to help organizations and individuals by developing
                secure, reliable, and compliant software. I am able to remotely
                code and work with the following IDEs and code editors: NeoVim,
                Helix, Visual Studio Code, IntelliJ IDEA, and Sublime Text.
                <span v-html="rawn7i8"></span>
              </span>
              <br />
              <br />
              <span>You can read more about me here.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="aboutme-note1">
      <div class="aboutme-content1">
        <main class="aboutme-main1">
          <span class="aboutme-section1 section-head">{{ Section1 }}</span>
          <main class="aboutme-heading1">
            <header class="aboutme-header1">
              <h2 class="section-heading">{{ Heading }}</h2>
              <p class="aboutme-paragraph1 section-description">
                <span>
                  Feel free to reach out to me to request a sample project of your
                  choice.
                </span>
                <br />
              </p>
            </header>
            <div class="aboutme-container">
              <div class="aboutme-checkmarks">
                <app-mark label="Remote Coding"></app-mark>
                <app-mark label="OWASP Secure Coding"></app-mark>
                <app-mark label="UI/UX Design"></app-mark>
              </div>
              <div class="aboutme-checkmarks1">
                <app-mark label="Pentesting"></app-mark>
                <app-mark label="SDP Deployment"></app-mark>
                <app-mark label="Nomad Orchestration"></app-mark>
              </div>
            </div>
          </main>
        </main>
        <div class="aboutme-hireme button">
          <span class="aboutme-text15">{{ Text }}</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import AppMark from './mark'

export default {
  name: 'Aboutme',
  props: {
    Section: {
      type: String,
      default: 'BUT...',
    },
    selfie_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/ivan/selfie.png',
    },
    aboutme: {
      type: String,
      default: 'About Me',
    },
    selfie_alt: {
      type: String,
      default: 'image',
    },
    Heading: {
      type: String,
      default: 'What I can do?',
    },
    Section1: {
      type: String,
      default: 'MAYBE YOU Are Interested in',
    },
    whoami: {
      type: String,
      default: 'Who am I?',
    },
    Text: {
      type: String,
      default: 'Hire Me',
    },
  },
  components: {
    AppMark,
  },

  data() {
    return {
      raw0jub: ' ',
      rawky42: ' ',
      rawn7i8: ' ',
    }
  },
}
</script>

<style scoped>
.aboutme-aboutme {
  gap: var(--dl-space-space-sixunits);
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
}
.aboutme-header {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  max-width: 900px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.aboutme-whoami {
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.aboutme-note {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.aboutme-content {
  gap: var(--dl-space-space-threeunits);
  flex: 1;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.aboutme-main {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.aboutme-heading {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.aboutme-aboutme1 {
  align-self: center;
}
.aboutme-selfie {
  width: 140px;
  height: 126px;
  align-self: center;
  object-fit: cover;
}
.aboutme-paragraph {
  color: rgb(255, 255, 255);
  align-self: center;
  text-align: center;
}
.aboutme-note1 {
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;
}
.aboutme-content1 {
  gap: var(--dl-space-space-threeunits);
  flex: 1;
  display: flex;
  position: relative;
  max-width: 80%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.aboutme-main1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.aboutme-section1 {
  align-self: center;
  text-align: center;
}
.aboutme-heading1 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.aboutme-header1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.aboutme-paragraph1 {
  align-self: center;
  text-align: center;
}
.aboutme-container {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.aboutme-checkmarks {
  gap: var(--dl-space-space-unit);
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.aboutme-checkmarks1 {
  gap: var(--dl-space-space-unit);
  width: 50%;
  height: 100%;
  display: flex;
  align-self: flex-end;
  align-items: flex-start;
  flex-direction: column;
}
.aboutme-hireme {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dl-color-success-300);
}
.aboutme-text15 {
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
@media(max-width: 1600px) {
  .aboutme-paragraph {
    color: rgb(255, 255, 255);
  }
  .aboutme-paragraph1 {
    color: #ffffff;
  }
}
@media(max-width: 991px) {
  .aboutme-whoami {
    text-align: center;
  }
}
@media(max-width: 767px) {
  .aboutme-aboutme {
    gap: var(--dl-space-space-fourunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .aboutme-whoami {
    font-size: 32px;
    text-align: center;
  }
  .aboutme-note {
    flex-direction: column-reverse;
  }
  .aboutme-note1 {
    flex-direction: column-reverse;
  }
}
@media(max-width: 479px) {
  .aboutme-paragraph {
    color: rgb(255, 255, 255);
  }
  .aboutme-checkmarks {
    width: 100%;
    align-items: flex-start;
  }
  .aboutme-checkmarks1 {
    width: 100%;
    align-items: flex-start;
  }
}
</style>
