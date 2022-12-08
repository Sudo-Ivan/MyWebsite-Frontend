<template>
  <footer class="footer-footer" v-bind:class="rootClassName">
    <div class="footer-content">
      <main class="footer-main-content">
        <div class="footer-content1">
          <header class="footer-main">
            <div class="footer-header">
              <img
                :alt="Branding_alt"
                :src="Branding_src"
                class="footer-branding"
              />
              <span class="footer-text">{{ Text }}</span>
            </div>
          </header>
          <header class="footer-categories">
            <div class="footer-category">
              <div class="footer-links">
                <span class="footer-link">{{ Text1 }}</span>
                <span class="footer-link">{{ Text2 }}</span>
                <span class="footer-link">
                  <span>Security</span>
                  <br />
                </span>
                <span class="footer-link">{{ Text3 }}</span>
                <a
                  :href="link_Text"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="footer-text07 footer-link"
                >
                  {{ Text4 }}
                </a>
              </div>
            </div>
          </header>
        </div>
      </main>
    </div>
    <section class="footer-copyright">
      <span class="footer-text08">
        <span>Website Last Updated November 2022 </span>
        <br />
        <span>Being built with Rust + WASM + VueJS</span>
      </span>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    Text2: {
      type: String,
      default: 'Terms of Service',
    },
    Text: {
      type: String,
      default: 'A Ivan Ryan Website',
    },
    Text3: {
      type: String,
      default: 'Contact Me\n',
    },
    Branding_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/ivanonpc-22/MyWebsite-Assets/main/images/logo/MyLogo_1.png',
    },
    Text1: {
      type: String,
      default: 'Privacy Policy',
    },
    Text4: {
      type: String,
      default: 'GitHub\n',
    },
    rootClassName: String,
    Branding_alt: {
      type: String,
      default: 'image',
    },
    link_Text: {
      type: String,
      default: 'https://github.com/Sudo-Ivan',
    },
  },
}
</script>

<style scoped>
.footer-footer {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 120px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: center;
}
.footer-content {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.footer-main-content {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.footer-content1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.footer-main {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.footer-header {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.footer-branding {
  width: 120px;
  object-fit: cover;
}
.footer-text {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 14px;
  max-width: 260px;
  font-family: Poppins;
  line-height: 21px;
}
.footer-categories {
  gap: var(--dl-space-space-fourunits);
  width: 934px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.footer-category {
  gap: var(--dl-space-space-unit);
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.footer-links {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.footer-text07 {
  text-decoration: none;
}
.footer-copyright {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.footer-text08 {
  color: rgb(196, 196, 196);
  width: 100%;
  font-size: 14px;
  text-align: center;
  font-family: Poppins;
  line-height: 21px;
}

@media(max-width: 991px) {
  .footer-footer {
    align-self: center;
  }
  .footer-content {
    gap: var(--dl-space-space-threeunits);
    max-width: 100%;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .footer-main-content {
    width: 100%;
  }
  .footer-content1 {
    width: 100%;
    justify-content: center;
  }
  .footer-header {
    align-self: center;
    align-items: center;
  }
  .footer-branding {
    align-self: flex-start;
  }
  .footer-links {
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .footer-copyright {
    display: none;
  }
}
@media(max-width: 767px) {
  .footer-content1 {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .footer-main {
    gap: var(--dl-space-space-twounits);
  }
  .footer-categories {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .footer-content {
    align-items: center;
  }
  .footer-content1 {
    align-items: center;
    justify-content: center;
  }
  .footer-header {
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .footer-branding {
    align-self: flex-start;
  }
  .footer-category {
    align-self: center;
  }
  .footer-links {
    align-self: center;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;
  }
  .footer-root-class-name {
    align-self: center;
  }
}
</style>
