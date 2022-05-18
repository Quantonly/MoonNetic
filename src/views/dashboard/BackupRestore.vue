<template>
  <main-layout>
    <div class="backup-restore container mx-auto darkmode-animation mb-auto">
      <h1 class="darkmode-animation text-2xl font-medium text-center mt-10 dark:text-white">Backup & Restore</h1>
      <div class="mt-10 flex flex-row justify-center gap-8">
        <div class="w-full border-t-4 border-blue-400">
          <div class="darkmode-animation flex flex-col justify-between p-4 bg-white rounded-b-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-darkmode-light dark:border-gray-700">
            <div>
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
  name: 'BackupRestore',
  components: {
    MainLayout
  }
}
</script>
