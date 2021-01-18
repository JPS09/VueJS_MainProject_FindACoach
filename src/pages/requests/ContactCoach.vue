<template>
  <form @submit.prevent>
    <div class="form-controls">
      <label for="useremail">Your E-Mail</label>
      <input type="email" id="useremail" v-model.trim="email.val" />
    </div>
    <div class="form-controls">
      <label for="usermessage">Your message to the coach</label>
      <textarea
        name="message"
        id="usermessage"
        cols="20"
        rows="5"
        v-model.trim="message.val"
      ></textarea>
    </div>
    <div class="actions">
      <base-button mode="outline">Send</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: { val: '', valid: true },
      message: { val: '', valid: true }
    };
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
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
