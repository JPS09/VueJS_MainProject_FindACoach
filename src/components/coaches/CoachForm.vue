<template>
  <form>
    <div class="form-controls">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" />
    </div>
    <div class="form-controls">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" />
    </div>
    <div class="form-controls">
      <label for="description">Description</label>
      <textarea id="description" rows="5" />
    </div>
    <div class="form-controls">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" />
    </div>
    <div class="form-controls">
      <h3>What do you want to teach our students?</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" />
        <label for="frontend"> Front-End Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" />
        <label for="backend"> Back-End Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" />
        <label for="career">Career Counseling</label>
      </div>
    </div>
  </form>
</template>
