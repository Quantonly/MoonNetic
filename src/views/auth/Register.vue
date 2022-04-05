<template>
  <div class="w-full max-w-sm m-auto">
    <form class="darkmode-animation bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 dark:bg-darkmode-light">
      <p class="darkmode-animation font-bold text-3xl mb-10 text-center dark:text-white">Register</p>
      <div class="mb-4">
        <label class="darkmode-animation block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="firstName">
          First Name
        </label>
        <input v-model.trim="$v.firstName.$model" :class="{ 'border-red-500': $v.firstName.$error }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name">
        <p v-if="!$v.firstName.required && $v.firstName.$dirty" class="text-red-500 text-xs italic mt-2">Field is required</p>
      </div>
      <div class="mb-4">
        <label class="darkmode-animation block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="lastName">
          Last Name
        </label>
        <input v-model.trim="$v.lastName.$model" :class="{ 'border-red-500': $v.lastName.$error }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name">
        <p v-if="!$v.lastName.required && $v.lastName.$dirty" class="text-red-500 text-xs italic mt-2">Field is required</p>
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
          Sign Up
        </button>
        <router-link to="/login" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
          Login
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  title: 'Register',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    email: {
      required,
      email
    },
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
