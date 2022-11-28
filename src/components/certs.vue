<template>
  <section id="certs" class="certs-certs">
    <header class="certs-header">
      <header class="certs-left">
        <span class="section-head">{{ Section }}</span>
        <h2 class="section-heading">{{ Heading }}</h2>
      </header>
      <div class="certs-right">
        <p class="certs-paragraph section-description">
          <span class="certs-text">Backend is undergoing changes</span>
          <br />
          <span>Not all sites will be available.</span>
          <br />
        </p>
      </div>
    </header>
    <main class="certs-cards">
      <section class="certs-card">
        <img :alt="image_alt" :src="image_src" class="certs-image" />
        <main class="certs-content">
          <h1 class="certs-header1">{{ Header }}</h1>
          <p class="certs-description">{{ Description }}</p>
        </main>
        <div class="certs-container">
          <a
            :href="link_Text"
            target="_blank"
            rel="noreferrer noopener"
            class="certs-link"
          >
            <p class="certs-text4">{{ Text }}</p>
          </a>
        </div>
      </section>
      <section class="certs-card1">
        <img :alt="image_alt1" :src="image_src1" class="certs-image1" />
        <main class="certs-content1">
          <h1 class="certs-header2">{{ Header1 }}</h1>
          <p class="certs-description1">{{ Description1 }}</p>
        </main>
        <div class="certs-container1">
          <a
            :href="link_Text1"
            target="_blank"
            rel="noreferrer noopener"
            class="certs-link1"
          >
            <p class="certs-text5">{{ Text1 }}</p>
          </a>
        </div>
      </section>
      <section class="certs-card2">
        <img :alt="image_alt2" :src="image_src2" class="certs-image2" />
        <main class="certs-content2">
          <h1 class="certs-header3">{{ Header2 }}</h1>
          <p class="certs-description2">{{ Description2 }}</p>
        </main>
        <div class="certs-container2">
          <a
            :href="link_Text2"
            target="_blank"
            rel="noreferrer noopener"
            class="certs-link2"
          >
            <p class="certs-text6">{{ Text2 }}</p>
          </a>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Certs',
  props: {
    Section: {
      type: String,
      default: 'IF MY PROJECTS DONT SUFFICE, HERE ARE\n',
    },
    Heading: {
      type: String,
      default: 'My Certifications',
    },
    image_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/comptia-logo.png',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/linux-foundation-logo.png',
    },
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src2: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/png/redhat-logo.png',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    Header: {
      type: String,
      default: 'CompTIA',
    },
    Description: {
      type: String,
      default: 'Certifications',
    },
    Text: {
      type: String,
      default: 'View',
    },
    link_Text: String,
    Header1: {
      type: String,
      default: 'Linux Foundation',
    },
    Description1: {
      type: String,
      default: 'Certifications',
    },
    Text1: {
      type: String,
      default: 'View',
    },
    link_Text1: String,
    Header2: {
      type: String,
      default: 'Red Hat',
    },
    Description2: {
      type: String,
      default: 'Certifications',
    },
    Text2: {
      type: String,
      default: 'View',
    },
    link_Text2: String,
  },
}
</script>

<style scoped>
.certs-certs {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
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
.certs-header {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.certs-left {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.certs-right {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.certs-paragraph {
  color: rgb(255, 0, 0);
  width: 100%;
  max-width: 480px;
}
.certs-cards {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.certs-card {
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
.certs-image {
  width: 100px;
  object-fit: cover;
}
.certs-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.certs-header1 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.certs-description {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
.certs-container {
  display: flex;
  position: relative;
}
.certs-link {
  display: contents;
}
.certs-text4 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.certs-card1 {
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
.certs-image1 {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.certs-content1 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.certs-header2 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.certs-description1 {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
.certs-container1 {
  display: flex;
  position: relative;
}
.certs-link1 {
  display: contents;
}
.certs-text5 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.certs-card2 {
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
.certs-image2 {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.certs-content2 {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.certs-header3 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.certs-description2 {
  color: rgb(194, 198, 204);
  font-family: Poppins;
  line-height: 28px;
}
.certs-container2 {
  display: flex;
  position: relative;
}
.certs-link2 {
  display: contents;
}
.certs-text6 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .certs-paragraph {
    color: rgb(245, 0, 0);
  }
  .certs-text {
    color: rgb(245, 0, 0);
  }
  .certs-text4 {
    color: rgb(128, 255, 68);
  }
  .certs-text5 {
    color: rgb(128, 255, 68);
  }
  .certs-image2 {
    width: 107px;
    height: 116px;
  }
  .certs-text6 {
    color: rgb(128, 255, 68);
  }
}
@media(max-width: 991px) {
  .certs-certs {
    gap: var(--dl-space-space-threeunits);
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .certs-header {
    gap: var(--dl-space-space-unit);
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .certs-cards {
    gap: var(--dl-space-space-oneandhalfunits);
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .certs-card {
    width: 40%;
  }
  .certs-card1 {
    width: 40%;
  }
  .certs-card2 {
    width: 40%;
  }
}
@media(max-width: 767px) {
  .certs-left {
    gap: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .certs-card {
    width: 80%;
  }
  .certs-text4 {
    color: rgb(128, 255, 68);
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration: none;
  }
  .certs-card1 {
    width: 80%;
  }
  .certs-image1 {
    width: 80px;
    height: 80px;
  }
  .certs-card2 {
    width: 80%;
  }
}
</style>
