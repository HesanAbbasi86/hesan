<template>
  <div class="max-w-xl mx-auto mt-20 p-8 bg-gray-900 rounded-2xl text-center shadow-xl border border-gray-800">
    <h1 class="text-2xl font-bold text-white mb-2">خوش آمدید! 👋</h1>
<br>
    
    <div class="grid grid-cols-2 gap-4">
      <button 
        v-for="(btn, index) in toastStore.toastButtons" 
        :key="index"
        @click="toastStore.addToast(btn.message, btn.type, btn.position)"
        :class="['p-3 rounded-xl font-medium transition-all transform hover:scale-105 active:scale-95 text-white', btnStyles[btn.type]]"
      >
        تست {{ btn.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useToastStore } from '~/stores/toast'
const toastStore = useToastStore()

const btnStyles = {
  success: 'bg-green-600 hover:bg-green-500 shadow-lg shadow-green-900/40',
  error: 'bg-red-600 hover:bg-red-500 shadow-lg shadow-red-900/40',
  warning: 'bg-yellow-500 hover:bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-900/20',
  info: 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/40'
}
</script>
