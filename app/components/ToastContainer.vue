<template>
  <div class="fixed inset-0 z-50 pointer-events-none">
    
    <div class="fixed top-5 left-1/2 -translate-x-1/2 flex flex-col gap-2">
      <div v-for="toast in toasts.filter(t => t.position === 'top-center')" :key="toast.id"
           class="pointer-events-auto p-3 bg-slate-900 border border-slate-800 text-slate-300 text-xs min-w-[200px] text-center rounded-md shadow-md">
        
        <slot name="content" :toast="toast"></slot>
      </div>
    </div>

    <div v-for="pos in ['top-right', 'top-left', 'bottom-right', 'bottom-left']" :key="pos"
         :class="['fixed flex flex-col gap-2 p-4', positionClasses[pos]]">
      
      <div v-for="toast in toasts.filter(t => t.position === pos)" :key="toast.id"
           :class="['pointer-events-auto p-3 rounded-md text-white text-xs w-64 flex justify-between items-center shadow-md transition-all duration-500', themeMap[toast.type] || 'bg-slate-700']">
        
        <div class="flex-shrink-0 mr-1">
          <slot name="icon" :toast="toast"></slot>
        </div>

        <div class="flex-1 mx-2 text-right">
          <slot name="content" :toast="toast"></slot>
        </div>

        <div class="ml-2">
          <slot name="close" :toast="toast"></slot>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  toasts: {
    type: Array,
    required: true
  }
})

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
