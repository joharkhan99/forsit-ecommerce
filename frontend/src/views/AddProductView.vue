<template>
  <div class="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg shadow-gray-200">
    <h2 class="text-xl font-semibold text-center mb-10 text-gray-900">Add New Product</h2>

    <form @submit.prevent="addProduct">
      <div class="mb-4 text-sm">
        <label for="name" class="block text-gray-600 font-medium mb-1">Product Name</label>
        <input v-model="name" type="text" id="name" class="w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent" placeholder="Nike t-shirt"
          required />
      </div>

      <div class="mb-4 text-sm">
        <label for="description" class="block text-gray-600 font-medium mb-1">Description</label>
        <textarea v-model="description" id="description" class="w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent"
          placeholder="Black shirt with half sleeves ad rund neck..." rows="5" required></textarea>
      </div>

      <div class="mb-4 text-sm">
        <label for="stock" class="block text-gray-600 font-medium mb-1">Price</label>
        <input v-model.number="price" type="number" id="price" class="w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent" placeholder="200"
          required />
      </div>

      <div class="mb-4 text-sm">
        <label for="stock" class="block text-gray-600 font-medium mb-1">Initial Stock</label>
        <input v-model.number="stock" type="number" id="stock" class="w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent" placeholder="100"
          required />
      </div>

      <div class="mb-4 text-sm">
        <label for="image" class="block text-gray-600 font-semibold mb-4">Product Images</label>
        <input type="file" id="image" ref="productImageInput" class="hidden" accept="image/*" multiple />
        <label for="image" class="cursor-pointer bg-gray-100 border border-gray-200 text-gray-600 rounded-lg p-3 px-5 hover:bg-gray-200">
          Upload Images
        </label>
      </div>

      <div class="mt-12">
        <button type="submit" class="bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600 block w-full">
          Add Product
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const description = ref('');
const price = ref(null);
const stock = ref(null);

const addProduct = () => {
  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('description', description.value);
  formData.append('price', price.value);
  formData.append('stock', stock.value);

  // Make an HTTP POST request to your backend API
  fetch('http://localhost:3000/api/products', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Handle response here
    })
    .catch((error) => {
      console.error(error);
      // Handle errors here
    });
};

</script>

<style scoped>
/* Your component styles here */
</style>
