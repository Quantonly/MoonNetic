<template>
  <main-layout>
    <div class="contact darkmode-animation mb-auto">
      <section class="pb-20 relative block bg-blueGray-800">
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="darkmode-animation text-4xl font-semibold dark:text-white">Contact</h2>
              <p class="darkmode-animation dark:text-white text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                If you have any questions, complaints or feedback, you can always let us know through our E-mail or fill in the form below. We will try our best to give you an answer as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block pt-24 lg:pt-0 mb-16">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div class="darkmode-animation relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg dark:bg-darkmode-light">
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold darkmode-animation dark:text-white">Fill in this form</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-blueGray-500 darkmode-animation dark:text-white">
                    And we will get back to you in 24 hours.
                  </p>
                  <form action="mailto:cody.volz@hotmail.com" method="post" enctype="text/plain">
                    <div class="relative w-full mb-3 mt-8">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 darkmode-animation dark:text-white" for="name">Full Name</label><input type="text" name="name" id="name" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name">
                    </div>
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 darkmode-animation dark:text-white" for="email">Email</label><input type="email" name="email" id="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email">
                    </div>
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 darkmode-animation dark:text-white" for="message">Message</label><textarea name="message" id="message" rows="4" cols="80" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Type a message..."></textarea>
                    </div>
                    <div class="text-center mt-6">
                      <button class="darkmode-animation dark:bg-white dark:text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue'

export default {
  name: 'Contact',
  title: 'Contact',
  components: {
    MainLayout
  }
}
</script>
