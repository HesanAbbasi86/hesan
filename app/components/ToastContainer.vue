<template>
  <div class="fixed inset-0 z-50 pointer-events-none">
    <div 
      v-for="pos in ['top-right', 'top-left', 'bottom-right', 'bottom-left']" 
      :key="pos"
      :class="['fixed flex flex-col gap-3 w-80 p-5', positionClasses[pos]]"
    >
      <slot 
        :toasts="getFormattedToasts(pos)" 
        :remove="toastStore.removeToast" 
      />
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
  success: 'bg-green-500 text-white animate-bounce-short',
  error: 'bg-red-500 text-white',
  warning: 'bg-yellow-500 text-gray-900 font-medium',
  info: 'bg-blue-500 text-white'
}

const getFormattedToasts = (position) => {
  return toastStore.toasts
    .filter(t => t.position === position)
    .map(t => ({
      ...t,
      styleClass: themeMap[t.type] || themeMap.info
    }))
}
</script>
