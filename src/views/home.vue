<template>
  <div class="home-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <span class="home-w-i-p">
      <span>
        Hello! my website is currently being re-designed from the ground up.
        <span v-html="rawceip"></span>
      </span>
      <br />
      <span>You can still reach me at ivan@ivanryan.dev</span>
      <br />
    </span>
    <section id="first" class="home-firstsection">
      <div class="home-hero">
        <div class="home-content">
          <main class="home-main">
            <header class="home-header">
              <h1 class="home-heading">
                <span class="home-text04">I am a </span>
                <span class="home-text05">Software Engineer</span>
                <br />
              </h1>
              <span class="home-caption">
                Building Secure, Private, and Efficient applications. 
              </span>
            </header>
            <div class="home-buttons">
              <div class="home-myprojects button">
                <span class="home-text07">My Projects</span>
              </div>
              <div class="home-portfolio button">
                <span class="home-text08">Portfolio</span>
              </div>
              <a
                href="https://github.com/Sudo-Ivan"
                target="_blank"
                rel="noreferrer noopener"
                class="home-link"
              >
                <div class="home-github button">
                  <span class="home-text09">
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
      <h2 class="home-text12">Privacy and Security Enthusiast</h2>
      <div class="home-features"></div>
      <div data-thq="thq-dropdown" class="home-thq-dropdown list-item">
        <ul data-thq="thq-dropdown-list" class="home-dropdown-list">
          <li data-thq="thq-dropdown" class="home-dropdown list-item">
            <div data-thq="thq-dropdown-toggle" class="home-dropdown-toggle">
              <span class="home-text13">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" class="home-dropdown1 list-item">
            <div data-thq="thq-dropdown-toggle" class="home-dropdown-toggle1">
              <span class="home-text14">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" class="home-dropdown2 list-item">
            <div data-thq="thq-dropdown-toggle" class="home-dropdown-toggle2">
              <span class="home-text15">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <div id="note" class="home-note">
        <div class="home-content1">
          <main class="home-main1">
            <h2 class="home-heading1">Secure and Private by Design</h2>
            <p class="home-paragraph">
              <span>
                The proper programming language for the job is important it ensure
                that you setup yourself for success when creating a secure
                program. But you also have to think about the user and their
                privacy.
              </span>
              <br />
              <br />
              <span>
                This will impact your scalability, performance, security and
                privacy. Because after all, the more secure it is the more
                inconvenient it is for the user.
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
    <app-aboutme></app-aboutme>
    <app-certs></app-certs>
    <app-blog></app-blog>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppAboutme from '../components/aboutme'
import AppCerts from '../components/certs'
import AppBlog from '../components/blog'
import AppFooter from '../components/footer'

export default {
  name: 'Home',
  components: {
    AppNavbar,
    AppAboutme,
    AppCerts,
    AppBlog,
    AppFooter,
  },

  data() {
    return {
      rawceip: ' ',
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
.home-w-i-p {
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  text-align: center;
  font-weight: 700;
  line-height: 1.4;
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
.home-text04 {
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
.home-text07 {
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
.home-text08 {
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
.home-text09 {
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
  width: 877px;
  height: 647px;
  align-self: flex-start;
  object-fit: cover;
}
.home-image2 {
  display: none;
}
.home-codesecureprotect {
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
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
.home-text12 {
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
  margin-bottom: 120px;
  flex-direction: row;
  justify-content: center;
}
.home-thq-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.home-dropdown-list {
  left: 0%;
  width: max-content;
  display: none;
  z-index: 100;
  position: absolute;
  min-width: 100%;
  transition: 0.3s;
  align-items: stretch;
  border-color: #D9D9D9;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius4);
  flex-direction: column;
  list-style-type: none;
  background-color: var(--dl-color-gray-white);
  list-style-position: inside;
}
.home-dropdown {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.home-dropdown-toggle {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.home-dropdown-toggle:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.home-text13 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.home-dropdown1 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.home-dropdown-toggle1 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.home-dropdown-toggle1:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.home-text14 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
}
.home-dropdown2 {
  cursor: pointer;
  display: inline-block;
  position: relative;
  border-radius: var(--dl-radius-radius-radius2);
}
.home-dropdown-toggle2 {
  fill: #595959;
  color: #595959;
  width: 100%;
  display: inline-flex;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  border-radius: var(--dl-radius-radius-radius4);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.home-dropdown-toggle2:hover {
  fill: #fff;
  color: #fff;
  background-color: #595959;
}
.home-text15 {
  width: 100%;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
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
.home-content1 {
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
  height: 251px;
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
    width: 741px;
    height: 543px;
    position: absolute;
    align-self: center;
  }
  .home-paragraph {
    color: rgb(255, 255, 255);
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
  .home-text04 {
    text-align: left;
  }
  .home-text05 {
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
    display: none;
    align-self: center;
  }
  .home-text12 {
    text-align: center;
  }
  .home-note {
    gap: var(--dl-space-space-fourunits);
    flex-direction: column;
  }
  .home-content1 {
    max-width: 100%;
  }
  .home-main1 {
    align-items: flex-start;
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
  .home-text04 {
    font-size: 40px;
  }
  .home-text05 {
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
    display: none;
  }
  .home-codesecureprotect {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .home-text12 {
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
}
@media(max-width: 479px) {
  .home-hero {
    height: 554px;
  }
  .home-header {
    align-items: flex-start;
  }
  .home-heading {
    max-width: 280px;
    text-align: center;
  }
  .home-text04 {
    max-width: 280px;
  }
  .home-text05 {
    max-width: 280px;
  }
  .home-image2 {
    height: 350px;
    display: none;
  }
  .home-image3 {
    width: 400px;
    display: none;
    align-self: center;
  }
  .home-image5 {
    width: 100%;
    display: none;
  }
}
</style>
