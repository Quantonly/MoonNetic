<template>
  <auth-layout>
    <p class="block font-bold mb-4 pr-20">Log in met uw eerder aangemaakt account</p>
    <form class="w-full">
      <div>
        <label class="block text-sm font-bold mb-2" for="email">
          Uw emailadres
        </label>
        <input class="border rounded w-full py-2 px-3 leading-tight text-black bg-gray-100" :class="[error && !email ? 'border-primary' : '']" id="email" type="email" placeholder="Emailadres" v-model="email" required>
      </div>
      <div class="mt-4">
        <div class="flex">
          <label class="flex-auto block text-sm font-bold mb-2" for="password">
            Uw wachtwoord
          </label>
          <router-link to="/forgot-password"><p class="flex-none text-sm text-right cursor-pointer">Wachtwoord vergeten?</p></router-link>
        </div>
        <input class="border rounded w-full py-2 px-3 mb-3 leading-tight text-black bg-gray-100" :class="[error ? 'border-primary' : '']" id="password" type="password" placeholder="Wachtwoord" v-model="password" @keyup.enter="login()" required>
        <div v-if="error" class="bg-secondary h-10 -mt-4 rounded-b-md">
          <p class="text-sm text-white pt-3 pl-4">Lukt het niet met inloggen? <a class="underline cursor-pointer">Klik hier voor assistentie</a></p>
        </div>
        <p v-if="error" class="text-primary text-sm font-semibold">{{ error }}</p>
      </div>
      <div class="rounded-lg text-white px-4 py-3 text-sm cursor-pointer bg-primary w-40 text-center mt-4" @click="login()">
        Log in
      </div>
    </form>
  </auth-layout>
</template>

<script>
import AuthLayout from '@/components/layouts/Auth'

export default {
  title: 'Login',
  components: {
    AuthLayout
  },
  data () {
    return {
      email: null,
      password: null,
      error: null
    }
  },
  methods: {
    login () {
      const email = this.email
      const password = this.password
      if (!email || !password) return this.setError('Niet alles is juist ingevuld')
      this.$store
        .dispatch('login', { email, password })
        .then(() => this.$router.push('/dashboard'))
        .catch(() => this.setError('Uw ingegeven wachtwoord blijkt niet juist te zijn'))
    },
    setError (data) {
      this.error = data
    }
  }
}
</script>
