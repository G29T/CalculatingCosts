<template>
  <div class="total">
    <h3>TOTAL £{{ totalCost.toFixed(2) }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    totalCost: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.total {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 15px;
  padding: 5px 5px;
  border-radius: 12px;
  background-color: white;
  color: red;
  min-width: 200px;
  max-height: 40px;
}
</style>
