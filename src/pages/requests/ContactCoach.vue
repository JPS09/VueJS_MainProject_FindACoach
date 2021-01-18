<template>
  <form @submit.prevent>
    <div class="form-controls">
      <label for="useremail">Your E-Mail</label>
      <input type="email" id="useremail" />
    </div>
    <div class="form-controls">
      <label for="usermessage">Your message to the coach</label>
      <textarea name="message" id="usermessage" cols="20" rows="5"></textarea>
    </div>
    <div class="actions">
      <base-button mode="outline">Send</base-button>
    </div>
  </form>
</template>
