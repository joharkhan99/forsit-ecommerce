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
              <td class="py-2">{{ product.name }}</td>
              <td class="py-2">{{ product.description }}</td>
              <td class="py-2">{{ product.price }}</td>
              <td class="py-2">{{ product.stock }}</td>
              <td class="py-2">
                <span :class="InventeryLevelClass(product.inventory)" class="p-1 px-2 rounded">
                  {{ product.inventory }}
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
import { ref, computed } from 'vue';

const searchQuery = ref('');
const selectedSortOption = ref('nameAsc');

const products = ref([
  {
    id: 1,
    name: 'Nike Shoes',
    description: 'Description for Product 1',
    price: 50,
    stock: 100,
    inventory: 'High',
  },
  {
    id: 2,
    name: 'Rolex Watch',
    description: 'Description for Product 2',
    price: 75,
    stock: 50,
    inventory: 'Average',
  },
  {
    id: 3,
    name: 'T shirt',
    description: 'Description for Product 3',
    price: 30,
    stock: 25,
    inventory: 'Low',
  },
]);

// const selectedSortOption = ref('nameAsc'); // Default sorting option
const selectedFilterOption = ref('all'); // Default filtering option
// const searchQuery = ref(''); // Search query input

const filteredAndSortedProductList = computed(() => {
  let filteredList = [...products.value];

  // Filter the products based on the selectedFilterOption
  if (selectedFilterOption.value === 'lowInventory') {
    filteredList = filteredList.filter((product) => product.inventory === 'Low');
  } else if (selectedFilterOption.value === 'averageInventory') {
    filteredList = filteredList.filter((product) => product.inventory === 'Average');
  } else if (selectedFilterOption.value === 'highInventory') {
    filteredList = filteredList.filter((product) => product.inventory === 'High');
  }

  // Filter the products based on the search query
  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase();
    filteredList = filteredList.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    });
  }

  // Sort the filtered products based on the selectedSortOption
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
      return 'bg-green-200 text-green-700'; // Change the color to green for High inventory
    case 'Average':
      return 'bg-yellow-200 text-yellow-700'; // Change the color to yellow for Average inventory
    case 'Low':
      return 'bg-red-200 text-red-700'; // Change the color to red for Low inventory
    default:
      return ''; // No additional class for other statuses
  }
};



</script>