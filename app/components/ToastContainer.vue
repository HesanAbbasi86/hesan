<script setup>
import { useToastStore } from '~/stores/toast'
const toastStore = useToastStore()
</script>

<template>
  <div>
    <div class="fixed top-5 right-5 z-50 flex flex-col gap-3 w-80">
      <div 
        v-for="toast in toastStore.toasts.filter(t => t.position === 'top-right')" 
        :key="toast.id"
        class="p-4 rounded-lg shadow-2xl text-white flex justify-between items-center bg-green-500 animate-bounce-short"
      >
        <span>{{ toast.message }}</span>
        <button @click="toastStore.removeToast(toast.id)" class="ml-2 font-bold opacity-70 hover:opacity-100">✕</button>
      </div>
    </div>

    <div class="fixed top-5 left-5 z-50 flex flex-col gap-3 w-80">
      <div 
        v-for="toast in toastStore.toasts.filter(t => t.position === 'top-left')" 
        :key="toast.id"
        class="p-4 rounded-lg shadow-2xl text-white flex justify-between items-center bg-red-500"
      >
        <span>{{ toast.message }}</span>
        <button @click="toastStore.removeToast(toast.id)" class="ml-2 font-bold opacity-70 hover:opacity-100">✕</button>
      </div>
    </div>

    <div class="fixed bottom-5 right-5 z-50 flex flex-col gap-3 w-80">
      <div 
        v-for="toast in toastStore.toasts.filter(t => t.position === 'bottom-right')" 
        :key="toast.id"
        class="p-4 rounded-lg shadow-2xl text-white flex justify-between items-center bg-yellow-500 text-gray-900 font-medium"
      >
        <span>{{ toast.message }}</span>
        <button @click="toastStore.removeToast(toast.id)" class="ml-2 font-bold opacity-70 hover:opacity-100">✕</button>
      </div>
    </div>

    <div class="fixed bottom-5 left-5 z-50 flex flex-col gap-3 w-80">
      <div 
        v-for="toast in toastStore.toasts.filter(t => t.position === 'bottom-left')" 
        :key="toast.id"
        class="p-4 rounded-lg shadow-2xl text-white flex justify-between items-center bg-blue-500"
      >
        <span>{{ toast.message }}</span>
        <button @click="toastStore.removeToast(toast.id)" class="ml-2 font-bold opacity-70 hover:opacity-100">✕</button>
      </div>
    </div>
  </div>
</template>