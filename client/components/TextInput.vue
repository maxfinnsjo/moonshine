<template>
  <input
    type="text"
    :value="value"
    class="w-full bg-gray-100 p-2 focus:outline-none hover:bg-pink-100 focus:bg-pink-300 text-gray-700 text-xs mb-3"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    value: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style>
</style>