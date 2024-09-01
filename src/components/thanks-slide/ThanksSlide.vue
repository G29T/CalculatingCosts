<template>
  <div class="thanks-container">
    <h3>
      Thank you for using the Bridge Sales Enablement Agency calculator. A
      representative will be in touch with you soon.
    </h3>
    <button class="restart-button" @click="handleRestart">Restart</button>
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
  methods: {
    handleRestart() {
      this.store.resetAllData();
      this.$emit("restart");
    },
  },
};
</script>

<style scoped>
.thanks-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  max-width: 500px;
  margin: auto;
}

h3 {
  color: red;
}

.restart-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 10px 10px;
  border-radius: 12px;
  background-color: red;
  font-size: 15px;
  color: white;
  border: none;
  max-height: 40px;
  max-width: fit-content;
  cursor: pointer;
  opacity: 0.8;
}

.restart-button:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .thanks-container {
    max-width: 50%;
  }
}

@media (min-width: 768px) {
  .thanks-container {
    max-width: 50%;
  }
}
</style>
