<template>
  <div class="min-h-screen bg-[#020617] text-slate-200 flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30">
    
    <div class="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)] z-0"></div>

    <div v-if="currentPage === 'home'" class="relative z-10 flex flex-col items-center gap-10 w-full max-w-xl animate-in fade-in duration-1000">
  
      
      <button 
        @click="currentPage = 'test'"
        class="group relative px-10 py-3 bg-slate-900 border border-slate-700 hover:border-indigo-500/50 text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-xl"
      >
        <span class="relative z-10">vorod</span>
        <div class="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
      </button>

      <Welcome />
    </div>

    <div v-else class="relative z-10 w-full flex justify-center animate-in zoom-in-95 duration-500">
      <NotificationTest @go-back="currentPage = 'home'" />
    </div>

    <ToastContainer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Welcome from '~/components/Welcome.vue'
import NotificationTest from '~/components/NotificationTest.vue'
import ToastContainer from '~/components/ToastContainer.vue'

const currentPage = ref('home')
</script>
