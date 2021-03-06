<template>
  <div>
    <base-dialog fixed :show="isLoading" title="Authenticating">
      <p>Connecting to your account</p>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-dialog
      :show="!!error"
      title="Something went wrong"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-controls">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model.trim="email"
            @blur="clearErrors"
          />
        </div>
        <div class="form-controls">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model.trim="password"
            @blur="clearErrors"
          />
        </div>
        <p v-if="!isFormValid" :class="{ errors: !isFormValid }">
          At least one input is blank or your password is smaller than 6
          characters
        </p>
        <base-button>{{ actionButtonText }}</base-button>
        <base-button type="button" mode="flat" @click="switchMode">{{
          switchButtonText
        }}</base-button>
        <base-spinner v-if="isLoading"></base-spinner>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isFormValid: true,
      mode: 'login',
      error: null,
      isLoading: false
    };
  },
  computed: {
    actionButtonText() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Sign Up';
      }
    },
    switchButtonText() {
      if (this.mode === 'login') {
        return 'Sign Up instead';
      } else {
        return 'Login instead';
      }
    }
  },
  methods: {
    async submitForm() {
      this.isFormValid = true;

      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password == '' ||
        this.password.length < 6
      ) {
        this.isFormValid = false;
        return;
      }

      const user = {
        email: this.email,
        password: this.password
      };

      this.isLoading = true;

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('logIn', user);
        } else {
          await this.$store.dispatch('signUp', user);
        }
        this.isLoading = false;

        const redirectionPath = '/' + (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirectionPath);

      } catch (error) {
        this.isLoading = false;
        this.error =
          error.message ||
          'Something went wrong while creating your account, please try again';
      }
    },
    clearErrors() {
      this.isFormValid = true;
    },
    switchMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
      this.error = null;
    }
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
