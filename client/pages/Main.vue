<template>
  <div>
    <div class="h-2 w-full bg-gray-700"></div>
    <div class="w-full h-12 flex items-center justify-between px-6">
      <router-link to="/" class="text-pink-400 hover:text-pink-600">Moonshine</router-link>
      <div>
        <router-link class="px-2 py-1 rounded-sm ml-3 bg-pink-200 text-gray-500 rounded-sm shadow focus:outline-none hover:text-gray-700 hover:bg-pink-400" to="/auth/login">Sign In</router-link>
        <router-link class="px-2 py-1 rounded-sm ml-3 bg-pink-200 text-gray-500 rounded-sm shadow focus:outline-none hover:text-gray-700 hover:bg-pink-400" to="/auth/register">Register Account</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>