<template>
  <section id="second" class="codesecureprotect-codesecureprotect">
    <span class="codesecureprotect-section section-head">{{ Section }}</span>
    <h2 class="codesecureprotect-text">{{ heading }}</h2>
    <div class="codesecureprotect-features">
      <header class="feature feature-active codesecureprotect-feature">
        <h3 class="codesecureprotect-text01">{{ heading1 }}</h3>
        <p class="codesecureprotect-text02">{{ text }}</p>
      </header>
      <header class="feature codesecureprotect-feature1">
        <h3 class="codesecureprotect-text03">{{ heading2 }}</h3>
        <p class="codesecureprotect-text04">{{ text1 }}</p>
      </header>
      <header class="feature codesecureprotect-feature2">
        <h3 class="codesecureprotect-text05">{{ heading3 }}</h3>
        <p class="codesecureprotect-text06">{{ text2 }}</p>
      </header>
    </div>
    <div class="codesecureprotect-note">
      <div class="codesecureprotect-content">
        <main class="codesecureprotect-main">
          <h2 class="codesecureprotect-heading">{{ Heading }}</h2>
          <p class="codesecureprotect-paragraph">
            <span>
              Picking the proper programming language for the job is important it
              ensure that you setup yourself for success. 
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
      <div class="codesecureprotect-image">
        <img :alt="image_alt" :src="image_src" class="codesecureprotect-image1" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Codesecureprotect',
  props: {
    Section: {
      type: String,
      default: 'AND A',
    },
    heading: {
      type: String,
      default: 'Privacy and Security Enthusiast',
    },
    heading1: {
      type: String,
      default: 'Code',
    },
    text: {
      type: String,
      default: 'Efficiently',
    },
    heading2: {
      type: String,
      default: 'Secure',
    },
    text1: {
      type: String,
      default: 'By Default',
    },
    heading3: {
      type: String,
      default: 'Protect',
    },
    text2: {
      type: String,
      default: 'The People',
    },
    image_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/website/images/svg/CodeBlocks1.svg',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    Heading: {
      type: String,
      default: 'Pick the right tool for the job',
    },
  },
}
</script>

<style scoped>
.codesecureprotect-codesecureprotect {
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
.codesecureprotect-section {
  margin-bottom: var(--dl-space-space-unit);
}
.codesecureprotect-text {
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.codesecureprotect-features {
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
.codesecureprotect-text01 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.codesecureprotect-text02 {
  color: rgb(121, 124, 128);
  font-family: Poppins;
}
.codesecureprotect-text03 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.codesecureprotect-text04 {
  color: rgb(121, 124, 128);
  font-family: Poppins;
}
.codesecureprotect-text05 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
}
.codesecureprotect-text06 {
  color: rgb(121, 124, 128);
  font-family: Poppins;
}
.codesecureprotect-note {
  gap: 140px;
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.codesecureprotect-content {
  gap: var(--dl-space-space-threeunits);
  flex: 1;
  display: flex;
  max-width: 520px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.codesecureprotect-main {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.codesecureprotect-heading {
  color: rgb(255, 255, 255);
  font-size: 32px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
}
.codesecureprotect-paragraph {
  color: rgb(255, 255, 255);
  text-align: center;
  font-family: Poppins;
  line-height: 28px;
}
.codesecureprotect-image {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.codesecureprotect-image1 {
  width: 511px;
  height: 554px;
  object-fit: cover;
}
@media(max-width: 1600px) {
  .codesecureprotect-text02 {
    color: rgb(121, 124, 128);
    font-family: Poppins;
  }
  .codesecureprotect-paragraph {
    color: rgb(255, 255, 255);
    font-family: Poppins;
    line-height: 28px;
  }
}
@media(max-width: 991px) {
  .codesecureprotect-text {
    text-align: center;
  }
  .codesecureprotect-note {
    gap: var(--dl-space-space-fourunits);
    flex-direction: column;
  }
  .codesecureprotect-content {
    max-width: 100%;
  }
  .codesecureprotect-main {
    align-items: flex-start;
  }
}
@media(max-width: 767px) {
  .codesecureprotect-codesecureprotect {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .codesecureprotect-text {
    font-size: 32px;
    text-align: center;
  }
  .codesecureprotect-features {
    gap: var(--dl-space-space-oneandhalfunits);
    margin-top: var(--dl-space-space-threeunits);
    border-color: #5A5A5A;
    margin-bottom: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .codesecureprotect-feature {
    width: 100%;
    padding-bottom: var(--dl-space-space-unit);
  }
  .codesecureprotect-text01 {
    font-size: 20px;
  }
  .codesecureprotect-feature1 {
    width: 100%;
    border-color: #5A5A5A;
    padding-bottom: var(--dl-space-space-unit);
    border-bottom-width: 1px;
  }
  .codesecureprotect-text03 {
    font-size: 20px;
  }
  .codesecureprotect-feature2 {
    width: 100%;
    padding-bottom: var(--dl-space-space-unit);
  }
  .codesecureprotect-text05 {
    font-size: 20px;
  }
  .codesecureprotect-note {
    gap: var(--dl-space-space-threeunits);
  }
  .codesecureprotect-main {
    width: 100%;
    align-items: flex-start;
  }
  .codesecureprotect-heading {
    font-size: 28px;
  }
  .codesecureprotect-paragraph {
    line-height: 24px;
  }
}
@media(max-width: 479px) {
  .codesecureprotect-image1 {
    width: 100%;
    display: none;
  }
}
</style>
