<template>
  <button v-on="$listeners" class="a-button" :class="type"><slot /></button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary",
      validator: function(value) {
        // The value must match one of these strings
        return ["primary", "secondary"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style scoped>
.a-button {
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;

  color: white;
  border-radius: 2px;
  border-color: transparent;
  outline: none;
}

.primary {
  background-color: blue;
}

.primary:hover {
  background-color: darkblue;
}

.secondary {
  background-color: grey;
}

.secondary:hover {
  background-color: darkgrey;
}
</style>
