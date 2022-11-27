<template>
  <div class="home-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <section id="first" class="home-firstsection">
      <div class="home-hero">
        <div class="home-content">
          <main class="home-main">
            <header class="home-header">
              <h1 class="home-heading">
                <span class="home-text">I am a </span>
                <span class="home-text01">Software Engineer</span>
                <br />
              </h1>
              <span class="home-caption">
                Building Secure, Private, and Efficient applications. 
              </span>
            </header>
            <div class="home-buttons">
              <div class="home-myprojects button">
                <span class="home-text03">My Projects</span>
              </div>
              <div class="home-portfolio button">
                <span class="home-text04">Portfolio</span>
              </div>
              <a
                href="https://github.com/Sudo-Ivan"
                target="_blank"
                rel="noreferrer noopener"
                class="home-link"
              >
                <div class="home-github button">
                  <span class="home-text05">
                    <span>GitHub</span>
                    <br />
                  </span>
                </div>
              </a>
            </div>
          </main>
        </div>
        <div class="home-image">
          <img
            id="terminal"
            alt="image"
            src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/svg/terminal-overlay01.svg"
            loading="eager"
            class="home-image1"
          />
        </div>
        <div class="home-image2">
          <img
            alt="image"
            src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/svg/terminal-overlay.svg"
            class="home-image3"
          />
        </div>
      </div>
    </section>
    <section id="second" class="home-codesecureprotect">
      <span class="home-section section-head">AND A</span>
      <h2 class="home-text08">Privacy and Security Enthusiast</h2>
      <div class="home-features">
        <header class="feature feature-active home-feature">
          <h3 class="home-text09">Code</h3>
          <p class="home-text10">Efficiently</p>
        </header>
        <header class="feature home-feature1">
          <h3 class="home-text11">Secure</h3>
          <p class="home-text12">By Default</p>
        </header>
        <header class="feature home-feature2">
          <h3 class="home-text13">Protect</h3>
          <p class="home-text14">The People</p>
        </header>
      </div>
      <div class="home-note">
        <div class="home-content01">
          <main class="home-main1">
            <h2 class="home-heading1">Pick the right tool for the job</h2>
            <p class="home-paragraph">
              <span>
                Picking the proper programming language for the job is important
                it ensure that you setup yourself for success. 
              </span>
              <br />
              <br />
              <span>
                This will impact your scalability, performance, security and
                privacy. I keep these values in mind when building projects.
              </span>
              <br />
            </p>
          </main>
        </div>
        <div class="home-image4">
          <img
            alt="image"
            src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/svg/CodeBlocks1.svg"
            class="home-image5"
          />
        </div>
      </div>
    </section>
    <section id="aboutme" class="home-aboutme">
      <header class="home-header01">
        <span class="section-head">BUT...</span>
        <h2 class="home-whoami">Who am I?</h2>
      </header>
      <section class="home-note1">
        <div class="home-content02">
          <div class="home-main2">
            <div class="home-heading2">
              <h2 class="home-aboutme1 section-heading">About Me</h2>
              <img
                alt="image"
                src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/ivan/selfie.png"
                loading="lazy"
                class="home-selfie"
              />
              <p class="home-paragraph1 section-description">
                <span class="home-text20">
                  I am Ivan Ryan, the founder and CEO of Voltaic Hosting, a
                  international provider of sustainable, secure, and private
                  hosting solutions.
                  <span v-html="raw57bs"></span>
                </span>
                <br class="home-text21" />
                <br class="home-text22" />
                <span class="home-text23">
                  I also work as a for hire developer that specializes in
                  developing a multitude of applications that offer exceptional
                  scalability, performance, security, and privacy. While being
                  fully compliant with the standards and regulations in Europe and
                  United States.
                  <span v-html="rawij64"></span>
                </span>
                <br class="home-text24" />
                <br class="home-text25" />
                <span class="home-text26">
                  I maintain a number of professional certifications, including
                  Red Hat Certified Systems Engineer and Linux Foundation
                  Certified System Engineer. I am working on a degree in
                  Intelligence Studies at American Military University.
                </span>
                <br class="home-text27" />
                <br class="home-text28" />
                <span class="home-text29">
                  My goal is to help organizations and individuals by developing
                  secure, reliable, and compliant software. I am able to remote
                  code and work with the following IDEs and Code Editors: Visual
                  Studio Code, Eclipse, IntelliJ IDEA and Sublime Text.
                </span>
                <br class="home-text30" />
                <br class="home-text31" />
                <router-link to="/about-me" class="home-navlink">
                  You can read more about me here
                </router-link>
                <br class="home-text32" />
                <br />
                <span><span v-html="rawcegi"></span></span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="home-note2">
        <div class="home-content03">
          <main class="home-main3">
            <span class="home-section2 section-head">
              MAYBE YOU Are Interested in
            </span>
            <main class="home-heading3">
              <header class="home-header02">
                <h2 class="section-heading">What I can do?</h2>
                <p class="home-paragraph2 section-description">
                  <span>
                    You will find most of my projects on GitHub, you can also
                    reach out to me to request a sample project of your choice.
                  </span>
                  <br />
                </p>
              </header>
              <div class="home-checkmarks">
                <app-mark label="Remote Coding"></app-mark>
                <app-mark label="OWASP Secure Coding"></app-mark>
                <app-mark label="UI/UX Design"></app-mark>
              </div>
            </main>
          </main>
          <div class="home-hireme button">
            <span class="home-text37">Hire Me</span>
          </div>
        </div>
      </section>
    </section>
    <section id="certs" class="home-certs">
      <header class="home-header03">
        <header class="home-left">
          <span class="section-head">IF MY PROJECTS DONT SUFFICE, HERE ARE</span>
          <h2 class="section-heading">My Certifications</h2>
        </header>
        <div class="home-right">
          <p class="home-paragraph3 section-description">
            <span class="home-text38">Backend is undergoing changes</span>
            <br />
            <span>Not all sites will be available.</span>
            <br />
          </p>
        </div>
      </header>
      <main class="home-cards">
        <section class="home-card">
          <img
            alt="image"
            src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/comptia-logo.png"
            class="home-image6"
          />
          <main class="home-content04">
            <h1 class="home-header04">CompTIA</h1>
            <p class="home-description">Certifications</p>
          </main>
          <div class="home-container1">
            <a href target="_blank" rel="noreferrer noopener" class="home-link1">
              <p class="home-text42">View</p>
            </a>
          </div>
        </section>
        <section class="home-card1">
          <img
            alt="image"
            src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/linux-foundation-logo.png"
            class="home-image7"
          />
          <main class="home-content05">
            <h1 class="home-header05">Linux Foundation</h1>
            <p class="home-description1">Certifications</p>
          </main>
          <div class="home-container2">
            <a href target="_blank" rel="noreferrer noopener" class="home-link2">
              <p class="home-text43">View</p>
            </a>
          </div>
        </section>
        <section class="home-card2">
          <img
            alt="image"
            src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/redhat-logo.png"
            class="home-image8"
          />
          <main class="home-content06">
            <h1 class="home-header06">Red Hat</h1>
            <p class="home-description2">Certifications</p>
          </main>
          <div class="home-container3">
            <a href target="_blank" rel="noreferrer noopener" class="home-link3">
              <p class="home-text44">View</p>
            </a>
          </div>
        </section>
      </main>
    </section>
    <section id="blog" class="home-blog">
      <span class="section-head">OH AND ONE MORE THING</span>
      <header class="home-header07">
        <h2 class="home-heading6 section-heading">Check out my Blog</h2>
      </header>
      <main class="home-cards1">
        <section class="home-card3">
          <main class="home-content07">
            <header class="home-header08">
              <h1 class="home-header09">
                How to host your own secure email server.
              </h1>
            </header>
            <p class="home-description3">
              Why pay for a premium email service when you can host your own
              premium email service for free.
            </p>
            <div class="home-button">
              <a
                href="https://blog.ivanryan.dev"
                target="_blank"
                rel="noreferrer noopener"
                class="home-link4"
              >
                <p class="home-text45">Read -&gt;</p>
              </a>
            </div>
          </main>
        </section>
        <section class="home-card4">
          <main class="home-content08">
            <header class="home-header10">
              <h1 class="home-header11">The Basics of Server Security</h1>
            </header>
            <p class="home-description4">
              In order to protect your servers from common attacks, it is
              important to understand the basics of server security.
            </p>
            <div class="home-button1">
              <a
                href="https://blog.ivanryan.dev"
                target="_blank"
                rel="noreferrer noopener"
                class="home-link5"
              >
                <p class="home-text46">Read -&gt;</p>
              </a>
            </div>
          </main>
        </section>
        <section class="home-card5">
          <main class="home-content09">
            <header class="home-header12">
              <h1 class="home-header13">How to maintain your email server.</h1>
            </header>
            <p class="home-description5">
              Updates, Security patches and Monitoring. Not all tasks should be
              automated. Learn the proper way
            </p>
            <div class="home-button2">
              <a
                href="https://blog.ivanryan.dev"
                target="_blank"
                rel="noreferrer noopener"
                class="home-link6"
              >
                <p class="home-text47">Read -&gt;</p>
              </a>
            </div>
          </main>
        </section>
      </main>
    </section>
    <footer class="home-footer">
      <div class="home-content10">
        <main class="home-main-content">
          <div class="home-content11">
            <header class="home-main4">
              <div class="home-header14">
                <img
                  alt="image"
                  src="https://cdn.statically.io/gh/ivanonpc-22/MyWebsite-Assets/main/images/logo/MyLogo_1.png"
                  class="home-branding"
                />
                <span class="home-text48">A Ivan Ryan Website</span>
              </div>
            </header>
            <header class="home-categories">
              <div class="home-category">
                <div class="home-links">
                  <span class="footer-link">Privacy Policy</span>
                  <span class="footer-link">Terms of Service</span>
                  <span class="footer-link">
                    <span>Security</span>
                    <br />
                  </span>
                  <span class="footer-link">Contact Me</span>
                  <a
                    href="https://github.com/Sudo-Ivan"
                    target="_blank"
                    rel="noreferrer noopener"
                    class="home-text55 footer-link"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </header>
          </div>
        </main>
        <main class="home-subscribe"></main>
      </div>
      <section class="home-copyright">
        <span class="home-text56">
          <span>Website Last Updated November 2022 </span>
          <br />
          <span>Made with Rust + WASM + VueJS</span>
        </span>
      </section>
    </footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppMark from '../components/mark'

