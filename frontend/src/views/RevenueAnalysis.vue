<template>
  <div class="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">Inventory Management</h2>

    <!-- Search Bar -->
    <div class="mb-4">
      <input type="text" v-model="searchQuery" placeholder="Search products..." class="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500" />
    </div>

    <!-- Sort and Filter Options -->
    <div class="flex justify-between items-center mb-4">
      <div>
        <label for="sortBy" class="text-gray-600 font-semibold">Sort by:</label>
        <select id="sortBy" v-model="sortBy" class="block w-48 border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500">
          <option value="name">Name</option>
          <option value="price">Price</option>
          <!-- Add more sorting options as needed -->
        </select>
      </div>
      <div>
        <label for="filterBy" class="text-gray-600 font-semibold">Filter by:</label>
        <select id="filterBy" v-model="filterBy" class="block w-48 border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500">
          <option value="all">All Products</option>
          <option value="lowInventory">Low Inventory</option>
          <!-- Add more filtering options as needed -->
        </select>
      </div>
    </div>

    <!-- Product List -->
    <table class="w-full">
      <thead>
        <tr>
          <th class="text-left">Product Name</th>
          <th class="text-left">Description</th>
          <th class="text-left">Price</th>
          <th class="text-left">Inventory</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>${{ product.price.toFixed(2) }}</td>
          <td>
            <input type="number" v-model="product.inventory" min="0" class="w-16 border rounded-lg py-1 px-2 focus:outline-none focus:border-blue-500" />
          </td>
          <td>
            <button @click="updateInventory(product)" class="bg-blue-500 text-white rounded-lg py-1 px-2 hover:bg-blue-600">
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      sortBy: 'name',
      filterBy: 'all',
      products: [
        // Initialize your product data here
        // Example: { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99, inventory: 50 },
      ],
    };
  },
  computed: {
    filteredProducts() {
      let filtered = this.products;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      }
      if (this.filterBy === 'lowInventory') {
        filtered = filtered.filter(product => product.inventory < 10); // Adjust the threshold as needed
      }
      return filtered.sort((a, b) => (this.sortBy === 'name' ? a.name.localeCompare(b.name) : a.price - b.price));
    },
  },
  methods: {
    updateInventory(product) {
      console.log(product);
      // Implement logic to update the inventory here
      // You can send a request to your backend API to update the inventory
    },
  },
};
</script>
