<template>
  <div class="notification" :class="type">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "info",
      validator: function(value) {
        // The value must match one of these strings
        return ["info", "error", "warning"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style scoped>
.notification {
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
  border-color: #f5c6cb;
}

.info {
  background-color: #cce5ff;
  color: #004085;
  border-color: #b8daff;
}

.warning {
  background-color: #fff3cd;
  color: #856404;
  border-color: #ffeeba;
}
</style>
