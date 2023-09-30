<template>
  <div class="p-4 flex justify-between items-center border-b border-gray-100 bg-white">
    <div class="flex items-center w-full">
      <div class="w-full max-w-md relative pl-6">
        <div class="absolute inset-y-0 flex items-center pl-2 text-gray-100">
          <MagnifyingGlassIcon class="w-4 h-4 text-gray-400" />
        </div>
        <input type="text" class="text-sm rounded-lg pl-8 block w-full p-2.5 bg-gray-100 outline-none border ring-purple-700 focus:ring-2 focus:bg-transparent hover:bg-gray-200 hover:bg-opacity-70"
          placeholder="Search..." required />
      </div>
    </div>

    <div class="space-x-4 items-center flex">
      <div class="group bg-gray-100 rounded-full w-10 h-10">
        <div class="p-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </div>
      </div>

      <div class="group bg-gray-100 rounded-full w-10 h-10">
        <div class="p-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
      </div>

      <div class="group bg-gray-100 rounded-full w-10 h-10">
        <img src="https://mir-s3-cdn-cf.behance.net/user/50/2ec25f505091121.64c0087b7bd73.png" alt="random user" class="w-full h-full rounded-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid"




// export default {
//   name: "Header",
//   components: {
//     MagnifyingGlassIcon,
//   },
// };
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
