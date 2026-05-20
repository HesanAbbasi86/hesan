<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full">
    <button 
      v-for="(btn, index) in toastStore.toastButtons" 
      :key="index"
      @click="toastStore.addToast(btn.message, btn.type, btn.position)" 
      :class="[
        'p-4 bg-slate-800/80 border-2 rounded-xl shadow-lg font-medium transition-all transform hover:scale-105 text-center',
        {
          'border-green-500 text-green-400 hover:bg-green-500/10': btn.type === 'success',
          'border-red-500 text-red-400 hover:bg-red-500/10': btn.type === 'error',
          'border-yellow-500 text-yellow-400 hover:bg-yellow-500/10': btn.type === 'warning',
          'border-blue-500 text-blue-400 hover:bg-blue-500/10': btn.type === 'info'
        }
      ]"
    >
      {{ btn.label }}
    </button>
  </div>
</template>

<script setup>
import { useToastStore } from '~/stores/toast'
const toastStore = useToastStore()
</script>
