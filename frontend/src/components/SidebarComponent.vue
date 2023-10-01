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
            <li>
              <router-link to="/" class="flex rounded-md p-2 cursor-pointer text-gray-600 text-sm items-center gap-x-4 mb-2 hover:opacity-90" :class="{
                'bg-blue-500 shadow-lg text-white': $route.path === '/',
                'justify-center': !sideBarOpen,
              }">
                <Squares2X2Icon class="w-6 h-6" />
                <span :class="{ 'hidden': !sideBarOpen, 'origin-left duration-200 font-semibold': sideBarOpen }">
                  Dashboard
                </span>
              </router-link>
            </li>

            <li>
              <router-link to="revenue-analysis" class="flex rounded-md p-2 cursor-pointer text-gray-600 text-sm items-center gap-x-4 mb-2 hover:opacity-90" :class="{
                'bg-blue-500 shadow-lg text-white': $route.path === '/revenue-analysis',
                'justify-center': !sideBarOpen,
              }">
                <CurrencyDollarIcon class="w-6 h-6" />
                <span :class="[!sideBarOpen ? 'hidden' : 'origin-left duration-200 font-semibold']">
                  Revenue Analysis
                </span>
              </router-link>
            </li>

            <li class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-sm text-gray-600 items-center gap-x-4 hover:bg-gray-100 mb-2" :class="!sideBarOpen && 'justify-center'">
              <ClipboardDocumentListIcon class="w-6 h-6" />
              <span :class="[!sideBarOpen ? 'hidden' : 'origin-left duration-200 font-semibold']">
                Inventory
              </span>
            </li>

            <li>
              <router-link to="add-product" class="flex rounded-md p-2 cursor-pointer text-gray-600 text-sm items-center gap-x-4 mb-2 hover:opacity-90" :class="{
                'bg-blue-500 shadow-lg text-white': $route.path === '/add-product',
                'justify-center': !sideBarOpen,
              }">
                <PlusCircleIcon class="w-6 h-6" />
                <span :class="[!sideBarOpen ? 'hidden' : 'origin-left duration-200 font-semibold']">
                  Add Product
                </span>
              </router-link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { Squares2X2Icon, CurrencyDollarIcon, ClipboardDocumentListIcon, ChevronRightIcon, ChevronLeftIcon, PlusCircleIcon } from "@heroicons/vue/24/outline"

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
