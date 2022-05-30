<template>
  <div class="bg-opacity-60 bg-black justify-center flex items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-xl h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
            Delete
          </h3>
          <button @click="close()" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Are you sure you want to delete {{text}}?
          </p>
        </div>
        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button @click="deleteFunc()" type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
          <button @click="close()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FileService } from '../../services/file.service.js'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'DeleteAccountModal',
  props: ['text'],
  methods: {
    async deleteFunc () {
      //await FileService.deleteFiles({ fileNames: this.fileNames }).then((response) => {
      //  this.$emit('refresh')
      //})
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>
