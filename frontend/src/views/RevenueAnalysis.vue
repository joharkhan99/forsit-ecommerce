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
        <RevenueChart :chartData="revenueChartData" v-if="cardsData.newProductsCard" />
      </div>
    </div>

    <div class="p-6 bg-white shadow-lg rounded-xl shadow-gray-200">
      <div class="mb-3">
        <span class="font-bold text-2xl text-gray-900 block">
          Inventory Stocks Report
        </span>
      </div>

      <div class="lg:flex rounded-xl">
        <div class="w-full mt-4 lg:mt-0">
          <div>
            <StockChart :chartData="stockChartData" v-if="cardsData.newProductsCard" />
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
const revenueChartData = ref([]);
const stockChartData = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}/api/analysis`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.statusText}`);
    }
    const data = await response.json();
    cardsData.value = data.cardsData;

    revenueChartData.value = cardsData.value.revenueChartData;
    stockChartData.value = cardsData.value.stockChartData;

    console.log(cardsData.value);

    // console.log("TEST", revenueChartData.value);

  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchData);


</script>