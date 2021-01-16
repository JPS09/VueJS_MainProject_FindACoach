<template>
  <basecard>
    <h2>Find you Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Front End</label>
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Back End</label>
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </basecard>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        backend: true,
        frontend: true,
        career: true
      }
    };
  },
  methods: {
    setfilter(event) {
      const inputID = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters, //Merge this.filters into updatedFilters
        [inputID]: isActive //Accessing the key that was changed and updating it.
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
};
</script>
