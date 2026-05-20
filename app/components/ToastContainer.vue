<template>
  <div class="fixed inset-0 z-50 pointer-events-none">
    
    <div class="fixed top-5 left-1/2 -translate-x-1/2 flex flex-col gap-2">
      <div 
        v-for="toast in toastStore.toasts.filter(t => t.position === 'top-center')" 
        :key="toast.id" 
        class="pointer-events-auto p-3 bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded shadow-md min-w-[200px] text-center"
      >
        {{ toast.message }}
      </div>
    </div>

    <div v-for="pos in ['top-right', 'top-left', 'bottom-right', 'bottom-left']" :key="pos" :class="['fixed flex flex-col gap-2 p-4', positionClasses[pos]]">
      <div 
        v-for="toast in toastStore.toasts.filter(t => t.position === pos)" 
        :key="toast.id" 
        :class="['pointer-events-auto p-3 rounded text-white text-xs w-64 flex justify-between items-center', themeMap[toast.type] || 'bg-slate-700']"
      >
        <span>{{ toast.message }}</span>
        <button @click="toastStore.removeToast(toast.id)" class="ml-2 font-bold opacity-70 hover:opacity-100">✕</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useToastStore } from '~/stores/toast'
const toastStore = useToastStore()

const positionClasses = {
  'top-right': 'top-0 right-0',
  'top-left': 'top-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  'bottom-left': 'bottom-0 left-0'
}

const themeMap = {
  success: 'bg-green-600',
  error: 'bg-red-600',
  warning: 'bg-yellow-600 text-slate-900',
  info: 'bg-blue-600'
}
</script>
