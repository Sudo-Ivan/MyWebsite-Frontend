<template>
  <div class="privacy-policy-container">
    <app-navbar rootClassName="navbar-root-class-name10"></app-navbar>
    <h1 class="privacy-policy-text">
      <span>Privacy Policy</span>
      <br />
    </h1>
    <span class="privacy-policy-text03">
      <span class="privacy-policy-text04">Updated as of Dec 23 2022</span>
      <br />
      <br />
      <span>
        I am committed to protecting the privacy and security of our visitors. I
        understand the importance of privacy and strive to ensure that any
        personal information you provide to me is kept confidential and secure.
      </span>
      <br />
      <br />
      <span class="privacy-policy-text10">Information I Collect</span>
      <br />
      <br />
      <span>
        I do not collect any personal information from you when you visit our
        website.
      </span>
      <br />
      <br />
      <span class="privacy-policy-text16">Cookies</span>
      <br />
      <br />
      <span>
        In the interest of protecting your privacy, I do not use cookies on our
        website.
      </span>
      <br />
      <br />
      <span class="privacy-policy-text22">Sharing Your Information</span>
      <br />
      <br />
      <span>
        I am committed to keeping your personal information private and do not
        share it with third parties.
      </span>
      <br />
      <br />
      <span class="privacy-policy-text28">Your Choices</span>
      <br />
      <br />
      <span>
        You have the option to visit our website without providing any personal
        information.
      </span>
      <br />
      <br />
      <span class="privacy-policy-text34">Privacy and Security Measures</span>
      <br />
      <br />
      <span>
        I take the protection of your personal information seriously and have
        implemented various security measures to ensure its confidentiality.
      </span>
      <br />
      <br />
      <span class="privacy-policy-text40">Changes to Our Privacy Policy</span>
      <br />
      <br />
      <span>
        I may update our privacy policy from time to time to reflect any changes
        in our practices or to comply with legal requirements. I encourage you to
        review the privacy policy regularly to stay informed about our information
        practices and the choices available to you.
      </span>
      <br />
      <br />
      <span class="privacy-policy-text46">Contact me</span>
      <br />
      <br />
      <span>
        If you have any questions or concerns about our privacy policy, please do
        not hesitate to contact me at
        <span v-html="raw4eya"></span>
      </span>
      <span class="privacy-policy-text50">ivan@ivanryan.dev</span>
      <span>
        . As a privacy and security enthusiast, I am always happy to discuss these
        important topics with our visitors.
        <span v-html="rawnjvd"></span>
      </span>
    </span>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'

export default {
  name: 'PrivacyPolicy',
  components: {
    AppNavbar,
  },

  data() {
    return {
      raw4eya: ' ',
      rawnjvd: ' ',
    }
  },

  metaInfo: {
    title: 'PrivacyPolicy - Ivan Ryan | Software Engineer',
    meta: [
      {
        name: 'description',
        content:
          'I am a freelance software engineer and current founder and CEO of Voltaic hosting. My main interests are web development, operating systems and productivity tools. This is my personal website which showcases a collection of projects that I have worked on over the years.',
      },
      {
        property: 'og:title',
        content: 'PrivacyPolicy - Ivan Ryan | Software Engineer',
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
.privacy-policy-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.privacy-policy-text {
  color: #ffffff;
}
.privacy-policy-text03 {
  color: #ffffff;
  width: 50%;
}
@media(max-width: 1600px) {
  .privacy-policy-text {
    color: rgb(255, 255, 255);
  }
  .privacy-policy-text03 {
    color: rgb(255, 255, 255);
    width: 70%;
    font-size: 20px;
    text-align: left;
    padding-top: var(--dl-space-space-fourunits);
  }
  .privacy-policy-text04 {
    font-weight: 700;
  }
  .privacy-policy-text10 {
    font-weight: 700;
  }
  .privacy-policy-text16 {
    font-weight: 700;
  }
  .privacy-policy-text22 {
    font-weight: 700;
  }
  .privacy-policy-text28 {
    font-weight: 700;
  }
  .privacy-policy-text34 {
    font-weight: 700;
  }
  .privacy-policy-text40 {
    font-weight: 700;
  }
  .privacy-policy-text46 {
    font-weight: 700;
  }
  .privacy-policy-text50 {
    font-weight: 700;
  }
}
</style>
