<template>
  <div>
    <div class="h-2 w-full bg-gray-700"></div>
    <div class="w-full h-12 flex items-center justify-between px-6">
      <div class="text-pink-600">Moonshine</div>
      <div>
        <router-link class="text-orange-500" to="/auth/login">Sign In</router-link>
        <router-link class="text-orange-500 border-2 p-1 border-orange-500 ml-3" to="/auth/register">Register Account</router-link>
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