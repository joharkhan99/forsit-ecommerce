<template>
  <div>
    <h2 class="text-xl font-semibold mb-10 text-gray-900">Inventory Management</h2>

    <div class="bg-white shadow-lg shadow-gray-200 rounded-xl p-3 py-5">

      <!-- search bar -->
      <div class="mb-4 text-sm">
        <input type="text" placeholder="Search products..." class="max-w-sm w-full border rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent" required />
      </div>

      <!-- filters -->
      <div class="flex gap-10 items-center mb-4 text-sm border-b pb-4 border-gray-100">
        <div>
          <label for="sortBy" class="text-gray-600 font-semibold mb-1 block">Sort by:</label>
          <select id="sortBy" class="block border text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent">
            <option value="name">Name Asc</option>
            <option value="name">Name Desc</option>
            <option value="price">Price Asc</option>
            <option value="price">Price Desc</option>
          </select>
        </div>
        <div>
          <label for="filterBy" class="text-gray-600 font-semibold mb-1 block">Filter by:</label>
          <select id="filterBy" class="block border text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-blue-500 focus:ring-2 bg-gray-100 focus:bg-transparent">
            <option value="all">All Products</option>
            <option value="lowInventory">Low Inventory</option>
            <option value="lowInventory">Average Inventory</option>
            <option value="lowInventory">High Inventory</option>
          </select>
        </div>
      </div>

      <!-- product list/table -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-center">
              <th scope="col" class="text-sm font-semibold text-gray-900">S.No</th>
              <th scope="col" class="text-sm font-semibold text-gray-900">Product Name</th>
              <th scope="col" class="text-sm font-semibold text-gray-900">Description</th>
              <th scope="col" class="text-sm font-semibold text-gray-900">Price</th>
              <th scope="col" class="text-sm font-semibold text-gray-900">Stock</th>
              <th scope="col" class="text-sm font-semibold text-gray-900">Inventory</th>
              <th scope="col" class="text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr class="text-sm text-gray-900">
              <td>1</td>
              <td>product.name</td>
              <td>product.description</td>
              <td>120</td>
              <td>Stock</td>
              <td>High</td>
              <td>
                <button class="bg-blue-500 text-white rounded-md p-1 px-2 hover:bg-blue-600">
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