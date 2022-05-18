<template>
  <main-layout>
    <div class="sftpinfo container mx-auto darkmode-animation mb-auto">
      <h1 class="darkmode-animation text-2xl font-medium text-center mt-10 dark:text-white">SFTP</h1>
      <div class="mt-10 flex flex-row justify-center gap-8">
        <div class="w-full border-t-4 border-green-400">
          <div class="darkmode-animation flex flex-col justify-between p-4 bg-white rounded-b-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-darkmode-light dark:border-gray-700">
            <div>
              <div class="flex items-center gap-5 mb-8">
                <h4 class="darkmode-animation dark:text-white font-semibold text-xl">SFTP Administration</h4>
              </div>
              <div class="flex flex-row justify-center gap-8">
                <div class="darkmode-animation flex flex-col bg-gray-200 dark:bg-darkmode-medium rounded-lg w-full">
                  <p class="darkmode-animation dark:text-white py-3 pl-3 font-bold">Host: <span class="font-normal">{{ info.sftp_host }}</span></p>
                </div>
              </div>
              <div class="flex flex-row justify-center gap-8 mt-8">
                <div class="darkmode-animation flex flex-col bg-gray-200 dark:bg-darkmode-medium rounded-lg w-full">
                  <p class="darkmode-animation dark:text-white py-3 pl-3 font-bold">Port</p>
                  <p class="darkmode-animation dark:text-white py-3 pl-3">{{ info.sftp_port }}</p>
                </div>
                <div class="darkmode-animation flex flex-col bg-gray-200 dark:bg-darkmode-medium rounded-lg w-full">
                  <p class="darkmode-animation dark:text-white py-3 pl-3 font-bold">User</p>
                  <p class="darkmode-animation dark:text-white py-3 pl-3">{{ info.sftp_username }}</p>
                </div>
                <div class="darkmode-animation flex flex-col bg-gray-200 dark:bg-darkmode-medium rounded-lg w-full">
                  <p class="darkmode-animation dark:text-white py-3 pl-3 font-bold">Password</p>
                  <div class="flex flex-row justify-between">
                    <p v-if="!passwordVisible" class="darkmode-animation dark:text-white py-3 pl-3">**********</p>
                    <p v-if="passwordVisible" class="darkmode-animation dark:text-white py-3 pl-3">{{ info.sftp_password }}</p>
                    <font-awesome-icon @click="passwordVisible = !passwordVisible" v-if="!passwordVisible" icon="fa-eye" class="darkmode-animation cursor-pointer dark:text-white pr-3 py-3"></font-awesome-icon>
                    <font-awesome-icon @click="passwordVisible = !passwordVisible" v-if="passwordVisible" icon="fa-eye-slash" class="darkmode-animation cursor-pointer dark:text-white pr-3 py-3"></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'

export default {
  name: 'SFTPInfo',
  data () {
    return {
      info: [],
      passwordVisible: false
    }
  },
  components: {
    MainLayout
  },
  mounted () {
    if (typeof (this.$store.getters.sftp) !== 'undefined') {
      this.info = this.$store.getters.sftp
    }
    this.$store.dispatch('getSFTP').then(() => {
      this.info = this.$store.getters.sftp
    })
  }
}
</script>