export default {
  name: 'Home',
  components: {
    AppNavbar,
    AppMark,
  },

  data() {
    return {
      raw57bs: ' ',
      rawij64: ' ',
      rawcegi: ' ',
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
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d5db3d8d-896c-4432-adf9-a9c05a2ff362/52d8462e-a143-486c-8202-7b857426b144?org_if_sml=1',
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
.home-firstsection {
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
.home-hero {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-content {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
}
.home-main {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-header {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-heading {
  color: rgb(255, 255, 255);
  font-size: 64px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.home-text {
  color: #80ff44;
}
.home-caption {
  color: rgb(255, 255, 255);
  font-size: 20px;
  align-self: flex-start;
  font-family: Poppins;
  line-height: 30px;
}
.home-buttons {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-myprojects {
  background-color: #2A2A2A;
}
.home-text03 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.home-portfolio {
  background-color: #2A2A2A;
}
.home-text04 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.home-link {
  display: contents;
}
.home-github {
  text-decoration: none;
  background-color: #2A2A2A;
}
.home-text05 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.home-image {
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
.home-image1 {
  width: 900px;
  height: 670px;
  object-fit: cover;
}
.home-image2 {
  display: none;
}
.home-codesecureprotect {
  flex: 1;
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-fourunits);
  align-items: center;
  padding-top: 120px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
}
.home-section {
  margin-bottom: var(--dl-space-space-unit);
}
.home-text08 {
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.home-features {
  width: 100%;
  display: flex;
  max-width: 1200px;
  margin-top: var(--dl-space-space-fiveunits);
  align-items: center;
  user-select: none;
  border-color: #5A5A5A;
  margin-bottom: 120px;
  flex-direction: row;
  justify-content: center;
  border-bottom-width: 1px;
}
.home-text09 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.home-text10 {
  color: rgb(121, 124, 128);
  font-family: Poppins;
}
.home-text11 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.home-text12 {
  color: rgb(121, 124, 128);
  font-family: Poppins;
}
.home-text13 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.home-text14 {
  color: rgb(121, 124, 128);
  font-family: Poppins;
}
.home-note {
  gap: 140px;
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-content01 {
  gap: var(--dl-space-space-threeunits);
  flex: 1;
  display: flex;
  max-width: 520px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-main1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-heading1 {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
}
.home-paragraph {
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: Poppins;
  line-height: 28px;
}
.home-image4 {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.home-image5 {
  width: 511px;
  height: 554px;
  object-fit: cover;
}
.home-aboutme {
  gap: var(--dl-space-space-sixunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
}
.home-header01 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  max-width: 900px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-whoami {
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.home-note1 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-content02 {
  gap: var(--dl-space-space-threeunits);
  flex: 1;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-main2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-heading2 {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-aboutme1 {
  align-self: center;
}
.home-selfie {
  width: 140px;
  height: 126px;
  align-self: center;
  object-fit: cover;
}
.home-paragraph1 {
  color: rgb(255, 255, 255);
  align-self: center;
  text-align: center;
}
.home-navlink {
  text-decoration: underline;
}
.home-note2 {
  width: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;
}
.home-content03 {
  gap: var(--dl-space-space-threeunits);
  flex: 1;
  display: flex;
  position: relative;
  max-width: 80%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-main3 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-section2 {
  align-self: center;
  text-align: center;
}
.home-heading3 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-header02 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-paragraph2 {
  align-self: center;
  text-align: center;
}
.home-checkmarks {
  gap: var(--dl-space-space-unit);
  width: 584px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-hireme {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dl-color-success-300);
}
.home-text37 {
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.home-certs {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 120px;
  border-color: #51515A;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
  border-top-width: 1px;
}
.home-header03 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-left {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-right {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-paragraph3 {
  color: rgb(255, 0, 0);
  width: 100%;
  max-width: 480px;
}
.home-cards {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-card {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.home-image6 {
  width: 100px;
  object-fit: cover;
}
.home-content04 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-header04 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.home-description {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
.home-container1 {
  display: flex;
  position: relative;
}
.home-link1 {
  display: contents;
}
.home-text42 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.home-card1 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.home-image7 {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.home-content05 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-header05 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.home-description1 {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
.home-container2 {
  display: flex;
  position: relative;
}
.home-link2 {
  display: contents;
}
.home-text43 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.home-card2 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.home-image8 {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.home-content06 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-header06 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.home-description2 {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
.home-container3 {
  display: flex;
  position: relative;
}
.home-link3 {
  display: contents;
}
.home-text44 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.home-blog {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 120px;
  border-color: #51515A;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
  border-top-width: 1px;
}
.home-header07 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-heading6 {
  text-align: center;
}
.home-cards1 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-card3 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.home-content07 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-header08 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-header09 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.home-description3 {
  color: #ffffff;
  font-family: Poppins;
  line-height: 28px;
}
.home-button {
  gap: var(--dl-space-space-oneandhalfunits);
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  border-color: #80FF44;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: center;
  border-bottom-width: 1px;
}
.home-button:hover {
  opacity: 0.5;
}
.home-link4 {
  display: contents;
}
.home-text45 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.home-card4 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  height: auto;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.home-content08 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-header10 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-header11 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.home-description4 {
  color: #ffffff;
  font-family: Poppins;
  line-height: 28px;
}
.home-button1 {
  gap: var(--dl-space-space-oneandhalfunits);
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  border-color: #80FF44;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: center;
  border-bottom-width: 1px;
}
.home-button1:hover {
  opacity: 0.5;
}
.home-link5 {
  display: contents;
}
.home-text46 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.home-card5 {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.home-content09 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-header12 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-header13 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.home-description5 {
  color: #ffffff;
  font-family: Poppins;
  line-height: 28px;
}
.home-button2 {
  gap: var(--dl-space-space-oneandhalfunits);
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  border-color: #80FF44;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: center;
  border-bottom-width: 1px;
}
.home-button2:hover {
  opacity: 0.5;
}
.home-link6 {
  display: contents;
}
.home-text47 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.home-footer {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 120px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: center;
}
.home-content10 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.home-main-content {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-content11 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-main4 {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-header14 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-branding {
  width: 120px;
  object-fit: cover;
}
.home-text48 {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 14px;
  max-width: 260px;
  font-family: Poppins;
  line-height: 21px;
}
.home-categories {
  gap: var(--dl-space-space-fourunits);
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.home-category {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-links {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text55 {
  text-decoration: none;
}
.home-subscribe {
  gap: var(--dl-space-space-unit);
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-copyright {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text56 {
  color: rgb(196, 196, 196);
  width: 100%;
  font-size: 14px;
  text-align: center;
  font-family: Poppins;
  line-height: 21px;
}
@media(max-width: 1600px) {
  .home-firstsection {
    border-color: rgba(81, 81, 90, 0);
  }
  .home-image {
    width: 50%;
    height: 10%;
    flex-direction: column;
    justify-content: center;
  }
  .home-image1 {
    top: var(--dl-space-space-unit);
    left: -40px;
    width: 821px;
    height: auto;
    position: absolute;
    align-self: center;
  }
  .home-text10 {
    color: rgb(121, 124, 128);
    font-family: Poppins;
  }
  .home-paragraph {
    color: rgb(255, 255, 255);
    font-family: Poppins;
    line-height: 28px;
  }
  .home-paragraph1 {
    color: #ffffff;
  }
  .home-text20 {
    color: #ffffff;
  }
  .home-text21 {
    color: #ffffff;
  }
  .home-text22 {
    color: #ffffff;
  }
  .home-text23 {
    color: #ffffff;
  }
  .home-text24 {
    color: #ffffff;
  }
  .home-text25 {
    color: #ffffff;
  }
  .home-text26 {
    color: #ffffff;
  }
  .home-text27 {
    color: #ffffff;
  }
  .home-text28 {
    color: #ffffff;
  }
  .home-text29 {
    color: #ffffff;
  }
  .home-text30 {
    color: #ffffff;
  }
  .home-text31 {
    color: #ffffff;
  }
  .home-navlink {
    text-decoration: underline;
  }
  .home-text32 {
    color: #ffffff;
  }
  .home-paragraph2 {
    color: #ffffff;
  }
  .home-paragraph3 {
    color: rgb(245, 0, 0);
  }
  .home-text38 {
    color: rgb(245, 0, 0);
  }
  .home-text42 {
    color: rgb(128, 255, 68);
  }
  .home-text43 {
    color: rgb(128, 255, 68);
  }
  .home-image8 {
    width: 107px;
    height: 116px;
  }
  .home-text44 {
    color: rgb(128, 255, 68);
  }
  .home-header11 {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
    line-height: 36px;
  }
  .home-description4 {
    color: rgb(194, 198, 204);
  }
  .home-description5 {
    color: rgb(194, 198, 204);
    font-family: Poppins;
    line-height: 28px;
  }
}
@media(max-width: 1200px) {
  .home-firstsection {
    justify-content: flex-start;
  }
  .home-hero {
    justify-content: center;
  }
  .home-heading {
    align-self: center;
    text-align: center;
  }
  .home-caption {
    align-self: center;
    text-align: center;
  }
  .home-buttons {
    align-self: center;
    justify-content: center;
  }
  .home-image {
    width: 50%;
  }
  .home-image1 {
    top: 285px;
    left: -419px;
    width: 815px;
    height: 617px;
    position: absolute;
    align-self: center;
  }
}
@media(max-width: 991px) {
  .home-firstsection {
    height: auto;
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-hero {
    gap: var(--dl-space-space-fourunits);
    flex: 1;
    position: relative;
    max-width: auto;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-content {
    position: relative;
    align-items: center;
  }
  .home-main {
    align-items: center;
  }
  .home-heading {
    text-align: left;
  }
  .home-text {
    text-align: left;
  }
  .home-text01 {
    text-align: left;
  }
  .home-caption {
    text-align: left;
  }
  .home-buttons {
    width: 100%;
  }
  .home-myprojects {
    flex: 1;
  }
  .home-portfolio {
    flex: 1;
  }
  .home-github {
    flex: 1;
  }
  .home-image {
    right: 0px;
    display: none;
    position: absolute;
    flex-direction: column;
  }
  .home-image2 {
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .home-image3 {
    width: 600px;
    align-self: center;
  }
  .home-text08 {
    text-align: center;
  }
  .home-note {
    gap: var(--dl-space-space-fourunits);
    flex-direction: column;
  }
  .home-content01 {
    max-width: 100%;
  }
  .home-main1 {
    align-items: flex-start;
  }
  .home-whoami {
    text-align: center;
  }
  .home-certs {
    gap: var(--dl-space-space-threeunits);
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .home-header03 {
    gap: var(--dl-space-space-unit);
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-cards {
    gap: var(--dl-space-space-oneandhalfunits);
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-card {
    width: 40%;
  }
  .home-card1 {
    width: 40%;
  }
  .home-card2 {
    width: 40%;
  }
  .home-cards1 {
    gap: var(--dl-space-space-halfunit);
  }
  .home-card3 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-description3 {
    color: #ffffff;
  }
  .home-card4 {
    height: auto;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-description4 {
    color: #ffffff;
  }
  .home-card5 {
    height: auto;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-description5 {
    color: #ffffff;
    font-family: Poppins;
    line-height: 28px;
  }
  .home-footer {
    align-self: center;
  }
  .home-content10 {
    gap: var(--dl-space-space-threeunits);
    max-width: 100%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-main-content {
    width: 100%;
  }
  .home-content11 {
    width: 100%;
    justify-content: center;
  }
  .home-header14 {
    align-self: center;
    align-items: center;
  }
  .home-branding {
    align-self: flex-start;
  }
  .home-links {
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .home-copyright {
    display: none;
  }
}
@media(max-width: 767px) {
  .home-content {
    gap: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .home-heading {
    font-size: 40px;
  }
  .home-text {
    font-size: 40px;
  }
  .home-text01 {
    font-size: 40px;
  }
  .home-caption {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-family: Poppins;
    line-height: 24px;
  }
  .home-myprojects {
    display: none;
  }
  .home-portfolio {
    display: none;
  }
  .home-github {
    display: none;
  }
  .home-image3 {
    width: 500px;
  }
  .home-codesecureprotect {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .home-text08 {
    font-size: 32px;
    text-align: center;
  }
  .home-features {
    gap: var(--dl-space-space-oneandhalfunits);
    margin-top: var(--dl-space-space-threeunits);
    border-color: #5A5A5A;
    margin-bottom: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .home-feature {
    width: 100%;
    padding-bottom: var(--dl-space-space-unit);
  }
  .home-text09 {
    font-size: 20px;
  }
  .home-feature1 {
    width: 100%;
    border-color: #5A5A5A;
    padding-bottom: var(--dl-space-space-unit);
    border-bottom-width: 1px;
  }
  .home-text11 {
    font-size: 20px;
  }
  .home-feature2 {
    width: 100%;
    padding-bottom: var(--dl-space-space-unit);
  }
  .home-text13 {
    font-size: 20px;
  }
  .home-note {
    gap: var(--dl-space-space-threeunits);
  }
  .home-main1 {
    width: 100%;
    align-items: flex-start;
  }
  .home-heading1 {
    font-size: 28px;
  }
  .home-paragraph {
    line-height: 24px;
  }
  .home-aboutme {
    gap: var(--dl-space-space-fourunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-whoami {
    font-size: 32px;
    text-align: center;
  }
  .home-note1 {
    flex-direction: column-reverse;
  }
  .home-note2 {
    flex-direction: column-reverse;
  }
  .home-left {
    gap: var(--dl-space-space-unit);
  }
  .home-cards1 {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
  }
  .home-content11 {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .home-main4 {
    gap: var(--dl-space-space-twounits);
  }
  .home-categories {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .home-header {
    align-items: flex-start;
  }
  .home-heading {
    max-width: 280px;
    text-align: center;
  }
  .home-text {
    max-width: 280px;
  }
  .home-text01 {
    max-width: 280px;
  }
  .home-image3 {
    width: 400px;
    align-self: center;
  }
  .home-image5 {
    width: 100%;
    display: none;
  }
  .home-paragraph1 {
    color: rgb(255, 255, 255);
  }
  .home-text20 {
    color: #ffffff;
  }
  .home-text21 {
    color: #ffffff;
  }
  .home-text22 {
    color: #ffffff;
  }
  .home-text23 {
    color: #ffffff;
  }
  .home-text24 {
    color: #ffffff;
  }
  .home-text25 {
    color: #ffffff;
  }
  .home-text26 {
    color: #ffffff;
  }
  .home-text27 {
    color: #ffffff;
  }
  .home-text28 {
    color: #ffffff;
  }
  .home-text29 {
    color: #ffffff;
  }
  .home-text30 {
    color: #ffffff;
  }
  .home-text31 {
    color: #ffffff;
  }
  .home-navlink {
    text-decoration: underline;
  }
  .home-text32 {
    color: #ffffff;
  }
  .home-checkmarks {
    width: 100%;
    align-items: flex-start;
  }
  .home-card {
    width: 80%;
  }
  .home-text42 {
    color: rgb(128, 255, 68);
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration: none;
  }
  .home-card1 {
    width: 80%;
  }
  .home-image7 {
    width: 80px;
    height: 80px;
  }
  .home-card2 {
    width: 80%;
  }
  .home-content10 {
    align-items: center;
  }
  .home-category {
    align-self: center;
  }
  .home-links {
    align-items: center;
  }
}
</style>
