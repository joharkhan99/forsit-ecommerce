<template>
  <aside class="flex-shrink-0 bg-white lg:block relative no-scrollbar">
    <div class="h-screen overflow-hidden no-scrollbar">
      <button @click="toggleSidebar" class="absolute cursor-pointer -right-2 top-20 bg-white border transition-all rounded-full z-50 hover:border-gray-400 hover:text-gray-600 text-gray-400">
        <div v-if="sideBarOpen">
          <ChevronLeftIcon class="h-4 w-4" />
        </div>
        <div v-else>
          <ChevronRightIcon class="h-4 w-4" />
        </div>
      </button>
      <div :class="[sideBarOpen ? 'w-56' : 'w-20', 'relative duration-300']">
        <div class="flex items-center p-4 gap-4">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" class="w-10 h-10 rounded-full" />
          <span class="font-semibold text-blue-500 transition-all" :class="!sideBarOpen ? 'hidden' : ''">E-commerce</span>
        </div>

        <div class="overflow-hidden h-screen border-t p-4 mt-0.5 border-gray-100 pt-6">
          <ul class="overflow-auto h-screen custom-scrollbar">
            <li class="flex rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4 bg-blue-500 shadow-lg mb-2" :class="!sideBarOpen && 'justify-center'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
              <span :class="{ 'hidden': !sideBarOpen, 'origin-left duration-200 font-semibold': sideBarOpen }">
                Dashboard
              </span>
            </li>

            <li class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2" :class="!sideBarOpen && 'justify-center'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
              <span :class="[!sideBarOpen ? 'hidden' : 'origin-left duration-200 font-semibold']">
                Analytics
              </span>
            </li>

            <li class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2" :class="!sideBarOpen && 'justify-center'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
              <span :class="[!sideBarOpen ? 'hidden' : 'origin-left duration-200 font-semibold']">
                Pie Charts
              </span>
            </li>

            <li class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2" :class="!sideBarOpen && 'justify-center'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>
              <span :class="[!sideBarOpen ? 'hidden' : 'origin-left duration-200 font-semibold']">
                Manage Orders
              </span>
            </li>

            <li class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2" :class="!sideBarOpen && 'justify-center'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span :class="[!sideBarOpen ? 'hidden' : 'origin-left duration-200 font-semibold']">
                Your Earnings
              </span>
            </li>

            <li class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2" :class="!sideBarOpen && 'justify-center'">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
              </svg>
              <span :class="[!sideBarOpen ? 'hidden' : 'origin-left duration-200 font-semibold']">
                Manage NFTs
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid"

const sideBarOpen = ref(true);

const toggleSidebar = () => {
  sideBarOpen.value = !sideBarOpen.value;
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #888;
}
</style>
