<template>
  <div class="dashboard">
    <button v-on:click="darkmode">Toggle darkmode</button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
  },
  methods: {
    darkmode () {
      if (localStorage.theme === 'dark') localStorage.theme = 'light'
      else localStorage.theme = 'dark'
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>
