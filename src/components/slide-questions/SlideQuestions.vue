<template>
  <div class="slider">
    <button v-if="showArrows" @click="prevPage" class="arrow left">‹</button>
    <div class="page">
      <component
        :is="currentPageComponent"
        :key="currentPage"
        style="margin-left: 10px; margin-right: 10px"
      ></component>
    </div>
    <button v-if="showArrows" @click="nextPage" class="arrow right">›</button>
  </div>
</template>

<script>
export default {
  props: {
    showArrows: {
      type: Boolean,
      required: true,
    },
    currentPageComponent: {
      type: Object,
      required: true,
    },
    currentPage: {
      type: String,
      required: true,
    },
  },
  methods: {
    prevPage() {
      this.$emit("prev-page");
    },
    nextPage() {
      this.$emit("next-page");
    },
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow {
  position: absolute;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
}

.arrow.left {
  left: 50px;
}

.arrow.right {
  right: 50px;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
