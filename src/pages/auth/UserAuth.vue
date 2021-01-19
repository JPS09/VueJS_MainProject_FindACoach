<template>
  <base-card>
    <form>
      <div class="form-controls">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-controls">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <base-button>Login</base-button>
      <base-button type="button" mode="flat">Sign-up Instead</base-button>
    </form>
  </base-card>
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

<style scoped>
form {
  margin: 1rem;
}

.form-controls {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
