<template>
  <main-layout>
    <div class="w-full max-w-sm m-auto">
      <form class="darkmode-animation bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 dark:bg-darkmode-light">
        <p class="darkmode-animation font-bold text-3xl mb-10 text-center dark:text-white">Reset Password?</p>
        <div class="mb-6">
          <label class="darkmode-animation block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="password">
            Password
          </label>
          <input v-model.trim="$v.password.$model" :class="{ 'border-red-500': $v.password.$error }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********">
          <p v-if="!$v.password.required && $v.password.$dirty" class="text-red-500 text-xs italic mt-2">Field is required</p>
          <p v-if="!$v.password.minLength && $v.password.$dirty" class="text-red-500 text-xs italic mt-2">Password must have at least {{ $v.password.$params.minLength.min }} characters</p>
        </div>
        <div class="mb-6">
          <label class="darkmode-animation block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="confirmPassword">
            Confirm Password
          </label>
          <input v-model.trim="$v.confirmPassword.$model" :class="{ 'border-red-500': $v.confirmPassword.$error }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="**********">
          <p v-if="!$v.confirmPassword.sameAsPassword && $v.confirmPassword.$dirty" class="text-red-500 text-xs italic mt-2">Passwords must be identical</p>
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
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  title: 'ResetPassword',
  components: {
    MainLayout
  },
  data () {
    return {
      password: '',
      confirmPassword: ''
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAsPassword: sameAs('password')
    }
  }
}
</script>
