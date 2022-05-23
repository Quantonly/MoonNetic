<template>
  <main-layout>
    <div class="commands container mx-auto darkmode-animation mb-auto">
      <h1 class="darkmode-animation text-2xl font-medium text-center mt-10 dark:text-white">Commands</h1>
      <div class="mt-10 flex flex-row justify-center gap-8">
        <div class="w-full border-t-4 border-blue-400">
          <div class="darkmode-animation flex flex-col justify-between p-4 bg-white rounded-b-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-darkmode-light dark:border-gray-700">
            <div>
              <div class="flex items-center gap-5 mb-8">
                <h4 class="darkmode-animation dark:text-white font-semibold text-xl">Frequently used commands</h4>
              </div>
              <div class="flex flex-row justify-center gap-8">
                <div class="darkmode-animation flex flex-col bg-gray-200 dark:bg-darkmode-medium rounded-lg w-full">
                  <div class="flex flex-row justify-between">
                    <p class="darkmode-animation dark:text-white py-3 pl-3 font-bold">Storage laravel: <span class="font-normal">Could not be opened in append mode: Permission denied</span></p>
                    <font-awesome-icon @click="sendCommand('storage')" icon="fa-paper-plane" class="darkmode-animation cursor-pointer dark:text-white pr-5 py-4"></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InfoModal
      v-show="isInfo"
      @close="closeModal"
      @refresh="refresh()"
      :text="text"
    />
  </main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'
import InfoModal from '@/components/modals/InfoModal.vue'
import { InfoService } from '../../services/info.service'

export default {
  name: 'Commands',
  data () {
    return {
      text: '',
      isInfo: false
    }
  },
  components: {
    MainLayout,
    InfoModal
  },
  methods: {
    async sendCommand (command) {
      switch (command) {
        case 'storage':
          await InfoService.setStoragePermissions().then((response) => {
            this.text = 'The storage permissions have successfully been updated'
            this.isInfo = true
          })
          break
        default:
          break
      }
    },
    refresh () {
      this.closeModal()
    },
    closeModal () {
      this.isInfo = false
    }
  }
}
</script>
