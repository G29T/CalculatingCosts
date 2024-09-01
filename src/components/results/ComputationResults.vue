<template>
  <div class="container">
    <div class="text">
      <h3>
        By utilising the Bridge Sales Enablement Agency calculator organisations
        can simplify the processes associated with indirect procurement and
        unlock significant typical savings of up to 60% of process costs.
      </h3>
      <p>
        Based on what you have told us about your process we can estimate that
        the following costs are being incurred within your procurement
        processes.
      </p>
      <button class="go-back" @click="handleGoBack">
        <ArrowLeftCircleIcon class="arrow-left-icon"></ArrowLeftCircleIcon>Go
        Back
      </button>
    </div>
    <div class="reuslts-container">
      <div class="results">
        <p>
          Supplier & product <span>£{{ supplierProduct() }}</span>
        </p>
        <p>
          Quotation to order process
          <span>£{{ quotationAndOrderProcess() }}</span>
        </p>
        <p>
          Expediting & receiving orders
          <span>£{{ expeditingReceivingOrders() }}</span>
        </p>
        <p>
          Processing invoices <span>£{{ processingInvoices() }}</span>
        </p>
        <p>
          Paying suppliers <span>£{{ payingSuppliers() }}</span>
        </p>
        <p class="total-costs">
          Total Process Costs (year) <span>£{{ totalProcessCosts() }}</span>
        </p>
      </div>
      <button class="send-report" @click="handleSendReport">
        Send me this report
      </button>
    </div>
  </div>
</template>

<script>
import { useDataStore } from "../../store/StoreData";
import { storeToRefs } from "pinia";
import { ArrowLeftCircleIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    ArrowLeftCircleIcon,
  },
  props: {
    handleGoBack: {
      type: Function,
      required: true,
    },
    handleSendReport: {
      type: Function,
      required: true,
    },
  },
  data() {
    const store = useDataStore();
    const { annualSpend, orders, suppliers, totalCost } = storeToRefs(store);

    return {
      annualSpend,
      orders,
      suppliers,
      totalCost,
      currentStep: "computationResults",
      options: [
        { name: "Identify requirements", estimate: 6.0, selected: true },
        { name: "Raise an order", estimate: 6.0, selected: true },
        { name: "Deliver product", estimate: 4.3, selected: true },
        { name: "Request a quotation", estimate: 3.0, selected: true },
        { name: "Authorise sale", estimate: 21.55, selected: true },
        { name: "Invoice check", estimate: 6.0, selected: true },
        { name: "Find products", estimate: 16.0, selected: true },
        { name: "Pay provider", estimate: 13.0, selected: true },
        { name: "Place order", estimate: 6.5, selected: true },
      ],
    };
  },
  methods: {
    supplierProduct() {
      return (
        (this.options[0].estimate + this.options[3].estimate) * this.orders
      );
    },
    quotationAndOrderProcess() {
      return (
        (this.options[1].estimate +
          this.options[4].estimate +
          this.options[6].estimate +
          this.options[7].estimate) *
        this.orders
      );
    },
    expeditingReceivingOrders() {
      return this.options[2].estimate * this.annualSpend;
    },
    processingInvoices() {
      return this.options[5].estimate * this.orders;
    },
    payingSuppliers() {
      return this.options[8].estimate * this.suppliers;
    },
    totalProcessCosts() {
      const supplierProduct = this.supplierProduct();
      const quotationAndOrderProcess = this.quotationAndOrderProcess();
      const expeditingReceivingOrders = this.expeditingReceivingOrders();
      const processingInvoices = this.processingInvoices();
      const payingSuppliers = this.payingSuppliers();

      return (
        supplierProduct +
        quotationAndOrderProcess +
        expeditingReceivingOrders +
        processingInvoices +
        payingSuppliers
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.text {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  max-width: 500px;
}

h3 {
  color: red;
}

.reuslts-container {
  margin-left: 40px;
}

.results p {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 70px;
  align-items: center;
  margin: 10px 0;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 12px;
  background: linear-gradient(to right, white 60%, red 40%);
  min-height: 48px;
  min-width: 250px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.results span {
  font-weight: bold;
  color: white;
}

.total-costs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 70px;
  align-items: center;
  margin: 10px 0;
  font-size: 15px;
  color: white;
  padding: 10px 15px;
  border-radius: 12px;
  background: linear-gradient(to right, purple 60%, white 40%) !important;
  min-height: 48px;
  min-width: 250px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.total-costs span {
  font-weight: bold;
  color: purple;
}

.go-back {
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

.go-back:hover {
  opacity: 1;
}

.arrow-left-icon {
  width: 24px;
  height: 24px;
}

.send-report {
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

.send-report:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin-bottom: 100px;
  }
}

@media (min-width: 768px) {
  .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin-bottom: 100px;
  }
}

@media (min-width: 1024px) {
  .container {
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
}
</style>
