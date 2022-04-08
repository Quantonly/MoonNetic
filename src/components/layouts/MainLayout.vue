<template>
  <div class="darkmode-animation flex flex-col min-h-screen bg-white dark:bg-darkmode-medium">
    <div id="nav">
      <Navigation class="darkmode-animation h-full"/>
    </div>
    <slot></slot>
    <div id="footer">
      <Footer class="darkmode-animation h-full"/>
    </div>
  </div>
</template>

<script>
import Navigation from '../Navigation.vue'
import Footer from '../Footer.vue'

export default {
  name: 'MainLayout',
  components: {
    Navigation,
    Footer
  }
}
</script>
