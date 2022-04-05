<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-darkmode-dark shadow">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link to="/home" class="flex items-center">
          <img src="../assets/images/logo.png" class="mr-3 h-6 sm:h-9" />
          <span class="darkmode-animation self-center text-xl font-semibold whitespace-nowrap dark:text-white">MoonNetic</span>
      </router-link>
      <div class="flex items-center md:order-2">
        <ul v-if="!this.$store.getters.accessToken" class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <router-link to="/login" v-if="this.$route.fullPath === '/login'" class="darkmode-animation block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Login</router-link>
            <router-link to="/login" v-if="this.$route.fullPath !== '/login'" class="darkmode-animation block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Login</router-link>
          </li>
          <li>
            <router-link to="/register" v-if="this.$route.fullPath === '/register'" class="darkmode-animation block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Register</router-link>
            <router-link to="/register" v-if="this.$route.fullPath !== '/register'" class="darkmode-animation block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</router-link>
          </li>
        </ul>
        <div v-if="this.$store.getters.accessToken" id="dropdown-area">
          <button @click="toggle" type="button" id="user-menu-button">
            <span class="darkmode-animation text-black dark:text-white"><strong>Profile</strong></span>
            <font-awesome-icon icon="fa-caret-down" class="ml-3 darkmode-animation text-black dark:text-white"></font-awesome-icon>
          </button>
          <div class="darkmode-animation absolute transform -translate-x-14 -translate-y-2 hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-darkmode-light dark:divide-gray-600" id="dropdown">
            <ul class="py-1" aria-labelledby="dropdown">
              <li @click="toggle()">
                <router-link to="/dashboard" class="darkmode-animation block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</router-link>
              </li>
              <li @click="toggle()">
                <router-link to="/dashboard/settings" class="darkmode-animation block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</router-link>
              </li>
              <li @click="toggle()">
                <div class="darkmode-animation block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer" @click="logout()">Sign out</div>
              </li>
            </ul>
            <div class="py-3 px-4">
              <input type="checkbox" id="switch-darkmode" @change="darkmode($event)" :checked="isDark">
              <div class="switch-ui flex">
                <label for="switch-darkmode" class="rounded-full h-8 w-36 relative cursor-pointer">
                  <div class="toggle rounded-full h-8 absolute w-1/2 bg-white"></div>
                  <div class="text-sm mt-1 ml-5 w-28 font-bold absolute flex justify-between select-none">
                    <p class="darkmode-animation light">Light</p>
                    <p class="darkmode-animation dark mr-1 opacity-50">Dark</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
      <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <router-link to="/home" v-if="this.$route.fullPath === '/home'" class="darkmode-animation block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</router-link>
            <router-link to="/home" v-if="this.$route.fullPath !== '/home'" class="darkmode-animation block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link to="/home" v-if="this.$route.fullPath === '/about'" class="darkmode-animation block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">About</router-link>
            <router-link to="/about" v-if="this.$route.fullPath !== '/about'" class="darkmode-animation block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</router-link>
          </li>
          <li>
            <router-link to="/home" v-if="this.$route.fullPath === '/contact'" class="darkmode-animation block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Contact</router-link>
            <router-link to="/contact" v-if="this.$route.fullPath !== '/contact'" class="darkmode-animation block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      isDark: false
    }
  },
  mounted () {
    if (localStorage.theme === 'dark') this.isDark = true
    window.onclick = function (event) {
      if (document.getElementById('dropdown-area')) {
        var trigger = document.getElementById('dropdown-area')
        if (trigger !== event.target && !trigger.contains(event.target)) {
          const targetEl = document.getElementById('dropdown')
          targetEl.classList.add('hidden')
          targetEl.classList.remove('block')
        }
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    },
    toggle () {
      const targetEl = document.getElementById('dropdown')
      targetEl.classList.toggle('hidden')
      targetEl.classList.toggle('block')
    },
    darkmode (e) {
      if (e.target.checked) {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      } else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>

<style scoped>
label {
  background-color: rgba(0,0,0,.1);
}
.toggle {
  box-shadow: 0 2px 15px rgba(0,0,0,.15);
  transition: transform .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
[type="checkbox"] {
  display: none;
}
[type="checkbox"]:checked + .switch-ui .toggle{
  transform: translateX(100%);
  background-color: #18191A;
}
[type="checkbox"]:checked + .switch-ui .dark{
  opacity: 1;
}
[type="checkbox"]:checked + .switch-ui .light{
  opacity: .5;
  color: white;
}
[type="checkbox"]:checked + .switch-ui .dark{
  color: white;
}
</style>
