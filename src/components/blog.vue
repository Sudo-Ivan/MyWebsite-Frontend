<template>
  <section id="blog" class="blog-blog">
    <span class="section-head">{{ Section }}</span>
    <header class="blog-header">
      <h2 class="blog-heading section-heading">{{ Heading }}</h2>
    </header>
    <main class="blog-cards">
      <section class="blog-card">
        <main class="blog-content">
          <header class="blog-header1">
            <h1 class="blog-header2">{{ Header }}</h1>
          </header>
          <p class="blog-description">{{ Description }}</p>
          <div class="blog-button">
            <a
              :href="link_Text"
              target="_blank"
              rel="noreferrer noopener"
              class="blog-link"
            >
              <p class="blog-text">{{ Text }}</p>
            </a>
          </div>
        </main>
      </section>
      <section class="blog-card1">
        <main class="blog-content1">
          <header class="blog-header3">
            <h1 class="blog-header4">{{ Header1 }}</h1>
          </header>
          <p class="blog-description1">{{ Description1 }}</p>
          <div class="blog-button1">
            <a
              :href="link_Text1"
              target="_blank"
              rel="noreferrer noopener"
              class="blog-link1"
            >
              <p class="blog-text1">{{ Text1 }}</p>
            </a>
          </div>
        </main>
      </section>
      <section class="blog-card2">
        <main class="blog-content2">
          <header class="blog-header5">
            <h1 class="blog-header6">{{ Header2 }}</h1>
          </header>
          <p class="blog-description2">{{ Description2 }}</p>
          <div class="blog-button2">
            <a
              :href="link_Text2"
              target="_blank"
              rel="noreferrer noopener"
              class="blog-link2"
            >
              <p class="blog-text2">{{ Text2 }}</p>
            </a>
          </div>
        </main>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    Section: {
      type: String,
      default: 'OH AND ONE MORE THING',
    },
    Heading: {
      type: String,
      default: 'Check out my Blog',
    },
    Description: {
      type: String,
      default:
        'Why pay for a premium email service when you can host your own premium email service for free.',
    },
    Description1: {
      type: String,
      default:
        'In order to protect your servers from common attacks, it is important to understand the basics of server security.',
    },
    Description2: {
      type: String,
      default:
        'Updates, Security patches and Monitoring. Not all tasks should be automated. Learn the proper way',
    },
    Header: {
      type: String,
      default: 'How to host your own secure email server.',
    },
    Text: {
      type: String,
      default: 'Read ->',
    },
    link_Text: {
      type: String,
      default: 'https://blog.ivanryan.dev',
    },
    Header1: {
      type: String,
      default: 'The Basics of Server Security',
    },
    Text1: {
      type: String,
      default: 'Read ->',
    },
    link_Text1: {
      type: String,
      default: 'https://blog.ivanryan.dev',
    },
    Header2: {
      type: String,
      default: 'How to maintain your email server.',
    },
    Text2: {
      type: String,
      default: 'Read ->',
    },
    link_Text2: {
      type: String,
      default: 'https://blog.ivanryan.dev',
    },
  },
}
</script>

<style scoped>
.blog-blog {
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
.blog-header {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.blog-heading {
  text-align: center;
}
.blog-cards {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.blog-card {
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
.blog-content {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.blog-header1 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.blog-header2 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.blog-description {
  color: #ffffff;
  font-family: Poppins;
  line-height: 28px;
}
.blog-button {
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
.blog-button:hover {
  opacity: 0.5;
}
.blog-link {
  display: contents;
}
.blog-text {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.blog-card1 {
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
.blog-content1 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.blog-header3 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.blog-header4 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.blog-description1 {
  color: #ffffff;
  font-family: Poppins;
  line-height: 28px;
}
.blog-button1 {
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
.blog-button1:hover {
  opacity: 0.5;
}
.blog-link1 {
  display: contents;
}
.blog-text1 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
.blog-card2 {
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
.blog-content2 {
  gap: var(--dl-space-space-twounits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.blog-header5 {
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.blog-header6 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.blog-description2 {
  color: #ffffff;
  font-family: Poppins;
  line-height: 28px;
}
.blog-button2 {
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
.blog-button2:hover {
  opacity: 0.5;
}
.blog-link2 {
  display: contents;
}
.blog-text2 {
  color: #80FF44;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .blog-header4 {
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
    line-height: 36px;
  }
  .blog-description1 {
    color: rgb(194, 198, 204);
  }
  .blog-description2 {
    color: rgb(194, 198, 204);
    font-family: Poppins;
    line-height: 28px;
  }
}
@media(max-width: 991px) {
  .blog-cards {
    gap: var(--dl-space-space-halfunit);
  }
  .blog-card {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .blog-description {
    color: #ffffff;
  }
  .blog-card1 {
    height: auto;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .blog-description1 {
    color: #ffffff;
  }
  .blog-card2 {
    height: auto;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .blog-description2 {
    color: #ffffff;
    font-family: Poppins;
    line-height: 28px;
  }
}
@media(max-width: 767px) {
  .blog-cards {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
  }
}
</style>
