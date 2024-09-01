<template>
  <div class="annual-spend-container">
    <label for="annual-spend" class="annual-spend-label">
      What is your approximate annual Spend on industrial items?
    </label>
    <input
      id="annual-spend"
      type="number"
      v-model.number="annualSpend"
      placeholder="0"
      class="annual-spend-input"
      min="0"
    />
  </div>
</template>

<script>
import { useDataStore } from "../../store/StoreData";

export default {
  data() {
    const store = useDataStore();
    return {
      store,
      annualSpend: store.annualSpend,
    };
  },
  watch: {
    annualSpend(newValue) {
      this.store.setAnnualSpend(newValue);
    },
  },
};
</script>

<style scoped>
.annual-spend-container {
  display: flex;
  flex-direction: space-between;
  align-items: center;
  gap: 10px;
  max-width: 70%;
}

.annual-spend-label {
  margin-right: 20px;
  color: red;
}

.annual-spend-input {
  padding: 8px;
  border: none;
  border-radius: 12px;
  font-size: 25px;
}

@media (max-width: 768px) {
  .annual-spend-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
  }

  .annual-spend-label {
    font-size: 20px;
  }

  .annual-spend-input {
    font-size: 15px;
    width: 50px;
  }
}

@media (min-width: 768px) {
  .annual-spend-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
  }

  .annual-spend-label {
    font-size: 20px;
  }

  .annual-spend-input {
    font-size: 15px;
    width: 50px;
  }
}

@media (min-width: 1024px) {
  .annual-spend-label {
    font-size: 30px;
  }

  .annual-spend-input {
    font-size: 25px;
    width: 90px;
  }
}
</style>
