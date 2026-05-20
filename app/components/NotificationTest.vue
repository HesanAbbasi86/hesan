<template>
  <div class="flex flex-col items-center justify-center p-8 bg-white border border-slate-200 rounded-xl max-w-sm w-full text-center shadow-sm">
    <h2 class="text-xl font-medium text-slate-800">تست نوتیفیکیشن</h2>
    <button 
      @click="$emit('go-back')" 
      class="mt-6 text-xs text-slate-500 hover:text-slate-800 transition-colors border border-slate-200 px-4 py-1.5 rounded-md hover:bg-slate-50"
    >
      برگشت به اصلی
    </button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useToastStore } from '~/stores/toast'

const toastStore = useToastStore()

onMounted(() => {
  setTimeout(() => {
    toastStore.addToast(toastStore.englishAlert, 'automated', 'top-center')
  }, 1000)
})
</script>
