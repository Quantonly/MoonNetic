<template>
  <auth-layout :links="false">
    <div class="p-4 flex flex-col items-center">
      <h2 class="text-3xl mb-4">403</h2>
      <p class="text-md mb-4 text-gray-600 text-center">Je bent niet gemachtigd om deze actie uit te voeren.</p>
      <router-link class="rounded-lg text-white px-4 py-3 text-sm cursor-pointer bg-primary w-40 text-center mt-4" :to="url">
        Ga terug
      </router-link>
    </div>
  </auth-layout>
</template>

<script>
import store from '@/store/index.js'
import AuthLayout from '@/components/layouts/Auth'

export default {
  components: {
    AuthLayout
  },
  computed: {
    url () {
      if (store.getters.user) {
        return '/dashboard'
      } else {
        return '/login'
      }
    }
  }
}
</script>
