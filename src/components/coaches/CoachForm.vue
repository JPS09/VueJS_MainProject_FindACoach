<template>
  <form>
    <div class="form-controls">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model="firstName" />
    </div>
    <div class="form-controls">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model="lastName" />
    </div>
    <div class="form-controls">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model="description" />
    </div>
    <div class="form-controls">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate" />
    </div>
    <div class="form-controls">
      <h3>What do you want to teach our students?</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend"> Front-End Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend"> Back-End Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">Career Counseling</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      rate: null,
      description: '',
      areas: []
    };
  }
};
</script>
