<template>
  <div
    :class="['option', { selected: option.selected }]"
    @click="toggleSelection"
  >
    <div class="icon-container">
      <CheckCircleIcon class="icon" :id="`${id}-checked`" />
    </div>
    <label :for="id">
      {{ option.name }}
    </label>
    <span class="estimate">ESTIMATE £{{ option.estimate.toFixed(2) }}</span>
  </div>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/24/outline";

export default {
  components: {
    CheckCircleIcon,
  },
  props: {
    option: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleSelection() {
      this.$emit("update:selected", !this.option.selected);
    },
  },
};
</script>

<style scoped>
.option {
  display: flex;
  margin: 10px 0;
  font-size: 15px;
  align-items: center;
  padding: 10px 5px;
  border-radius: 12px;
  background-color: white;
  min-height: 48px;
  min-width: 250px;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.option:hover {
  background-color: purple;
  color: white;
}

.option.selected {
  background-color: purple;
  color: white;
}

.icon-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
  min-width: 24px;
}

.icon {
  width: 24px;
  height: 24px;
  color: purple;
  transition: color 0.3s ease;
}

.option:hover .icon {
  color: white;
}

.option.selected .icon {
  color: white;
}

span {
  font-size: 13px;
  margin-left: 10px;
}

.estimate {
  font-weight: bold;
  color: purple;
  margin-right: 5px;
}

.option:hover .estimate,
.option.selected .estimate {
  color: white;
}
</style>
