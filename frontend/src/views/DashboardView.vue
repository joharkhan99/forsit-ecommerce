<template>
  <div>
    <div class="lg:flex gap-4">
      <div class="lg:w-3/4 p-0 bg-blue-300 rounded-xl relative">
        <div class="w-full h-full overflow-hidden absolute rounded-xl">
          <div class="absolute w-64 h-64 opacity-50 bg-blue-500 rounded-full -top-36 -left-36 z-10"></div>
          <div class="absolute w-64 h-64 opacity-50 bg-blue-500 rounded-full -bottom-36 -right-36 z-10"></div>
        </div>

        <div class="container mx-auto lg:flex items-center justify-between relative">
          <div class="w-1/2 lg:w-auto text-right justify-end flex z-50">
            <img src="https://i.ibb.co/t875WYL/home-hero.png" alt="Your" class="h-64 w-auto lg:h-full lg:w-full object-contain -mt-10 relative" />
          </div>

          <div class="w-1/2 lg:w-auto text-gray-900 z-20 px-16 relative">
            <h2 class="text-xl mb-2 font-normal">
              Hi, <span class="font-semibold">Johar</span>
            </h2>
            <p class="text-sm">
              You have 3 tasks to finish all tasks today. You already
              completed 50% of your tasks. Keep it up! Your progress is
              looking great.
            </p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/4">
        <div class="bg-blue-500 w-full h-full rounded-xl p-4 text-white">
          <div class="flex flex-col justify-between h-full">
            <p class="text-sm mb-3">
              Good News! we have added new features. Check it out now and get a chance to win a free subscription.
            </p>
            <button class="bg-white rounded-lg p-3 text-sm w-full text-gray-700 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:flex md:flex w-full my-6 gap-3">
      <router-link to="/revenue-analysis"
        class="lg:w-1/3 md:w-2/3 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-600">
              <div>
                <span class="bg-blue-500 text-blue-600 block p-1 bg-opacity-30 rounded-xl group-hover:bg-white transition-all">
                  <CurrencyDollarIcon class="w-10 h-10" />
                </span>
              </div>
              <div>Revenue Analysis</div>
            </div>
            <div>
              <span>
                <ChevronRightIcon class="w-5 h-5 text-blue-600 group-hover:text-white" />
              </span>
            </div>
          </div>

        </div>
      </router-link>

      <div
        class="lg:w-1/3 md:w-2/3 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-600">
              <div>
                <span class="bg-blue-500 text-blue-600 block p-1 bg-opacity-30 rounded-xl group-hover:bg-white transition-all">
                  <ClipboardDocumentListIcon class="w-10 h-10" />
                </span>
              </div>
              <div>Inventory Management</div>
            </div>
            <div>
              <span>
                <ChevronRightIcon class="w-5 h-5 text-blue-600 group-hover:text-white" />
              </span>
            </div>
          </div>

        </div>
      </div>

      <router-link to="/add-product"
        class="lg:w-1/3 md:w-2/3 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-600">
              <div>
                <span class="bg-blue-500 text-blue-600 block p-1 bg-opacity-30 rounded-xl group-hover:bg-white transition-all">
                  <PlusCircleIcon class="w-10 h-10" />
                </span>
              </div>
              <div>Add New Product</div>
            </div>
            <div>
              <span>
                <ChevronRightIcon class="w-5 h-5 text-blue-600 group-hover:text-white" />
              </span>
            </div>
          </div>

        </div>
      </router-link>

    </div>
  </div>
</template>

<script setup>
import { CurrencyDollarIcon, ClipboardDocumentListIcon, ChevronRightIcon, PlusCircleIcon } from "@heroicons/vue/24/solid"
</script>