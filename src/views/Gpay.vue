<template>
  <div id="container">
    <button @click="payhtml">Pay</button>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Gpay',
  methods: {
    payhtml() {
      window.location.href = '/src/assets/gpay.html';
    },
  },
}
</script>
