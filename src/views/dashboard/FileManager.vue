<template>
  <service-layout>
    <div class="file-manager h-full flex flex-row">
      <div class="flex flex-col darkmode-animation dark:bg-darkmode-medium w-80 flex-shrink-0 flex-none">
        <div class="my-2 ml-2 flex flex-row divide-x-1">
          <div class="flex flex-row items-center text-white cursor-pointer bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-min">
            <font-awesome-icon icon="fa-plus" class="mr-2"></font-awesome-icon>
            <p>Upload</p>
          </div>
          <div id="create-dropdown-area" @click="toggleCreate" class="text-white cursor-pointer bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-3 py-1.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-min">
            <font-awesome-icon icon="fa-angle-down"></font-awesome-icon>
            <div class="w-32 darkmode-animation absolute transform -translate-x-28 -translate-y-2 border-1 dark:border-opacity-0 hidden z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-darkmode-light dark:divide-gray-600" id="create-dropdown">
              <ul class="py-1" aria-labelledby="dropdown">
                <li @click="toggleCreate()">
                  <div class="darkmode-animation block py-1 px-4 text-sm text-gray-400 font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white text-left">New folder</div>
                </li>
                <li @click="toggleCreate()">
                  <div class="darkmode-animation block py-1 px-4 text-sm text-gray-400 font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white text-left">New HTML file</div>
                </li>
                <li @click="toggleCreate()">
                  <div class="darkmode-animation block py-1 px-4 text-sm text-gray-400 font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white text-left">New text file</div>
                </li>
                <li @click="toggleCreate()">
                  <div class="darkmode-animation block py-1 px-4 text-sm text-gray-400 font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white text-left">New other file</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="divide-y divide-dashed">
          <li class="hover:bg-blue-50 px-5 dark:hover:bg-darkmode-light">
            <div class="flex flex-row items-center cursor-pointer py-4">
              <font-awesome-icon icon="fa-arrow-up-short-wide" size="xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
              <div class="w-full">
                <p class="text-sm darkmode-animation dark:text-white">Up one directory</p>
              </div>
            </div>
          </li>
          <li></li>
        </ul>
        <div class="flex-auto overflow-y-auto mb-14">
          <ul class="divide-y divide-dashed">
            <li class="hover:bg-blue-50 px-5 dark:hover:bg-darkmode-light">
              <div class="flex flex-row items-center cursor-pointer py-2">
                <input type="checkbox" class="mr-4 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer">
                <font-awesome-icon icon="fa-folder" size="xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
                <div class="w-full">
                  <p class="darkmode-animation dark:text-white">application</p>
                  <p class="darkmode-animation dark:text-white text-xs text-gray-600">19-04-1999</p>
                </div>
                <div class="text-right">
                  <font-awesome-icon icon="fa-angle-right" size="md" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
                </div>
              </div>
            </li>
            <li class="hover:bg-blue-50 px-5 dark:hover:bg-darkmode-light">
              <div class="flex flex-row items-center cursor-pointer py-2">
                <input type="checkbox" class="mr-4 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer">
                <font-awesome-icon icon="fa-file-code" size="xl" class="darkmode-animation dark:text-white text-gray-400 mr-5"></font-awesome-icon>
                <div class="w-full">
                  <p class="darkmode-animation dark:text-white ">.htaccess</p>
                  <p class="darkmode-animation dark:text-white text-xs text-gray-600">24-08-2008</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="darkmode-animation w-full pb-14 bg-editor-light dark:bg-editor-dark">
        <CodeEditor width="100%" height="100%" border_radius="0px" :theme="[ isDark ? 'dark' : 'light' ]" class="darkmode-animation"></CodeEditor>
      </div>
    </div>
  </service-layout>
</template>

<script>
import ServiceLayout from '@/components/layouts/ServiceLayout.vue'
import CodeEditor from 'simple-code-editor'

export default {
  name: 'FileManager',
  data () {
    return {
      isDark: false
    }
  },
  components: {
    ServiceLayout,
    CodeEditor
  },
  mounted () {
    if (localStorage.theme === 'dark') this.isDark = true
  },
  methods: {
    toggleCreate () {
      const targetEl = document.getElementById('create-dropdown')
      targetEl.classList.toggle('hidden')
      targetEl.classList.toggle('block')
    }
  },
  watch: {
    '$store.state.theme.theme' (newValue) {
      if (newValue === 'dark') this.isDark = true
      else this.isDark = false
    }
  }
}
</script>
<style>
code {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
</style>
<style scoped>
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d;
}
.box__dragndrop,
.box__uploading,
.box__success,
.box__error {
  display: none;
}
</style>
