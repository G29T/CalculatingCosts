<template>
  <div class="orders-container">
    <label for="orders" class="orders-label"
      >Approximately how many unique purchase orders are raised per annum for
      these items?</label
    >
    <input
      id="orders"
      type="number"
      v-model="orders"
      placeholder="0"
      class="orders-input"
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
      orders: store.orders,
      store,
    };
  },
  watch: {
    orders(newValue) {
      this.store.setPurchasedOrders(newValue);
    },
  },
};
</script>

<style scoped>
.orders-container {
  display: flex;
  flex-direction: space-between;
  align-items: center;
  gap: 10px;
  max-width: 70%;
}

.orders-label {
  margin-right: 20px;
  color: red;
}

.orders-input {
  padding: 8px;
  border: none;
  border-radius: 12px;
  font-size: 25px;
}

@media (max-width: 768px) {
  .orders-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
  }

  .orders-label {
    font-size: 20px;
  }

  .orders-input {
    font-size: 15px;
    width: 50px;
  }
}

@media (min-width: 768px) {
  .orders-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
  }

  .orders-label {
    font-size: 20px;
  }

  .orders-input {
    font-size: 15px;
    width: 50px;
  }
}

@media (min-width: 1024px) {
  .orders-label {
    font-size: 30px;
  }

  .orders-input {
    font-size: 25px;
    width: 90px;
  }
}
</style>
