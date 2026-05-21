<template>
  <div class="min-h-screen bg-[#020617] text-slate-200 flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30">
    <div class="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)] z-0"></div>

    <div v-if="currentPage === 'home'" class="relative z-10 flex flex-col items-center gap-10 w-full max-w-xl animate-in fade-in duration-1000">
      
      <button @click="currentPage = 'test'" class="group relative px-10 py-3 bg-slate-900 border border-slate-700 hover:border-indigo-500/50 text-white rounded-xl text-sm font-semibold transition-all duration-300">
        <span class="relative z-10">نوتیف تست </span>
        <div class="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
      </button>

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

    </div>

    <div v-else class="relative z-10 w-full flex justify-center animate-in zoom-in-95 duration-500">
      <NotificationTest @go-back="currentPage = 'home'" />
    </div>

    <ToastContainer :toasts="toastStore.toasts">
      
      <template #icon="{ toast }">
        <span v-if="toast.type === 'success'">🎉</span>
        <span v-else-if="toast.type === 'error'">❌</span>
        <span v-else-if="toast.type === 'warning'">⚠️</span>
        <span v-else-if="toast.type === 'info'">ℹ️</span>
      </template>

      <template #content="{ toast }">
        {{ toast.message }}
      </template>

      <template #close="{ toast }">
        <button @click="toastStore.removeToast(toast.id)" class="font-bold opacity-70 hover:opacity-100 transition-opacity">
          X
        </button>
      </template>

    </ToastContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToastStore } from '~/stores/toast'
import NotificationTest from '~/components/NotificationTest.vue'
import ToastContainer from '~/components/ToastContainer.vue'

const currentPage = ref('home')
const toastStore = useToastStore()
</script>
