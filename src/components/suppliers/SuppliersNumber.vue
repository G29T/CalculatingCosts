<template>
  <div class="suppliers-container">
    <label for="suppliers" class="suppliers-label"
      >Approximately how many suppliers are you using for industrial
      supplies?</label
    >
    <input
      id="suppliers"
      type="number"
      v-model.number="suppliers"
      placeholder="0"
      class="suppliers-input"
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
      suppliers: store.suppliers,
      store,
    };
  },
  watch: {
    suppliers(newValue) {
      this.store.setSuppliers(newValue);
    },
  },
};
</script>

<style scoped>
.suppliers-container {
  display: flex;
  flex-direction: space-between;
  align-items: center;
  gap: 10px;
  max-width: 70%;
}

.suppliers-label {
  margin-right: 20px;
  color: red;
}

.suppliers-input {
  padding: 8px;
  border: none;
  border-radius: 12px;
  font-size: 25px;
}

@media (max-width: 768px) {
  .suppliers-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
  }

  .suppliers-label {
    font-size: 20px;
  }

  .suppliers-input {
    font-size: 15px;
    width: 50px;
  }
}

@media (min-width: 768px) {
  .suppliers-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
  }

  .suppliers-label {
    font-size: 20px;
  }

  .suppliers-input {
    font-size: 15px;
    width: 50px;
  }
}

@media (min-width: 1024px) {
  .suppliers-label {
    font-size: 30px;
  }

  .suppliers-input {
    font-size: 25px;
    width: 90px;
  }
}
</style>
