<!--
  TASK: Counter Button
  Implement a button that increments a counter each time it is clicked.

  Requirements:
  1. Complete the increment function so it increases the count by 1.
  2. Display the current count on the page.
  3. Bind the button so clicking it calls increment.
-->

<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  // TODO: increase the count by 1
}
</script>

<template>
  <div>
    <!-- TODO: display the count -->
    <p></p>

    <!-- TODO: bind the click event to increment -->
    <button type="button">
      Increment
    </button>
  </div>
</template>
