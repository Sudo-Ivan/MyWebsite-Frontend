<template>
  <div class="security-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <div class="security-features">
      <h1 class="security-text">Security.exe</h1>
      <div class="security-container1">
        <div class="security-feature-card">
          <div class="security-container2">
            <h2 class="security-text1">Pentesting</h2>
            <span class="security-text2">
              I pentest my own website using my own home made toolkit.
            </span>
          </div>
        </div>
        <div class="security-feature-card1">
          <div class="security-container3">
            <h2 class="security-text3">SSL</h2>
            <span class="security-text4">
              n SSL certificate (also known as a TLS or SSL/TLS certificate) is a
              digital document that binds the identity of a website to a
              cryptographic key pair consisting of a public key and a private key.
            </span>
          </div>
        </div>
        <div class="security-feature-card2">
          <div class="security-container4">
            <h2 class="security-text5">Snyk</h2>
            <span class="security-text6">
              We use snyk to monitor our code and packages
            </span>
          </div>
        </div>
        <div class="security-feature-card3">
          <div class="security-container5">
            <h2 class="security-text7">DNSSEC</h2>
            <span class="security-text8">
              DNSSEC strengthens authentication in DNS using digital signatures
              based on public key cryptography.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'

export default {
  name: 'Security',
  components: {
    AppNavbar,
  },
  metaInfo: {
    title: 'Security - Ivan Ryan | Software Engineer',
    meta: [
      {
        name: 'description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
      },
      {
        property: 'og:title',
        content: 'Security - Ivan Ryan | Software Engineer',
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
.security-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.security-features {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  flex-direction: column;
}
.security-text {
  color: #ffffff;
  font-size: 3rem;
  margin-bottom: var(--dl-space-space-threeunits);
}
.security-container1 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-twounits);
  grid-template-columns: 1fr 1fr;
}
.security-feature-card {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.security-container2 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.security-text1 {
  color: #ffffff;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}
.security-text2 {
  color: #ffffff;
}
.security-feature-card1 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.security-container3 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.security-text3 {
  color: #ffffff;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}
.security-text4 {
  color: #ffffff;
}
.security-feature-card2 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.security-container4 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.security-text5 {
  color: #ffffff;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}
.security-text6 {
  color: #ffffff;
}
.security-feature-card3 {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.security-container5 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.security-text7 {
  color: #ffffff;
  font-weight: 600;
  margin-bottom: var(--dl-space-space-unit);
}
.security-text8 {
  color: #ffffff;
}
@media(max-width: 1600px) {
  .security-text {
    color: #ffffff;
  }
}
@media(max-width: 767px) {
  .security-features {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .security-container1 {
    grid-template-columns: 1fr;
  }
  .security-feature-card {
    flex-direction: row;
  }
  .security-container2 {
    flex-direction: column;
  }
  .security-feature-card1 {
    flex-direction: row;
  }
  .security-container3 {
    flex-direction: column;
  }
  .security-feature-card2 {
    flex-direction: row;
  }
  .security-container4 {
    flex-direction: column;
  }
  .security-feature-card3 {
    flex-direction: row;
  }
  .security-container5 {
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .security-features {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .security-container2 {
    flex-direction: column;
  }
  .security-container3 {
    flex-direction: column;
  }
  .security-container4 {
    flex-direction: column;
  }
  .security-container5 {
    flex-direction: column;
  }
}
</style>
