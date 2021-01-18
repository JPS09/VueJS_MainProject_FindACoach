<template>
  <form @submit.prevent="submitForm">
    <div class="form-controls" :class="{ invalid: !firstName.valid }">
      <label for="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearError('firstName')"
      />
      <p v-if="!firstName.valid">
        This input cannot be blank, please enter a first name. (We know you have
        one)
      </p>
    </div>
    <div class="form-controls" :class="{ invalid: !lastName.valid }">
      <label for="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearError('lastName')"
      />
      <p v-if="!lastName.valid">
        This input cannot be blank, please enter a last name. (We know you have
        one)
      </p>
    </div>
    <div class="form-controls" :class="{ invalid: !description.valid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearError('description')"
      />
      <p v-if="!description.valid">
        This input cannot be blank, please tell us a bit about you
      </p>
    </div>
    <div class="form-controls" :class="{ invalid: !rate.valid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearError('rate')"
      />
      <p v-if="!rate.valid">
        You cannot enter a negative value or leave this blank, you need to be
        paid for your services
      </p>
    </div>
    <div class="form-controls" :class="{ invalid: !areas.valid }">
      <h3>What do you want to teach our students?</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearError('areas')"
        />
        <label for="frontend">Front-End Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearError('areas')"
        />
        <label for="backend">Back-End Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearError('areas')"
        />
        <label for="career">Career Counseling</label>
      </div>
      <p v-if="!areas.valid">Please select at least one choice</p>
    </div>
    <p v-if="!formIsValid">Check your inputs and try to submit again</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['register-coach'],
  data() {
    return {
      firstName: {
        val: '',
        valid: true
      },
      lastName: {
        val: '',
        valid: true
      },
      rate: {
        val: null,
        valid: true
      },
      description: {
        val: '',
        valid: true
      },
      areas: {
        val: [],
        valid: true
      },
      formIsValid: true
    };
  },
  methods: {
    clearError(input) {
      this[input].valid = true;
    },
    validateForm() {
      this.formIsValid = true;
      this.firstName.val === ''
        ? ((this.firstName.valid = false), (this.formIsValid = false))
        : (this.firstName.valid = true);
      this.lastName.val === ''
        ? ((this.lastName.valid = false), (this.formIsValid = false))
        : (this.lastName.valid = true);
      !this.rate.val || this.rate.val < 0
        ? ((this.rate.valid = false), (this.formIsValid = false))
        : (this.rate.valid = true);
      this.description.val === ''
        ? ((this.description.valid = false), (this.formIsValid = false))
        : (this.description.valid = true);
      this.areas.val.length === 0
        ? ((this.areas.valid = false), (this.formIsValid = false))
        : (this.areas.valid = true);
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        areas: this.areas.val,
        rate: this.rate.val
      };
      this.$emit('register-coach', formData);
    }
  }
};
</script>

<style scoped>
.form-controls {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label,
.invalid h3 {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
