<template>
  <nav class="navbar-navbar" v-bind:class="rootClassName">
    <router-link to="/" class="navbar-navlink">
      <img
        alt="Planical7012"
        :src="BrandingLogo_src"
        class="navbar-branding-logo"
      />
    </router-link>
    <div class="navbar-nav-content">
      <div class="navbar-nav-links">
        <router-link to="/projects" class="navbar-link nav-link">
          Projects
        </router-link>
        <router-link to="/portfolio" class="navbar-link1 nav-link">
          Portfolio
        </router-link>
        <a
          href="https://blog.ivanryan.dev"
          target="_blank"
          rel="noreferrer noopener"
          class="navbar-link2 nav-link"
        >
          <span>Blog</span>
          <br />
        </a>
        <router-link to="/stores" class="navbar-link3 nav-link">
          Store
        </router-link>
      </div>
      <router-link to="/hire-me" class="navbar-navlink1">
        <div class="navbar-get-started get-started">
          <span class="navbar-text2">Hire Me</span>
        </div>
      </router-link>
    </div>
    <div id="mobile-menu" class="navbar-mobile-menu">
      <div class="navbar-branding">
        <img :alt="image_alt1" :src="image_src1" class="navbar-image" />
        <div id="close-mobile-menu" class="navbar-container">
          <svg viewBox="0 0 1024 1024" class="navbar-icon">
            <path
              d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="get-started"><span class="navbar-text3">Get started</span></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    image_src1: {
      type: String,
      default:
        'https://cdn.statically.io/gh/ivanonpc-22/MyWebsite-Assets/main/images/logo/MyLogo_1.png',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    BrandingLogo_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/ivanonpc-22/MyWebsite-Assets/main/images/logo/MyLogo_1.png',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.navbar-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: 1200px;
  align-self: auto;
  align-items: center;
  flex-shrink: 1;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-fiveunits);
}
.navbar-navlink {
  display: contents;
}
.navbar-branding-logo {
  width: 15%;
  height: 5%;
  box-sizing: content-box;
  text-decoration: none;
}
.navbar-nav-content {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: center;
  margin-left: auto;
  flex-direction: row;
  justify-content: flex-start;
}
.navbar-nav-links {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  border-color: transparent;
}
.navbar-link {
  transition: 0.3s;
  text-decoration: none;
}
.navbar-link:hover {
  text-underline-position: below;
}
.navbar-link1 {
  text-decoration: none;
}
.navbar-link2 {
  text-decoration: none;
}
.navbar-link3 {
  text-decoration: none;
}
.navbar-navlink1 {
  display: contents;
}
.navbar-get-started {
  text-decoration: none;
  background-color: var(--dl-color-success-300);
}
.navbar-text2 {
  color: rgb(255, 255, 255);
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  font-stretch: normal;
}
.navbar-mobile-menu {
  gap: var(--dl-space-space-twounits);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: var(--dl-space-space-twounits);
  z-index: 100;
  position: fixed;
  transform: translateX(100%);
  transition: 0.3s;
  align-items: stretch;
  flex-direction: column;
  background-color: #fff;
}
.navbar-branding {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-image {
  width: 100px;
  filter: brightness(0) saturate(100%);
  object-fit: cover;
}
.navbar-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.navbar-icon {
  width: 24px;
  height: 24px;
}
.navbar-text3 {
  color: rgba(255, 255, 255, 1);
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  font-stretch: normal;
  text-decoration: none;
}







@media(max-width: 1600px) {
  .navbar-link {
    text-decoration: none;
  }
}
@media(max-width: 767px) {
  .navbar-navbar {
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .navbar-branding-logo {
    width: 80px;
  }
  .navbar-nav-links {
    display: none;
  }
  .navbar-get-started {
    display: none;
  }
  .navbar-branding {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .navbar-navbar {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
