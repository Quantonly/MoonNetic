<template>
  <main-layout>
    <div class="w-full max-w-sm m-auto">
      <form class="darkmode-animation bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 dark:bg-darkmode-light">
        <p class="darkmode-animation font-bold text-3xl mb-10 text-center dark:text-white">Login</p>
        <div v-if="error" class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-5" role="alert">
          <p class="font-bold">Login failed</p>
          <p>{{ error }}</p>
        </div>
        <div class="mb-4">
          <label class="darkmode-animation block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="email">
            Email
          </label>
          <input v-model.trim="$v.email.$model" :class="{ 'border-red-500': $v.email.$error }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
          <p v-if="!$v.email.required && $v.email.$dirty" class="text-red-500 text-xs italic mt-2">Field is required</p>
          <p v-if="!$v.email.email && $v.email.$dirty" class="text-red-500 text-xs italic mt-2">This is not a valid Email</p>
        </div>
        <div class="mb-6">
          <label class="darkmode-animation block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="password">
            Password
          </label>
          <input v-on:keyup.enter="login" v-model.trim="$v.password.$model" :class="{ 'border-red-500': $v.password.$error }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********">
          <p v-if="!$v.password.required && $v.password.$dirty" class="text-red-500 text-xs italic mt-2">Field is required</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="login()">
            Sign In
          </button>
          <router-link to="/forgot-password" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </router-link>
        </div>
        <hr class="mt-5">
        <p class="darkmode-animation dark:text-white mt-5 text-center">
          Don't have an account?
          <router-link to="/register" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Register
          </router-link>
        </p>
      </form>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'
import { required, email } from 'vuelidate/lib/validators'

export default {
  title: 'Login',
  components: {
    MainLayout
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    login () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const email = this.email
        const password = this.password
        this.$store
          .dispatch('login', { email, password })
          .then(() => this.$router.push('/dashboard'))
          .catch(() => {
            this.setError('Combination is incorrect')
            this.password = ''
          })
      }
    },
    setError (data) {
      this.error = data
    }
  }
}
</script>
