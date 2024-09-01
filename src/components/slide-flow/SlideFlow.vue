<template>
  <div>
    <h1>CALCULATING YOUR TOTAL COSTS</h1>
    <div v-if="currentStep === 'costCalculator'" class="cost-calculator">
      <div class="cost-option">
        <CostOption
          v-for="(option, index) in this.store.options"
          :key="index"
          :option="option"
          :id="`option-${index}`"
          @update:selected="updateOption(index, $event)"
        />
      </div>
      <div class="total-continue-container">
        <TotalCost :totalCost="totalCost" class="total-cost" />
        <button class="continue-button" @click="handleContinue">
          Continue
          <ArrowRightCircleIcon
            class="arrow-right-circle"
          ></ArrowRightCircleIcon>
        </button>
      </div>
    </div>
    <div
      v-else-if="
        currentStep === 'annualSpend' ||
        currentStep === 'uniquePurchaseOrders' ||
        currentStep === 'suppliersNumber'
      "
    >
      <SlideQuestions
        :showArrows="showArrows"
        :currentPageComponent="currentPageComponent"
        :currentPage="currentPage"
        @prev-page="prevPage"
        @next-page="nextPage"
      />
    </div>

    <div v-else-if="currentStep === 'computationResults'">
      <ComputationResults
        :handleGoBack="handleGoBack"
        :handleSendReport="handleSendReport"
      />
    </div>

    <div v-else-if="currentStep === 'thanksSlide'">
      <ThanksSlide @restart="navigateToCostCalculator" />
    </div>
  </div>
</template>

<script>
import CostOption from "../cost-option/CostOption.vue";
import TotalCost from "../total-cost/TotalCost.vue";
import SlideQuestions from "../slide-questions/SlideQuestions.vue";
import ComputationResults from "../results/ComputationResults.vue";
import AnnualSpend from "../annual-spend/AnnualSpend.vue";
import UniquePurchaseOrders from "../unique-purchase/UniquePurchaseOrders.vue";
import SuppliersNumber from "../suppliers/SuppliersNumber.vue";
import ThanksSlide from "../thanks-slide/ThanksSlide.vue";
import { useDataStore } from "../../store/StoreData";
import { ArrowRightCircleIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    CostOption,
    TotalCost,
    SlideQuestions,
    ComputationResults,
    ThanksSlide,
    ArrowRightCircleIcon,
  },
  data() {
    const store = useDataStore();
    return {
      store,
      currentStep: "costCalculator",
      pages: ["AnnualSpend", "UniquePurchaseOrders", "SuppliersNumber"],
      currentPageIndex: 0,
    };
  },
  computed: {
    totalCost() {
      return this.store.options
        .filter((option) => option.selected)
        .reduce((sum, option) => sum + option.estimate, 0);
    },
    currentPage() {
      return this.pages[this.currentPageIndex];
    },
    currentPageComponent() {
      switch (this.currentPage) {
        case "AnnualSpend":
          return AnnualSpend;
        case "UniquePurchaseOrders":
          return UniquePurchaseOrders;
        case "SuppliersNumber":
          return SuppliersNumber;
        default:
          return null;
      }
    },
    showArrows() {
      return (
        this.currentStep === "annualSpend" ||
        this.currentStep === "uniquePurchaseOrders" ||
        this.currentStep === "suppliersNumber"
      );
    },
  },
  methods: {
    handleContinue() {
      this.currentStep = "annualSpend";
      this.currentPageIndex = 0;
    },
    prevPage() {
      if (this.currentStep === "annualSpend") {
        this.currentStep = "costCalculator";
      } else if (this.currentStep === "uniquePurchaseOrders") {
        this.currentStep = "annualSpend";
        this.currentPageIndex = this.pages.indexOf("AnnualSpend");
      } else if (this.currentStep === "suppliersNumber") {
        this.currentStep = "uniquePurchaseOrders";
        this.currentPageIndex =
          (this.currentPageIndex - 1 + this.pages.length) % this.pages.length;
      }
    },
    nextPage() {
      if (this.currentPageIndex === this.pages.length - 1) {
        this.currentStep = "computationResults";
      } else if (this.currentStep === "annualSpend") {
        this.currentStep = "uniquePurchaseOrders";
        this.currentPageIndex = this.pages.indexOf("UniquePurchaseOrders");
      } else if (this.currentStep === "uniquePurchaseOrders") {
        this.currentStep = "suppliersNumber";
        this.currentPageIndex = this.pages.indexOf("SuppliersNumber");
      }
    },
    updateOption(index, isSelected) {
      this.store.updateOption(index, isSelected);
    },
    handleGoBack() {
      this.currentStep = "suppliersNumber";
      this.currentPageIndex = 2;
    },
    handleSendReport() {
      this.currentStep = "thanksSlide";
    },
    navigateToCostCalculator() {
      this.currentStep = "costCalculator";
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 100px;
  margin-bottom: 100px;
  color: red;
}

.cost-calculator {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin: auto;
  text-align: center;
  margin-bottom: 100px;
}

.cost-option {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.cost-option > * {
  flex: 1 1 calc(33.33% - 20px);
  max-width: calc(33.33% - 20px);
  box-sizing: border-box;
}

.cost-option > *:nth-child(3n + 1) {
  margin-left: 0;
}

.cost-option > *:nth-child(3n) {
  margin-right: 0;
}

.continue-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 10px 5px;
  border-radius: 12px;
  background-color: red;
  font-size: 15px;
  color: white;
  border: none;
  max-height: 40px;
  margin-right: 10px;
  cursor: pointer;
  opacity: 0.8;
}

.continue-button:hover {
  opacity: 1;
}

.arrow-right-circle {
  width: 24px;
  height: 24px;
}

.total-continue-container {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.total-cost {
  margin: auto;
}

@media (max-width: 768px) {
  .cost-calculator {
    margin-bottom: 100px;
  }
}

@media (min-width: 768px) {
  .cost-calculator {
    margin-bottom: 100px;
  }
}
</style>
