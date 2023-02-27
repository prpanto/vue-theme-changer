<template>
  <Popover v-if="tooltip" class="relative flex items-center bg-white rounded-full p-1">
    <PopoverButton
      class="p-3 rounded-full focus:outline-none"
      :style="{ backgroundColor: currentColor[500] }"
    ></PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute top-7 left-1/2 z-10 mt-3 px-2 py-1 flex space-x-1 bg-white rounded-full shadow-md transform -translate-x-1/2">
        <button
          class="rounded-full"
          v-for="(themeColor, index) in themeColors"
          :key="`theme-changer-${index}`"
          :class="[currentColor[500] === colors[themeColor][500] ? 'p-1' : 'p-3']"
          :style="{ backgroundColor: colors[themeColor][500] }"
          @click="$emit('color', colors[themeColor])"
        >
          <svg v-if="currentColor[500] === colors[themeColor][500]" class="text-white w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
          </svg>
        </button>
      </PopoverPanel>
    </transition>
  </Popover>

  <div v-else class="flex space-x-1 bg-white rounded-full px-2 py-1">
    <button
      class="rounded-full"
      v-for="(themeColor, index) in themeColors"
      :key="`theme-changer-${index}`"
      :class="[currentColor[500] === colors[themeColor][500] ? 'p-1' : 'p-3']"
      :style="{ backgroundColor: colors[themeColor][500] }"
      @click="$emit('color', colors[themeColor])"
    >
      <svg v-if="currentColor[500] === colors[themeColor][500]" class="text-white w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import colors from 'tailwindcss/colors'

defineProps({
  themeColors: Array,
  tooltip: Boolean,
  currentColor: [Object, Array]
})

defineEmits(['color'])
</script>
