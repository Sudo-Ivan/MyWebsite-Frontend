<template>
  <div>
    <vue-meta
      :meta="meta"
    />
    <router-view/>
  </div>
</template>

<script>
import VueMeta from 'vue-meta'

export default {
  components: {
    VueMeta,
  },
  data: () => ({
    meta: [
      { property: 'og:title', content: 'Ivan Ryan|Software Engineer' },
      { property: 'og:description', content: 'Building secure, efficient and private software.' },
      { property: 'og:image', content: 'https://cdn.opengraphimage.com/3lzTVyGS9Y9tA10WvHH-NA/?s=1592593d175f10c352fa99c4548304fa' },
    ],
  }),
}
</script>
