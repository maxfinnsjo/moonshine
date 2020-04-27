<template>
  <div class="container my-16 w-full mx-auto">
    <div class="max-w-xs mx-auto">
      <h1 class="text-center text-gray-600">Register</h1>
      <div class="w-full bg-white shadow-lg mt-5 rounded p-8">
        <text-input
          name="name"
          :value="model.name"
          v-model="model.name"
          v-validate="'required'"
          placeholder="Enter Username"
          :error="errors.first('name')"
        />
        <text-input
          name="email"
          :value="model.email"
          v-model="model.email"
          v-validate="'required|email'"
          placeholder="Enter Email"
          :error="errors.first('email')"
        />
        <text-input
          type="password"
          name="password"
          :value="model.password"
          v-model="model.password"
          v-validate="'required|min:6'"
          :error="errors.first('password')"
          placeholder="Enter Password"
        />
        <button
          @click="register"
          class="w-full text-sm mt-3 py-3 bg-pink-100 text-gray-500 rounded-sm shadow focus:outline-none hover:text-gray-700 hover:bg-pink-400"
        >Send Registration</button>
      </div>
    </div>
  </div>
</template>

<script>
import { POST_REGISTER } from "@store/auth/actions";
export default {
  data: () => ({
    model: {
      name: "",
      email: "",
      password: ""
    }
  }),
  methods: {
    register() {
      this.$validator.validate().then(isValid => {
        if (!isValid) {
          return;
        }
        this.$store.dispatch(POST_REGISTER, this.model);
      });
    }
  }
};
</script>

<style>
</style>