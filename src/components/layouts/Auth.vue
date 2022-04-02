<template>
  <div class="flex h-screen">
    <div class="m-auto shadow rounded-xl">
      <div class="flex content-center">
        <div class="flex-auto p-20 m-auto">
          <img class="pb-4 w-40" src="" alt="">
          <slot></slot>
        </div>
        <div class="flex-none">
          <img class="rounded-r-xl max-w-md" src="" alt="">
          <div class="w-20"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: { default: true }
  },
  methods: {
    currentPath (path) {
      return this.$route.path === path
    }
  }
}
</script>
