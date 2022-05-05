<template>
  <div class="bg-opacity-60 bg-black justify-center flex items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-xl h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
            Rename
          </h3>
          <button @click="close()" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="p-6 space-y-6">
          <input v-model.trim="$v.newFileName.$model" type="text" id="newFileName" :class="{ 'border-red-500': $v.newFileName.$error }" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <p v-if="!$v.newFileName.required && $v.newFileName.$dirty" class="text-red-500 text-xs italic mt-2">Field is required</p>
        </div>
        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
          <button @click="rename()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Rename</button>
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
  name: 'RenameModal',
  props: ['fileName'],
  data () {
    return {
      oldFileName: '',
      newFileName: ''
    }
  },
  validations: {
    newFileName: {
      required
    }
  },
  methods: {
    async rename () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        await FileService.renameFile({ oldFileName: this.oldFileName, newFileName: this.newFileName }).then((response) => {
          this.$emit('refresh', this.newFileName)
        })
      }
    },
    close () {
      this.$emit('close')
    }
  },
  watch: {
    'fileName' (newValue) {
      this.oldFileName = newValue
      this.newFileName = newValue
    }
  }
}
</script>
