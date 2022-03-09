<template>
  <button @click="handleClick">
    Clicked {{ count }}
    {{ count === 1 ? "time" : "times" }}
  </button>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
};
</script>
