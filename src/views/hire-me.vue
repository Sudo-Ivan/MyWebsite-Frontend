<template>
  <div class="hire-me-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'

export default {
  name: 'HireMe',
  components: {
    AppNavbar,
  },
  metaInfo: {
    title: 'Hire-me - Planical modern template',
    meta: [
      {
        property: 'og:title',
        content: 'Hire-me - Planical modern template',
      },
    ],
  },
}
</script>

<style scoped>
.hire-me-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
}
</style>
