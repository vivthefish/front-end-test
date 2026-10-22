<!--
  TASK: Centered Card Row
  Display the provided array of objects as cards in a centered row using Tailwind.

  Requirements:
  1. Make the cards sit in a horizontally centered row that wraps on smaller screens, with spacing between them.
  2. Loop over the items with a proper key, rendering one card per object.
  3. Display each item's category, title and description in its card.
-->

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [
      { id: 1, title: 'Card One', description: 'Short description for the first card.', category: 'Design' },
      { id: 2, title: 'Card Two', description: 'Short description for the second card.', category: 'Frontend' },
      { id: 3, title: 'Card Three', description: 'Short description for the third card.', category: 'Backend' },
    ],
  },
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <!-- TODO: add Tailwind classes to make this a centered, wrapping row with spacing between cards -->
    <div class="max-w-6xl">
      <!-- TODO: loop over props.items with a proper key -->
      <article class="w-72 rounded-xl bg-white p-6 shadow-md">
        <span class="inline-block mb-3 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          <!-- TODO: category -->
        </span>
        <h2 class="text-xl font-semibold text-gray-800"><!-- TODO: title --></h2>
        <p class="mt-2 text-gray-600"><!-- TODO: description --></p>
      </article>
    </div>
  </section>
</template>
