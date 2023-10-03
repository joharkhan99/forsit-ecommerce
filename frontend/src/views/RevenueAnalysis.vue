<template>
  <div>
    <div class="lg:flex md:flex w-full my-6 gap-3">

      <router-link to="/inventory"
        class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-500">
              <div>
                <span class="bg-blue-500 text-blue-500 block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                  <ArchiveBoxIcon class="w-4 h-4" />
                </span>
              </div>
              <div>Total Products</div>
            </div>
            <div>
              <span>
                <ChevronRightIcon class="w-5 h-5 text-blue-500 group-hover:text-white" />
              </span>
            </div>
          </div>

          <div class="flex items-center gap-4 group-hover:text-white">
            <div class="text-2xl font-semibold text-gray-900 group-hover:text-white" v-if="cardsData.productsCard">
              <!-- sd -->
              {{ cardsData.productsCard.totalProducts }}
            </div>
          </div>

          <div>
            <span class="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
              via last month:
            </span>
            <span class="text-xs text-black font-semibold group-hover:text-white" v-if="cardsData.productsCard">
              {{ cardsData.productsCard.totalProductsLastMonth }}
            </span>
          </div>
        </div>
      </router-link>

      <div
        class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-500">
              <div>
                <span class="bg-blue-500 text-blue-500 block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                  <CurrencyDollarIcon class="w-4 h-4" />
                </span>
              </div>
              <div>Total Revenue</div>
            </div>

          </div>

          <div class="flex items-center gap-4 group-hover:text-white">
            <div class="text-2xl font-semibold text-gray-900 group-hover:text-white" v-if="cardsData.revenueCard">
              ${{ cardsData.revenueCard.totalRevenue }}
            </div>
          </div>

          <div>
            <span class="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
              via last month:
            </span>
            <span class="text-xs text-black font-semibold group-hover:text-white" v-if="cardsData.revenueCard">
              ${{ cardsData.revenueCard.lastMonthRevenue }}
            </span>
          </div>
        </div>
      </div>

      <router-link to="/inventory"
        class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-500">
              <div>
                <span class="bg-blue-500 text-blue-500 block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                  <Square3Stack3DIcon class="w-4 h-4" />
                </span>
              </div>
              <div>Total Stocks</div>
            </div>
            <div>
              <span>
                <ChevronRightIcon class="w-5 h-5 text-blue-500 group-hover:text-white" />
              </span>
            </div>
          </div>

          <div class="flex items-center gap-4 group-hover:text-white">
            <div class="text-2xl font-semibold text-gray-900 group-hover:text-white" v-if="cardsData.stockCard">
              {{ cardsData.stockCard.totalStock }}
            </div>
          </div>

          <div>
            <span class="text-xs text-gray-500 mr-1 group-hover:text-gray-50">
              via last month:
            </span>
            <span class="text-xs text-black font-semibold group-hover:text-white" v-if="cardsData.stockCard">
              {{ cardsData.stockCard.lastMonthStock }}
            </span>
          </div>
        </div>
      </router-link>

      <div
        class="lg:w-1/4 md:w-2/4 w-full bg-white shadow-lg hover:border-transparent shadow-gray-200 transition-all hover:bg-blue-500 hover:shadow-[0_10px_20px_rgba(120,171,253,0.5)] rounded-xl p-6 group hover:scale-105 border border-gray-200 cursor-pointer">
        <div>
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center font-semibold text-sm group-hover:text-white text-blue-500">
              <div>
                <span class="bg-blue-500 text-blue-500 block p-1 bg-opacity-30 rounded-full group-hover:bg-white transition-all">
                  <ArchiveBoxArrowDownIcon class="w-4 h-4" />
                </span>
              </div>
              <div>New Products</div>
            </div>
            <div>
              <span>
                <ChevronRightIcon class="w-5 h-5 text-blue-500 group-hover:text-white" />
              </span>
            </div>
          </div>

          <div class="flex items-center gap-4 group-hover:text-white">
            <div class="text-2xl font-semibold text-gray-900 group-hover:text-white" v-if="cardsData.newProductsCard">
              {{ cardsData.newProductsCard.newProducts }}
              <span class="text-xs text-gray-500 mr-1 group-hover:text-gray-50 font-normal ml-1">last week</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl p-6 w-full my-6 max-w-full shadow-xl shadow-gray-200">
      <div class="mb-3 flex justify-between items-center">
        <span class="font-bold text-2xl text-gray-900">
          Overview Revenue
        </span>

      </div>
      <div>
        <RevenueChart />
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
          <!-- <div class="flex gap-3 items-center mb-5">
            <div>
              <span class="rounded-full bg-green-200 block p-1">
                <ArrowTrendingUpIcon class="w-4 h-4 text-green-700" />
              </span>
            </div>
            <div class="text-green-600 font-semibold">+7.2%</div>
            <div class="text-gray-500 text-xs">
              - Increased This Week
            </div>
          </div> -->

          <div class="mt-3">
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
                <!-- <div class="rounded-full p-0 px-3  bg-green-200 gap-1 text-center">
                  <span class="text-xs text-green-700 font-medium">
                    5.7%
                  </span>
                </div> -->
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
            <StockChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon, ArchiveBoxIcon, CurrencyDollarIcon, Square3Stack3DIcon, ArchiveBoxArrowDownIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted } from 'vue';
import StockChart from '../components/charts/StockChart.vue';
import RevenueChart from '../components/charts/RevenueChart.vue';
const cardsData = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/analysis');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.statusText}`);
    }
    const data = await response.json();
    cardsData.value = data.cardsData;

    console.log(cardsData.value);

  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchData);


</script>