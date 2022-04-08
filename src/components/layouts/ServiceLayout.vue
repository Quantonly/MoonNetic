<template>
  <div class="darkmode-animation flex flex-col max-h-screen h-screen bg-white dark:bg-darkmode-medium overflow-hidden">
    <div id="nav">
      <Navigation class="darkmode-animation h-full"/>
    </div>
    <div class="h-full flex-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navigation from '../Navigation.vue'

export default {
  name: 'ServiceLayout',
  components: {
    Navigation
  }
}
</script>
