<template>
  <service-layout>
    <div class="file-manager h-full flex flex-row">
      <div class="flex flex-col w-80 flex-shrink-0 flex-none">
        <div class="darkmode-animation py-3 pl-3 flex flex-row h-14 bg-gray-100 dark:bg-darkmode-medium border-b-1 dark:border-darkmode-light">
          <form enctype="multipart/form-data">
          <input type="file" name="file" id="file" ref="file" class="hidden" accept=".zip" @change="handleFileUpload()">
          <label for="file" class="select-none flex flex-row items-center border-r-1 text-white cursor-pointer bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-min">
              <font-awesome-icon icon="fa-plus" class="mr-2"></font-awesome-icon>
              <p>Upload</p>
          </label>
          </form>
          <div id="create-dropdown-area" @click="toggleCreate" class="select-none text-white cursor-pointer bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-3 py-1.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-min">
            <font-awesome-icon icon="fa-angle-down"></font-awesome-icon>
            <div class="w-32 darkmode-animation absolute transform -translate-x-28 -translate-y-2 border-1 dark:border-opacity-0 hidden z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-darkmode-light dark:divide-gray-600" id="create-dropdown">
              <ul class="py-1" aria-labelledby="dropdown">
                <li @click="create('New Folder', true)">
                  <div class="darkmode-animation block py-1 px-4 text-sm text-gray-400 font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white text-left">New folder</div>
                </li>
                <li @click="create('New File.php')">
                  <div class="darkmode-animation block py-1 px-4 text-sm text-gray-400 font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white text-left">New PHP file</div>
                </li>
                <li @click="create('New File.js')">
                  <div class="darkmode-animation block py-1 px-4 text-sm text-gray-400 font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white text-left">New JS file</div>
                </li>
                <li @click="create('New File')">
                  <div class="darkmode-animation block py-1 px-4 text-sm text-gray-400 font-normal hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white text-left">New other file</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul>
          <li class="hover:bg-blue-50 dark:hover:bg-darkmode-light select-none">
            <div @click="previousFolder()" class="flex flex-row items-center cursor-pointer py-4 px-5">
              <font-awesome-icon icon="fa-arrow-up-short-wide" size="xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
              <div class="w-full">
                <p class="text-sm darkmode-animation dark:text-white">Up one directory</p>
              </div>
            </div>
          </li>
          <li></li>
        </ul>
        <div class="flex-auto overflow-y-auto mb-14 select-none overflow-x-hidden">
          <ul>
            <li v-for="directory in directories" :key="directory" class="darkmode-animation hover:bg-blue-50 dark:hover:bg-darkmode-light border-t-1 border-dashed dark:border-darkmode-light">
              <div class="flex flex-row items-center">
                <input type="checkbox" :checked="isSelected(directory)" @change="changeSelectedItems(directory)" class="ml-5 mr-4 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer">
                <div class="pr-5 flex-auto flex flex-row items-center cursor-pointer py-2" @click="changeFolder(directory.split('/')[directory.split('/').length - 1])">
                  <font-awesome-icon icon="fa-folder" size="xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
                  <div class="w-full">
                    <p v-if="directory.split('/')[directory.split('/').length - 1].length > 24" class="darkmode-animation dark:text-white">{{ directory.split('/')[directory.split('/').length - 1].substring(0, 24) }}...</p>
                    <p v-else class="darkmode-animation dark:text-white">{{ directory.split('/')[directory.split('/').length - 1] }}</p>
                    <p class="darkmode-animation dark:text-white text-xs text-gray-600">{{ nextFolderItems(directory) }} items</p>
                  </div>
                  <div class="text-right">
                    <font-awesome-icon icon="fa-angle-right" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
                  </div>
                </div>
              </div>
            </li>
            <li v-for="file in files" :key="file" class="darkmode-animation hover:bg-blue-50 dark:hover:bg-darkmode-light border-t-1 border-dashed dark:border-darkmode-light">
              <div class="flex flex-row items-center">
                <input type="checkbox" :checked="isSelected(file)" @change="changeSelectedItems(file)" class="ml-5 mr-4 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer">
                <div class="pr-5 flex-auto flex flex-row items-center cursor-pointer py-2" @click="readFile(file)">
                  <font-awesome-icon icon="fa-file-code" size="xl" class="darkmode-animation dark:text-white text-gray-400 mr-5"></font-awesome-icon>
                  <div class="w-full">
                    <p v-if="file.split('/')[file.split('/').length - 1].length > 24" class="darkmode-animation dark:text-white ">{{ file.split('/')[file.split('/').length - 1].substring(0, 24) }}...</p>
                    <p v-else class="darkmode-animation dark:text-white ">{{ file.split('/')[file.split('/').length - 1] }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="select-none darkmode-animation w-full pb-28 bg-editor-light dark:bg-editor-dark border-l-1 dark:border-darkmode-light">
        <div class="darkmode-animation flex flex-row h-14 bg-gray-100 dark:bg-darkmode-medium border-b-1 dark:border-darkmode-light">
          <div class="flex flex-row justify-start">
            <div v-if="selectedItems.length == 1" @click="rename()" class="w-full h-full flex flex-row items-center cursor-pointer hover:bg-blue-100 px-5 dark:hover:bg-darkmode-light">
              <font-awesome-icon icon="fa-pen" size="sm" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
              <div class="w-full">
                <p class="text-sm darkmode-animation dark:text-white">Rename</p>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-start">
            <div v-if="selectedItems.length == 1" @click="save()" :class="[!fileDirty ? 'cursor-default' : 'cursor-pointer hover:bg-blue-100 dark:hover:bg-darkmode-light']" class="w-full h-full flex flex-row items-center px-5">
              <font-awesome-icon icon="fa-floppy-disk" size="sm" class="darkmode-animation mr-3 text-gray-400 dark:text-white"></font-awesome-icon>
              <div class="w-full">
                <p class="text-sm darkmode-animation dark:text-white">Save</p>
              </div>
            </div>
          </div>
          <div class="flex-auto"></div>
          <div class="flex flex-row justify-end">
            <div v-if="selectedItems.length > 0" @click="download()" class="w-full h-full flex flex-row items-center cursor-pointer hover:bg-blue-100 px-5 dark:hover:bg-darkmode-light">
              <font-awesome-icon icon="fa-download" size="sm" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
              <div class="w-full">
                <p class="text-sm darkmode-animation dark:text-white">Download</p>
              </div>
            </div>
            <div v-if="selectedItems.length > 0" @click="deleteFiles()" class="w-full h-full flex flex-row items-center cursor-pointer hover:bg-blue-100 px-5 dark:hover:bg-darkmode-light">
              <font-awesome-icon icon="fa-trash-can" size="sm" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
              <div class="w-full">
                <p class="text-sm darkmode-animation dark:text-white">Delete</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isLoaded" class="darkmode-animation w-full h-full flex flex-col bg-editor-light dark:bg-editor-dark">
          <div v-if="selectedItems.length === 0 && !file" class="h-28 flex flex-row items-center mx-5 py-7">
            <font-awesome-icon v-if="currentFolder !== ''" icon="fa-folder" size="2xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
            <font-awesome-icon v-if="currentFolder === ''" icon="fa-window-maximize" size="2xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
            <div class="w-full ml-7">
              <p v-if="currentFolder !== ''" class="darkmode-animation dark:text-white text-2xl">{{ currentFolder.split('/')[currentFolder.split('/').length - 1] }}</p>
              <p v-if="currentFolder === ''" class="darkmode-animation dark:text-white text-2xl">{{ subDomain }}.moonnetic.be</p>
              <p v-if="currentFolder !== ''" class="darkmode-animation dark:text-white text-gray-600">{{ nextFolderItems(currentFolder) }} items</p>
              <p v-if="currentFolder === ''" class="darkmode-animation dark:text-white text-gray-600">{{ nextFolderItems('') }} items</p>
            </div>
          </div>
          <div v-if="selectedItems.length === 1 && !file" class="h-28 flex flex-row items-center mx-5 py-7">
            <font-awesome-icon icon="fa-folder" size="2xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
            <div class="w-full ml-7">
              <p class="darkmode-animation dark:text-white text-2xl">{{ selectedItems[0].split('/')[selectedItems[0].split('/').length - 1] }}</p>
              <p class="darkmode-animation dark:text-white text-gray-600">{{ nextFolderItems(selectedItems[0]) }} items</p>
            </div>
          </div>
          <div v-if="selectedItems.length === 1 && file" class="h-28 flex flex-row items-center mx-5 py-7">
            <font-awesome-icon icon="fa-file-code" size="2xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
            <div class="w-full ml-7">
              <p class="darkmode-animation dark:text-white text-2xl">{{ selectedItems[0].split('/')[selectedItems[0].split('/').length - 1] }}</p>
              <p class="darkmode-animation dark:text-white text-gray-600">0 items</p>
            </div>
          </div>
          <div v-if="selectedItems.length > 1" class="h-28 flex flex-row items-center mx-5 py-7">
            <font-awesome-icon v-if="currentFolder !== ''" icon="fa-folder" size="2xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
            <font-awesome-icon v-if="currentFolder === ''" icon="fa-window-maximize" size="2xl" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
            <div class="w-full ml-7">
              <p v-if="currentFolder !== ''" class="darkmode-animation dark:text-white text-2xl">{{ currentFolder.split('/')[currentFolder.split('/').length - 1] }}</p>
              <p v-if="currentFolder === ''" class="darkmode-animation dark:text-white text-2xl">{{ subDomain }}.moonnetic.be</p>
              <p v-if="currentFolder !== ''" class="darkmode-animation dark:text-white text-gray-600">{{ nextFolderItems(currentFolder) }} items</p>
              <p v-if="currentFolder === ''" class="darkmode-animation dark:text-white text-gray-600">{{ nextFolderItems('') }} items</p>
            </div>
          </div>
          <div class="mx-5 w-full border-b-1 dark:border-darkmode-light"></div>
          <div v-if="selectedItems.length === 0" class="w-full h-full items-center flex justify-center">
            <p class="darkmode-animation dark:text-white text-3xl">No items selected</p>
          </div>
          <div v-if="selectedItems.length === 1 && !file && !isImage" class="w-full h-full items-center flex justify-center">
            <font-awesome-icon icon="fa-folder" size="7x" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
          </div>
          <div v-if="selectedItems.length === 1 && file" class="w-full h-full pb-28">
            <CodeEditor :key="currentLanguage[0][0]" v-model="newFileContent" width="100%" height="100%" border_radius="0px" :theme="isDark" class="darkmode-animation" :languages="currentLanguage"></CodeEditor>
          </div>
          <div v-if="selectedItems.length === 1 && !file && isImage" class="w-full h-full items-center flex justify-center">
            <font-awesome-icon icon="fa-image" size="7x" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
          </div>
          <div v-if="selectedItems.length > 1" class="w-full h-full items-center flex flex-col justify-center">
            <font-awesome-icon icon="fa-folder" size="7x" class="darkmode-animation dark:text-white text-gray-400 mr-3"></font-awesome-icon>
            <p class="darkmode-animation dark:text-white text-3xl">{{ selectedItems.length }} items selected</p>
          </div>
        </div>
      </div>
    </div>
    <CreateModal
      v-show="isCreating"
      @close="closeModal"
      @refresh="refresh($event)"
      :extension="createExtension"
      :isFolder="isFolder"
      :currentFolder="currentFolder"
    />
    <RenameModal
      v-show="isRenaming"
      @close="closeModal"
      @refresh="refresh($event)"
      :fileName="selectedItems[0]"
    />
    <DeleteModal
      v-show="isDeleting"
      @close="closeModal"
      @refresh="deleteRefresh"
      :fileNames="selectedItems"
    />
  </service-layout>
</template>

<script>
import CreateModal from '@/components/modals/CreateModal.vue'
import RenameModal from '@/components/modals/RenameModal.vue'
import DeleteModal from '@/components/modals/DeleteModal.vue'
import { FileService } from '../../services/file.service.js'
import ServiceLayout from '@/components/layouts/ServiceLayout.vue'
import CodeEditor from 'simple-code-editor'

export default {
  name: 'FileManager',
  title: 'File Manager',
  data () {
    return {
      isDark: localStorage.theme === 'dark' ? 'dark' : 'light',
      currentFolder: '',
      directories: [],
      files: [],
      subDomain: '',
      selectedItems: [],
      file: null,
      isImage: false,
      isFolder: false,
      image: null,
      oldFileContent: '',
      newFileContent: '',
      fileDirty: false,
      isLoaded: false,
      isCreating: false,
      isRenaming: false,
      isDeleting: false,
      languages: [
        ['txt', 'Text'],
        ['yml', 'YAML'],
        ['yaml', 'YAML'],
        ['json', 'JSON'],
        ['xml', 'XML'],
        ['sh', 'Shell'],
        ['md', 'Markdown'],
        ['php', 'PHP'],
        ['js', 'Javascript'],
        ['css', 'CSS'],
        ['html', 'HTML']
      ],
      currentLanguage: [['txt', 'Text']],
      imageExtensions: ['tif', 'tiff', 'ico', 'cur', 'bmp', 'webp', 'svg', 'png', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'gif', 'avif', 'apng'],
      createExtension: ''
    }
  },
  components: {
    ServiceLayout,
    CodeEditor,
    CreateModal,
    RenameModal,
    DeleteModal
  },
  mounted () {
    this.$store.dispatch('getFiles').then(() => {
      this.setFolder()
      this.isLoaded = true
    })
    if (localStorage.theme === 'dark') this.isDark = 'dark'
    else this.isDark = 'light'
  },
  methods: {
    refresh (newFileName) {
      this.$store.dispatch('getFiles').then(() => {
        this.setFolder()
        if (this.files.includes(newFileName)) this.file = newFileName
        this.selectedItems.push(newFileName)
        this.closeModal()
      })
    },
    deleteRefresh () {
      this.$store.dispatch('getFiles').then(() => {
        this.setFolder()
        this.closeModal()
      })
    },
    toggleCreate () {
      const targetEl = document.getElementById('create-dropdown')
      targetEl.classList.toggle('hidden')
      targetEl.classList.toggle('block')
    },
    setFolder () {
      const currentDirectories = []
      const currentFiles = []
      this.$store.getters.directories.forEach(directory => {
        if (this.currentFolder === '') {
          if (directory.split('/').length - 1 === 0) currentDirectories.push(directory)
        } else {
          if (directory.split('/').length - 1 === this.currentFolder.split('/').length && directory.startsWith(this.currentFolder + '/')) currentDirectories.push(directory)
        }
      })
      this.$store.getters.files.forEach(file => {
        if (this.currentFolder === '') {
          if (file.split('/').length - 1 === 0) currentFiles.push(file)
        } else {
          if (file.split('/').length - 1 === this.currentFolder.split('/').length && file.startsWith(this.currentFolder + '/')) currentFiles.push(file)
        }
      })
      this.selectedItems = []
      this.directories = currentDirectories
      this.files = currentFiles
      this.subDomain = this.$store.getters.subDomain
      this.file = null
    },
    changeFolder (data) {
      if (this.currentFolder === '') this.currentFolder += data
      else this.currentFolder += '/' + data
      this.setFolder()
    },
    previousFolder () {
      if (this.currentFolder !== '') {
        const path = this.currentFolder.split('/')
        if (path.length === 1) this.currentFolder = ''
        else {
          path.pop()
          this.currentFolder = path.join('/')
        }
        this.setFolder()
      }
    },
    nextFolderItems (data) {
      let count = 0
      if (data === '') {
        this.$store.getters.directories.forEach(directory => {
          if (directory.split('/').length - 1 === 0) count = count + 1
        })
        this.$store.getters.files.forEach(file => {
          if (file.split('/').length - 1 === 0) count = count + 1
        })
      } else {
        this.$store.getters.directories.forEach(directory => {
          if (directory.split('/').length === data.split('/').length + 1 && directory.startsWith(data + '/')) count = count + 1
        })
        this.$store.getters.files.forEach(file => {
          if (file.split('/').length === data.split('/').length + 1 && file.startsWith(data + '/')) count = count + 1
        })
      }
      return count
    },
    async readFile (data) {
      if (data !== this.file) {
        this.file = null
        this.isImage = false
        this.imageExtensions.forEach(extension => {
          if (data.endsWith(extension)) this.isImage = true
        })
        this.newFileContent = ''
        this.oldFileContent = ''
        this.selectedItems = []
        this.selectedItems.push(data)
        if (this.isImage) {
        } else {
          this.file = data
          this.getLanguage()
          await FileService.readFile(data).then((response) => {
            var reader = new FileReader()
            const vm = this
            reader.onload = function () {
              vm.newFileContent = reader.result
              vm.oldFileContent = reader.result
            }
            reader.readAsText(new Blob([response.data]))
          })
        }
      }
    },
    async download () {
      await FileService.downloadFile(this.selectedItems.join(',')).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'contents.rar')
        document.body.appendChild(link)
        link.click()
        link.remove()
      })
    },
    changeSelectedItems (data) {
      this.isRenaming = false
      this.isDeleting = false
      this.isImage = false
      this.file = null
      if (!this.selectedItems.includes(data)) this.selectedItems.push(data)
      else this.selectedItems.splice(this.selectedItems.indexOf(data), 1)
      if (this.selectedItems.length === 1 && this.$store.getters.files.includes(this.selectedItems[0])) this.readFile(this.selectedItems[0])
    },
    isSelected (data) {
      return this.selectedItems.includes(data)
    },
    getLanguage () {
      const fileLanguage = [['txt', 'Text']]
      this.languages.forEach(language => {
        if (this.file.endsWith(language[0])) {
          fileLanguage.pop()
          fileLanguage.push(language)
        }
      })
      this.currentLanguage = fileLanguage
      this.$forceUpdate()
    },
    create (extension, isFolder = false) {
      this.isFolder = isFolder
      this.createExtension = extension
      this.isCreating = true
    },
    rename () {
      this.isRenaming = true
    },
    async save () {
      if (this.fileDirty) {
        this.fileDirty = false
        await FileService.editFile({ path: this.file, content: this.newFileContent }).then((response) => {
        })
      }
    },
    deleteFiles () {
      this.isDeleting = true
    },
    closeModal () {
      this.isCreating = false
      this.isRenaming = false
      this.isDeleting = false
    },
    async handleFileUpload () {
      const uploadFile = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file', uploadFile)
      await FileService.uploadFile(formData).then((response) => {
        this.$store.dispatch('getFiles').then(() => {
          this.setFolder()
        })
      })
    }
  },
  watch: {
    '$store.state.theme.theme' (newValue) {
      if (newValue === 'dark') this.isDark = 'dark'
      else this.isDark = 'light'
    },
    'newFileContent' (newValue) {
      if (newValue !== this.oldFileContent) this.fileDirty = true
      else this.fileDirty = false
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
</style>
