<template>
  <main-layout>
    <div class="dashboard container mx-auto darkmode-animation mb-auto">
      <div v-if="websites && typeof (websites.websites) !== 'undefined' && websites.websites.length > 0" class="w-max mt-10 mx-auto">
        <div class="darkmode-animation flex flex-col justify-between bg-white rounded-b-lg shadow-md dark:bg-darkmode-light">
          <div class="w-full lg:flex justify-center">
            <div class="darkmode-animation rounded-bl-lg  flex h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden bg-gray-200 dark:bg-darkmode-dark">
              <font-awesome-icon icon="fa-globe" size="7x" class="m-auto darkmode-animation dark:text-white"></font-awesome-icon>
            </div>
            <div class="darkmode-animation dark:bg-darkmode-light rounded-b-lg bg-white p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <div class="darkmode-animation dark:text-white text-black font-bold text-xl mb-2">Your website is running successfully</div>
                <p class="darkmode-animation dark:text-white text-grey-darker text-base">Surf to <a class="underline" :href="'https://' + websites.websites[0].sub_domain + '.moonnetic.com'" target="_blank">{{ websites.websites[0].sub_domain }}.moonnetic.com</a> to view your website in production.</p>
              </div>
              <div class="flex items-center">
                <img class="w-10 h-10 mr-4" src="../../assets/images/logo.png" alt="Avatar of Jonathan Reinink">
                <div class="text-sm">
                  <p class="darkmode-animation dark:text-white text-black leading-none">MoonNetic Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="websites && typeof (websites.websites) !== 'undefined' && websites.websites.length === 0" class="w-max mt-10 mx-auto">
        <div class="darkmode-animation flex flex-col justify-between bg-white rounded-b-lg shadow-md dark:bg-darkmode-light">
          <div class="w-full lg:flex justify-center">
            <div class="darkmode-animation rounded-bl-lg  flex h-48 lg:h-auto lg:w-48 flex-none bg-cover text-center overflow-hidden bg-gray-200 dark:bg-darkmode-dark">
              <font-awesome-icon icon="fa-globe" size="7x" class="m-auto darkmode-animation dark:text-white"></font-awesome-icon>
            </div>
            <div class="darkmode-animation dark:bg-darkmode-light rounded-b-lg bg-white p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <div class="darkmode-animation dark:text-white text-black font-bold text-xl mb-2">It seems like you haven't setup your free website.</div>
                <p class="darkmode-animation dark:text-white text-grey-darker text-base">Follow the instruction beneath to setup your first PHP based website.</p>
              </div>
              <button @click="isCreatingWebsite = !isCreatingWebsite" type="button" class="w-max text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Setup your website</button>
              <div class="flex items-center">
                <img class="w-10 h-10 mr-4" src="../../assets/images/logo.png" alt="Avatar of Jonathan Reinink">
                <div class="text-sm">
                  <p class="darkmode-animation dark:text-white text-black leading-none">MoonNetic Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="websites && typeof (websites.websites) !== 'undefined' && websites.websites.length > 0">
        <h1 class="darkmode-animation text-2xl font-medium text-center mt-10 dark:text-white">Files & Security</h1>
        <div class="mt-10 flex flex-row justify-center gap-8">
          <div class="w-80 border-t-4 border-yellow-400">
            <div class="darkmode-animation flex flex-col justify-between h-80 p-4 max-w-sm bg-white rounded-b-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-darkmode-light dark:border-gray-700">
              <div>
                <div class="flex items-center gap-5 mb-8">
                  <font-awesome-icon icon="fa-folder" size="xl" class="text-yellow-400"></font-awesome-icon>
                  <h4 class="darkmode-animation dark:text-white font-semibold">File Manager</h4>
                </div>
                <div class="flex flex-col">
                  <p class="text-gray-500">Use our file editor to upload, edit or remove all your files in the same place</p>
                </div>
              </div>
              <router-link to="/dashboard/file-manager" class="w-max rounded-lg">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">File Manager</button>
              </router-link>
            </div>
          </div>
          <div class="w-80 border-t-4 border-blue-400">
            <div class="darkmode-animation flex flex-col justify-between h-80 p-4 max-w-sm bg-white rounded-b-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-darkmode-light dark:border-gray-700">
              <div>
                <div class="flex items-center gap-5 mb-8">
                  <font-awesome-icon icon="fa-terminal" size="xl" class="text-blue-400"></font-awesome-icon>
                  <h4 class="darkmode-animation dark:text-white font-semibold">Commands</h4>
                </div>
                <div class="flex flex-col">
                  <p class="text-gray-500">Use our frequently used commands to make sure everything is up and running</p>
                </div>
              </div>
              <router-link to="/dashboard/commands" class="w-max rounded-lg">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Commands</button>
              </router-link>
            </div>
          </div>
        </div>
        <h1 class="darkmode-animation dark:text-white text-2xl font-medium text-center mt-10">Advanced settings</h1>
        <div class="my-10 flex flex-row justify-center gap-8 flex-wrap">
          <div class="w-80 border-t-4 border-purple-400">
            <div class="darkmode-animation flex flex-col justify-between h-80 p-4 max-w-sm bg-white rounded-b-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-darkmode-light dark:border-gray-700">
              <div>
                <div class="flex items-center gap-5 mb-8">
                  <font-awesome-icon icon="fa-database" size="xl" class="text-purple-400"></font-awesome-icon>
                  <h4 class="darkmode-animation dark:text-white font-semibold">PHP and database settings</h4>
                </div>
                <div class="flex flex-col">
                  <p class="text-gray-500">Here you can update your PHP version and find your phpmyadmin credentials</p>
                </div>
              </div>
              <router-link to="/dashboard/database" class="w-max rounded-lg">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">PHP and database settings</button>
              </router-link>
            </div>
          </div>
          <div class="w-80 border-t-4 border-green-400">
            <div class="darkmode-animation flex flex-col justify-between h-80 p-4 max-w-sm bg-white rounded-b-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-darkmode-light dark:border-gray-700">
              <div>
                <div class="flex items-center gap-5 mb-8">
                  <font-awesome-icon icon="fa-arrow-right-arrow-left" size="xl" class="text-green-400"></font-awesome-icon>
                  <h4 class="darkmode-animation dark:text-white font-semibold">SFTP</h4>
                </div>
                <div class="flex flex-col">
                  <p class="text-gray-500">Here you can find your SFTP connection credentials</p>
                </div>
              </div>
              <router-link to="/dashboard/sftp" class="w-max rounded-lg">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SFTP</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateWebsiteModal
      v-show="isCreatingWebsite"
      @close="closeModal"
      @refresh="refresh()"
    />
  </main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'
import CreateWebsiteModal from '@/components/modals/CreateWebsiteModal.vue'

export default {
  name: 'Dashboard',
  title: 'Dashboard',
  data () {
    return {
      websites: null,
      isCreatingWebsite: false
    }
  },
  components: {
    MainLayout,
    CreateWebsiteModal
  },
  mounted () {
    if (typeof (this.$store.getters.websites) !== 'undefined') {
      this.websites = this.$store.getters.websites
    }
    this.$store.dispatch('getWebsites').then(() => {
      this.websites = this.$store.getters.websites
    })
  },
  methods: {
    refresh () {
      this.closeModal()
      this.$store.dispatch('getWebsites').then(() => {
        this.websites = this.$store.getters.websites
      })
    },
    closeModal () {
      this.isCreatingWebsite = false
    }
  }
}
</script>
