

<script>


export default {
  setup() {

  },
  props: {
    input_type: String
  },
  name: "input_box"
}
</script>

<style scoped>
.inputbox {
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #1e2124;
  color: aliceblue;
  font-size: 16px;
}
</style>


<template>
    <input v-bind:type="input_type" class="inputbox">
</template>