<template>
  <div class="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg shadow-gray-200">
    <h2 class="text-xl font-semibold text-center mb-10 text-gray-900">Add New Product</h2>

    <form @submit.prevent="addProduct">
      <div class="mb-4 text-sm">
        <label for="name" class="block text-gray-600 font-medium mb-1">Product Name</label>
        <input type="text" id="name" class="w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent" placeholder="Nike t-shirt" v-model="name"
          required />
      </div>

      <div class="mb-4 text-sm">
        <label for="description" class="block text-gray-600 font-medium mb-1">Description</label>
        <textarea id="description" class="w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent"
          placeholder="Black shirt with half sleeves ad rund neck..." v-model="description" rows="5" required></textarea>
      </div>

      <div class="mb-4 text-sm">
        <label for="price" class="block text-gray-600 font-medium mb-1">Price</label>
        <input type="number" id="price" class="w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent" placeholder="200" v-model="price"
          required />
      </div>

      <div class="mb-4 text-sm">
        <label for="stock" class="block text-gray-600 font-medium mb-1">Initial Stock</label>
        <input type="number" id="stock" class="w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent" placeholder="100" v-model="stock"
          required />
      </div>

      <div class="mb-4 text-sm">
        <label for="image" class="block text-gray-600 font-semibold mb-4">Product Image</label>
        <input type="file" id="image" name="images" class="hidden" accept="image/*" ref="image" @change="UpdateFileName" required />
        <label for="image" class="cursor-pointer bg-gray-100 border border-gray-200 text-gray-600 rounded-lg p-3 px-5 hover:bg-gray-200">
          Upload Image
        </label>
        <span class="ml-2 text-xs text-gray-900 border border-dashed p-1 rounded-sm" v-if="filename">{{ filename }}</span>
      </div>

      <div class="mt-12">
        <button type="submit" class="bg-blue-500 text-white rounded-lg p-3 hover:bg-blue-600 block w-full" :disabled="isAddingProduct">
          <span v-if="isAddingProduct" class="h-5 w-5 rounded-full border-t border-r border-2 border-white bg-transparent animate-spin block m-auto"></span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import router from '@/router/router';
import { ref } from 'vue';

const name = ref('');
const description = ref('');
const price = ref('');
const stock = ref('');
const image = ref('');
const filename = ref('');
const isAddingProduct = ref(false);

const addProduct = async () => {
  isAddingProduct.value = true;

  const formData = new FormData();
  formData.append('image', image.value.files[0]);
  formData.append('name', name.value);
  formData.append('description', description.value);
  formData.append('price', price.value);
  formData.append('stock', stock.value);

  await fetch(`${process.env.VUE_APP_BASE_URL}/api/product`, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 'error') {
        alert(data.message);
        isAddingProduct.value = false;
      } else {
        console.log(data);
        router.push({ name: 'Inventory' });
      }
    })
    .catch((err) => console.log(err));
};

const UpdateFileName = () => {
  filename.value = image.value.files[0].name;
};

</script>