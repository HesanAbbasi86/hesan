<template>
  <div class="min-h-screen bg-gray-950 p-6">
    
    <ToastContainer v-slot="{ toasts, remove }">
      <div 
        v-for="toast in toasts" 
        :key="toast.id" 
        :class="['p-4 rounded-lg shadow-2xl flex justify-between items-center pointer-events-auto transition-all', toast.styleClass]"
      >
        <span>{{ toast.message }}</span>
        <button @click="remove(toast.id)" class="ml-4 font-bold opacity-75 hover:opacity-100">✕</button>
      </div>
    </ToastContainer>

    <Welcome />
    
  </div>
</template>

<script setup>
import ToastContainer from '~/components/ToastContainer.vue'
import Welcome from '~/components/Welcome.vue'
</script>
