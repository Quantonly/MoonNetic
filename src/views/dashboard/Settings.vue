<template>
  <main-layout>
    <div class="settings darkmode-animation mb-auto">
      <section class="darkmode-animation dark:bg-darkmode-medium bg-white py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <div class="w-full lg:w-6/12 px-4 mx-auto text-center">
            <h2 class="darkmode-animation text-5xl font-semibold dark:text-white">Settings</h2>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4 mx-auto">
          <div class="darkmode-animation relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg dark:bg-darkmode-light">
            <div class="flex-auto p-5 lg:p-10">
              <div class="relative w-full mb-3 mt-8">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 darkmode-animation dark:text-white" for="name">Full Name</label><input v-model.trim="$v.displayName.$model" type="text" name="displayName" id="displayName" :class="{ 'border-red-500': $v.displayName.$error }" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                <p v-if="!$v.displayName.required && $v.displayName.$dirty" class="text-red-500 text-xs italic mt-2">Field is required</p>
              </div>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 darkmode-animation dark:text-white" for="email">Email</label><input type="email" name="email" id="email" disabled class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" :value="email">
              </div>
              <div class="text-center mt-6">
                <button @click="editUser()" class="darkmode-animation dark:bg-white dark:text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Save
                </button>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
          <div class="text-center mt-6 mr-10">
            <button class="darkmode-animation bg-red-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Delete Website
            </button>
          </div>
          <div class="text-center mt-6">
            <button class="darkmode-animation bg-red-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Delete Account
            </button>
          </div>
        </div>
        </div>
      </section>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'
import { AuthService } from '../../services/auth.service.js'
import { InfoService } from '../../services/info.service.js'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Settings',
  title: 'Settings',
  components: {
    MainLayout
  },
  validations: {
    displayName: {
      required
    }
  },
  data () {
    return {
      user: null,
      displayName: '',
      email: ''
    }
  },
  mounted () {
    this.$store.dispatch('getUser').then(() => {
      const user = this.$store.getters.user
      this.email = user.email
      this.displayName = user.name
    })
  },
  methods: {
    async editUser () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        await AuthService.editUser({ displayName: this.displayName }).then((response) => {
          this.$emit('refresh')
        })
      }
    },
    async deleteWebsite () {
      await InfoService.deleteWebsite()
    },
    async deleteAccount () {
      await AuthService.deleteUser()
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
