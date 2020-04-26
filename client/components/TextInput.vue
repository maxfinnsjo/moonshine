<template>
  <div class="mb-3">
    <input
      type="text"
      :name="name"
      :value="value"
      @focus="$emit('fo cus')"
      @blur="$emit('blur')"
      :placeholder="placeholder"
      @change="$emit('input', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      class="w-full bg-gray-100 p-2 focus:outline-none hover:bg-pink-100 focus:bg-pink-300 text-gray-700 text-xs"
    />
    <span v-if="error" class="text-xs text-red-700">{{ error }}</span>
  </div>
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
    },
    name: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    }
  }
};
</script>

<style>
</style>