<template>
  <div id="app" class="flex flex-col min-h-screen">
    <div id="nav">
      <Navigation class="transition-colors duration-300 h-full"/>
    </div>
    <router-view class="transition-colors duration-300 mb-auto"/>
    <div id="footer">
      <Footer class="transition-colors duration-300 h-full"/>
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
