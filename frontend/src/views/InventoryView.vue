<template>
  <div>
    <h2 class="text-xl font-semibold mb-10 text-gray-900">Inventory Management</h2>

    <div class="bg-white shadow-lg shadow-gray-200 rounded-xl p-5 py-5">

      <!-- search bar -->
      <div class="mb-4 text-sm">
        <input type="text" placeholder="Search products..." class="max-w-sm w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent"
          v-model="searchQuery" />
      </div>

      <!-- filters -->
      <div class="flex gap-10 items-center mb-4 text-sm border-b pb-4 border-gray-100">
        <div>
          <label for="sortBy" class="text-gray-600 font-semibold mb-1 block">Sort by:</label>
          <select id="sortBy" class="block border text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent" v-model="selectedSortOption">
            <option value="nameAsc">Name Asc</option>
            <option value="nameDesc">Name Desc</option>
            <option value="priceAsc">Price Asc</option>
            <option value="priceDesc">Price Desc</option>
          </select>
        </div>
        <div>
          <label for="filterBy" class="text-gray-600 font-semibold mb-1 block">Filter by:</label>
          <select id="filterBy" class="block border text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent" v-model="selectedFilterOption">
            <option value="all">All Products</option>
            <option value="lowInventory">Low Inventory</option>
            <option value="averageInventory">Average Inventory</option>
            <option value="highInventory">High Inventory</option>
          </select>
        </div>
      </div>

      <!-- product list/table -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-center">
              <th scope="col" class="text-sm font-semibold text-gray-900 pb-4">S.No</th>
              <th scope="col" class="text-sm font-semibold text-gray-900 pb-4">Image</th>
              <th scope="col" class="text-sm font-semibold text-gray-900 pb-4">Product Name</th>
              <th scope="col" class="text-sm font-semibold text-gray-900 pb-4">Description</th>
              <th scope="col" class="text-sm font-semibold text-gray-900 pb-4">Price</th>
              <th scope="col" class="text-sm font-semibold text-gray-900 pb-4">Stock</th>
              <th scope="col" class="text-sm font-semibold text-gray-900 pb-4">Inventory</th>
              <th scope="col" class="text-sm font-semibold text-gray-900 pb-4">Actions</th>
            </tr>
          </thead>
          <tbody class="text-center">

            <tr v-for="(product, index) in filteredAndSortedProductList" :key="product.id" class="text-sm text-gray-900 hover:bg-gray-100">
              <td class="py-2">{{ index + 1 }}</td>
              <td class="py-2">
                <img :src="product.image" class="w-16 m-auto h-auto" :alt="product.name">
              </td>
              <td class="py-2">{{ product.name }}</td>
              <td class="py-2">{{ product.description.substring(0, 50) + "..." }}</td>
              <td class="py-2">{{ product.price }}</td>
              <td class="py-2">{{ product.stock }}</td>
              <td class="py-2">
                <span :class="InventeryLevelClass(product.level)" class="p-1 px-2 rounded">
                  {{ product.level }}
                </span>
              </td>
              <td class="py-2">
                <button class="bg-blue-500 border text-white rounded-md p-1 px-2 hover:bg-blue-600">
                  Update Level
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const searchQuery = ref('');
const selectedSortOption = ref('nameAsc');

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/products');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const fetchedProducts = await response.json();
    console.log(fetchedProducts);
    products.value = fetchedProducts;
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchProducts);


const selectedFilterOption = ref('all');
const filteredAndSortedProductList = computed(() => {
  let filteredList = [...products.value];

  if (selectedFilterOption.value === 'lowInventory') {
    filteredList = filteredList.filter((product) => product.inventory === 'Low');
  } else if (selectedFilterOption.value === 'averageInventory') {
    filteredList = filteredList.filter((product) => product.inventory === 'Average');
  } else if (selectedFilterOption.value === 'highInventory') {
    filteredList = filteredList.filter((product) => product.inventory === 'High');
  }

  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase();
    filteredList = filteredList.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    });
  }

  if (selectedSortOption.value === 'nameAsc') {
    filteredList.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSortOption.value === 'nameDesc') {
    filteredList.sort((a, b) => b.name.localeCompare(a.name));
  } else if (selectedSortOption.value === 'priceAsc') {
    filteredList.sort((a, b) => a.price - b.price);
  } else if (selectedSortOption.value === 'priceDesc') {
    filteredList.sort((a, b) => b.price - a.price);
  }

  return filteredList;
});


const InventeryLevelClass = (status) => {
  switch (status) {
    case 'High':
      return 'bg-green-200 text-green-700';
    case 'Average':
      return 'bg-yellow-200 text-yellow-700';
    case 'Low':
      return 'bg-red-200 text-red-700';
    default:
      return '';
  }
};



</script>