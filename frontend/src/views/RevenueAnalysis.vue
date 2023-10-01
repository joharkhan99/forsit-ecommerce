<template>
  <div>
    <div class="lg:flex md:flex w-full my-6 gap-3">
      <div
        class="lg:w-1/4 md:w-2/4 w-full bg-blue-500 hover:border-transparent shadow-[0_10px_20px_rgba(120,171,253,0.5)] transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 cursor-pointer">
        <div>
          <div class="mb-4">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-white">
              <div>
                <span class="bg-white text-blue-500 block p-1 rounded-full group-hover:bg-white transition-all">
                  <EyeIcon class="w-4 h-4" />
                </span>
              </div>
              <div>Total Views</div>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="text-2xl font-semibold text-white">
              12.32K
            </div>
            <div class="flex rounded-full p-1 px-2.5 text-xs items-center bg-green-200 gap-1">
              <span>
                <ArrowTrendingUpIcon class="w-4 h-4 text-green-700" />
              </span>
              <span class="text-green-700 font-semibold">25.2%</span>
            </div>
          </div>

          <div>
            <span class="text-xs mr-1 text-gray-50">
              via last month:
            </span>
            <span class="text-xs font-semibold text-white">
              112.323k
            </span>
          </div>
        </div>
      </div>
      <div
        class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-500">
              <div>
                <span class="bg-blue-500 text-blue-500 block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                  <PresentationChartBarIcon class="w-4 h-4" />
                </span>
              </div>
              <div>Total Profits</div>
            </div>
            <div>
              <span>
                <ChevronRightIcon class="w-5 h-5 text-blue-500 group-hover:text-white" />
              </span>
            </div>
          </div>

          <div class="flex items-center gap-4 group-hover:text-white">
            <div class="text-2xl font-semibold text-gray-900 group-hover:text-white">
              $12,233.21
            </div>
            <div class="flex rounded-full p-1 px-2.5 text-xs items-center bg-red-200 gap-1">
              <span>
                <ArrowTrendingDownIcon class="w-4 h-4 text-red-700" />
              </span>
              <span class="text-red-700 font-semibold">14.2%</span>
            </div>
          </div>

          <div>
            <span class="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
              via last month:
            </span>
            <span class="text-xs text-black font-semibold group-hover:text-white">
              $15,122.0
            </span>
          </div>
        </div>
      </div>

      <div
        class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-500">
              <div>
                <span class="bg-blue-500 text-blue-500 block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                  <UsersIcon class="w-4 h-4" />
                </span>
              </div>
              <div>New Customers</div>
            </div>
            <div>
              <span>
                <ChevronRightIcon class="w-5 h-5 text-blue-500 group-hover:text-white" />
              </span>
            </div>
          </div>

          <div class="flex items-center gap-4 group-hover:text-white">
            <div class="text-2xl font-semibold text-gray-900 group-hover:text-white">
              630
            </div>
            <div class="flex rounded-full p-1 px-2.5 text-xs items-center bg-green-200 gap-1">
              <span>
                <ArrowTrendingUpIcon class="w-4 h-4 text-green-700" />
              </span>
              <span class="text-green-700 font-semibold">20%</span>
            </div>
          </div>

          <div>
            <span class="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
              via last month:
            </span>
            <span class="text-xs text-black font-semibold group-hover:text-white">
              510
            </span>
          </div>
        </div>
      </div>

      <div
        class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-500">
              <div>
                <span class="bg-blue-500 text-blue-500 block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                  <LightBulbIcon class="w-4 h-4" />
                </span>
              </div>
              <div>Running Projects</div>
            </div>
            <div>
              <span>
                <ChevronRightIcon class="w-5 h-5 text-blue-500 group-hover:text-white" />
              </span>
            </div>
          </div>

          <div class="flex items-center gap-4 group-hover:text-white">
            <div class="text-2xl font-semibold text-gray-900 group-hover:text-white">
              25
            </div>
            <div class="flex rounded-full p-1 px-2.5 text-xs items-center bg-red-200 gap-1">
              <span>
                <ArrowTrendingDownIcon class="w-4 h-4 text-red-700" />
              </span>
              <span class="text-red-700 font-semibold">15%</span>
            </div>
          </div>

          <div>
            <span class="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
              via last month:
            </span>
            <span class="text-xs text-black font-semibold group-hover:text-white">
              18
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl p-6 w-full my-6 max-w-full shadow-xl shadow-gray-200">
      <div class="mb-3 flex justify-between items-center">
        <span class="font-bold text-2xl text-gray-900">
          Overview Orders
        </span>
        <div>
          <select class="text-sm bg-gray-100 rounded-lg p-2 px-3 text-gray-600 outline-none focus:ring focus:ring-gray-200 cursor-pointer">
            <option value="1" selected>
              Last 7 days
            </option>
            <option value="2">Last 30 days</option>
            <option value="3">Last 90 days</option>
          </select>
        </div>
      </div>
      <div>
        <!-- <OrderChart /> -->
      </div>
    </div>

    <div class="p-6 bg-white shadow-lg rounded-xl shadow-gray-200">
      <div class="mb-3">
        <span class="font-bold text-2xl text-gray-900 block">
          Earning Report
        </span>
      </div>

      <div class="lg:flex rounded-xl">
        <div class="lg:w-1/3">
          <div class="flex gap-3 items-center mb-5">
            <div>
              <span class="rounded-full bg-green-200 block p-1">
                <ArrowTrendingUpIcon class="w-4 h-4 text-green-700" />
              </span>
            </div>
            <div class="text-green-600 font-semibold">+7.2%</div>
            <div class="text-gray-500 text-xs">
              - Increased This Week
            </div>
          </div>

          <div>
            <ul>
              <li class="flex justify-between items-center hover:bg-gray-100 rounded-lg mb-4">
                <div class="flex items-center gap-5">
                  <div class="bg-gray-100 p-1.5 rounded-full">
                    <img src="https://mir-s3-cdn-cf.behance.net/user/50/2ec25f505091121.64c0087b7bd73.png" alt="" class="h-12 w-12 rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-xs text-gray-500">Facebook</span>
                    <span class="text-lg font-bold">$2.13K</span>
                  </div>
                </div>
                <div class="rounded-full p-0 px-3  bg-green-200 gap-1 text-center">
                  <span class="text-xs text-green-700 font-medium">
                    5.7%
                  </span>
                </div>
                <div class="rounded-full p-0 px-3  bg-gray-200 gap-1 text-center">
                  <span class="text-xs text-gray-700 font-medium">
                    22 May 2023
                  </span>
                </div>
              </li>
              <li class="flex justify-between items-center hover:bg-gray-100 rounded-lg mb-4">
                <div class="flex items-center gap-5">
                  <div class="bg-gray-100 p-1.5 rounded-full">
                    <img src="https://cdn.dribbble.com/users/14379669/avatars/normal/1f4ebd77a0db9bb01986ed2c943485f2.jpg?1671474840&resize=40x40" alt="" class="h-12 w-12 rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-xs text-gray-500">Facebook</span>
                    <span class="text-lg font-bold">$2.13K</span>
                  </div>
                </div>
                <div class="rounded-full p-0 px-3  bg-green-200 gap-1 text-center">
                  <span class="text-xs text-green-700 font-medium">
                    5.7%
                  </span>
                </div>
                <div class="rounded-full p-0 px-3  bg-gray-200 gap-1 text-center">
                  <span class="text-xs text-gray-700 font-medium">
                    22 May 2023
                  </span>
                </div>
              </li>
              <li class="flex justify-between items-center hover:bg-gray-100 rounded-lg mb-4">
                <div class="flex items-center gap-5">
                  <div class="bg-gray-100 p-1.5 rounded-full">
                    <img src="https://cdn.dribbble.com/users/16361925/avatars/normal/27e34e235e95b7eb13d137903a49c31e.png?1695370101&resize=40x40" alt="" class="h-12 w-12 rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-xs text-gray-500">Facebook</span>
                    <span class="text-lg font-bold">$2.13K</span>
                  </div>
                </div>
                <div class="rounded-full p-0 px-3  bg-green-200 gap-1 text-center">
                  <span class="text-xs text-green-700 font-medium">
                    5.7%
                  </span>
                </div>
                <div class="rounded-full p-0 px-3  bg-gray-200 gap-1 text-center">
                  <span class="text-xs text-gray-700 font-medium">
                    22 May 2023
                  </span>
                </div>
              </li>
              <li class="flex justify-between items-center hover:bg-gray-100 rounded-lg mb-4">
                <div class="flex items-center gap-5">
                  <div class="bg-gray-100 p-1.5 rounded-full">
                    <img src="https://cdn.dribbble.com/users/9196316/avatars/normal/f6e9f41f806541156d32e40ce1652055.png?1690621521&resize=40x40" alt="" class="h-12 w-12 rounded-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-xs text-gray-500">Facebook</span>
                    <span class="text-lg font-bold">$2.13K</span>
                  </div>
                </div>
                <div class="rounded-full p-0 px-3  bg-green-200 gap-1 text-center">
                  <span class="text-xs text-green-700 font-medium">
                    5.7%
                  </span>
                </div>
                <div class="rounded-full p-0 px-3  bg-gray-200 gap-1 text-center">
                  <span class="text-xs text-gray-700 font-medium">
                    22 May 2023
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="lg:w-2/3 mt-4 lg:mt-0">
          <div>
            <!-- <EarningChart /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon, EyeIcon, PresentationChartBarIcon, UsersIcon, LightBulbIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/vue/24/outline'
</script>