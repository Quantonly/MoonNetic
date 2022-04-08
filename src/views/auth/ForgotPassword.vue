<template>
  <main-layout>
    <div class="w-full max-w-sm m-auto">
      <form class="darkmode-animation bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 dark:bg-darkmode-light">
        <p class="darkmode-animation font-bold text-3xl mb-10 text-center dark:text-white">Forgot Password?</p>
        <div class="mb-4">
          <label class="darkmode-animation block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="email">
            Email
          </label>
          <input v-model.trim="$v.email.$model" :class="{ 'border-red-500': $v.email.$error }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
          <p v-if="!$v.email.required && $v.email.$dirty" class="text-red-500 text-xs italic mt-2">Field is required</p>
          <p v-if="!$v.email.email && $v.email.$dirty" class="text-red-500 text-xs italic mt-2">This is not a valid Email</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
          <router-link to="/login" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Login
          </router-link>
        </div>
      </form>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'
import { required, email } from 'vuelidate/lib/validators'

export default {
  title: 'ForgotPassword',
  components: {
    MainLayout
  },
  data () {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>
