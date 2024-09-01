import { defineStore } from 'pinia';

export const useDataStore = defineStore('store data', {
  state: () => ({ annualSpend: 0, orders: 0, suppliers: 0, totalCost: 0, 
    options: [
      { name: 'Identify requirements', estimate: 6.0, selected: false },
      { name: 'Raise an order', estimate: 6.0, selected: false },
      { name: 'Deliver product', estimate: 4.3, selected: false },
      { name: 'Request a quotation', estimate: 3.0, selected: false },
      { name: 'Authorise sale', estimate: 21.55, selected: false },
      { name: 'Invoice check', estimate: 6.0, selected: false },
      { name: 'Find products', estimate: 16.0, selected: false },
      { name: 'Pay provider', estimate: 13.0, selected: false },
      { name: 'Place order', estimate: 6.5, selected: false },
    ], 
  }),
  actions: {
    setAnnualSpend(value) {
      this.annualSpend = value;
    },
    setPurchasedOrders(value) {
      this.orders = value;
    },
    setSuppliers(value) {
      this.suppliers = value;
    },
    setTotalCost(value) {
      this.totalCost = value;
    },
    updateOption(index, selected) {
      this.options[index].selected = selected;
    },
    setAllOptionsSelected(selected) {
      this.options.forEach(option => {
        option.selected = selected;
      });
    },
    resetAllOptions() {
      this.setAllOptionsSelected(false);
    },
    resetAllData() {
      this.annualSpend = 0;
      this.orders = 0;
      this.suppliers = 0;
      this.totalCost = 0;
      this.resetAllOptions();

    }
  },
})