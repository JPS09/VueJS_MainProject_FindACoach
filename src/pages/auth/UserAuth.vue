<template>
  <form>
    <div class="form-controls">
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="form-controls">
      <label for="password">E-mail</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <base-button>Login</base-button>
    <base-button type="button" mode="flat">Sign-up Instead</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  }
};
</script>
