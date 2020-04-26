<template>
  <div class="container my-16 w-full mx-auto">
    <div class="max-w-xs mx-auto">
      <h1 class="text-center text-gray-600">Register</h1>
      <div class="w-full bg-white shadow-lg mt-5 rounded p-8">
        <text-input :value="model.name" v-model="model.name" placeholder="Enter Username" />
        <text-input :value="model.email" v-model="model.email" placeholder="Enter Email" />
        <text-input :value="model.password" v-model="model.password" placeholder="Enter Password" />
        <button
          class="w-full text-sm mt-3 py-3 bg-pink-100 text-gray-500 rounded-sm shadow focus:outline-none hover:text-gray-700 hover:bg-pink-400"
        >Send Registration</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: {
      name: "",
      email: "",
      password: ""
    }
  })
};
</script>

<style>
</style>