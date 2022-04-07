<template>
  <div class="dashboard container mx-auto">
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
          <router-link to="/dashboard/files">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">File Manager</button>
          </router-link>
        </div>
      </div>
      <div class="w-80 border-t-4 border-blue-400">
        <div class="darkmode-animation flex flex-col justify-between h-80 p-4 max-w-sm bg-white rounded-b-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-darkmode-light dark:border-gray-700">
          <div>
            <div class="flex items-center gap-5 mb-8">
              <font-awesome-icon icon="fa-file-shield" size="xl" class="text-blue-400"></font-awesome-icon>
              <h4 class="darkmode-animation dark:text-white font-semibold">Backup & Restore</h4>
            </div>
            <div class="flex flex-col">
              <p class="text-gray-500">Tweak our backup system to your needs or recover a saved backup</p>
            </div>
          </div>
          <router-link to="/dashboard/backups">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Backup & Restore</button>
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
              <p class="text-gray-500">Use our file editor to upload, edit or remove all your files in the same place</p>
            </div>
          </div>
          <router-link to="/dashboard/database">
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
              <p class="text-gray-500">...</p>
            </div>
          </div>
          <router-link to="/dashboard/sftp">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SFTP</button>
          </router-link>
        </div>
      </div>
      <div class="w-80 border-t-4 border-black">
        <div class="darkmode-animation flex flex-col justify-between h-80 p-4 max-w-sm bg-white rounded-b-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-darkmode-light dark:border-gray-700">
          <div>
            <div class="flex items-center gap-5 mb-8">
              <font-awesome-icon icon="fa-terminal" size="xl" class="text-black"></font-awesome-icon>
              <h4 class="darkmode-animation dark:text-white font-semibold">SSH</h4>
            </div>
            <div class="flex flex-col">
              <p class="text-gray-500">...</p>
            </div>
          </div>
          <router-link to="/dashboard/ssh">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SSH</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>
