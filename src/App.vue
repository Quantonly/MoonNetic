<template>
  <div id="app" class="darkmode-animation flex flex-col min-h-screen bg-white dark:bg-darkmode-medium">
    <div id="nav">
      <Navigation class="darkmode-animation h-full"/>
    </div>
    <router-view class="darkmode-animation mb-auto"/>
    <div id="footer">
      <Footer class="darkmode-animation h-full"/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>
