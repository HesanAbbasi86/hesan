import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [],
 toastButtons: [
  {
    label: 'Success ',
    message: 'عملیات با موفقیت انجام شد! 🎉',
    type: 'success',
    position: 'top-right',
    
    className: 'bg-slate-800/80 border-2 border-green-500 text-green-400 hover:bg-green-500/10'
  },
  {
    label: 'Error ',
    message: 'خطایی در اتصال به سرور رخ داد! ❌',
    type: 'error',
    position: 'top-left'
    className: 'bg-slate-800/80 border-2 border-red-500 text-red-400 hover:bg-red-500/10'
  },
  {
    label: 'Warning ',
    message: 'لطفاً اطلاعات خود را بازبینی کنید. ⚠️',
    type: 'warning',
    position: 'bottom-right',
    className: 'bg-slate-800/80 border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10'
  },
  {
    label: 'Info ',
    message: 'این یک پیام وضعیت معمولی است. ℹ️',
    type: 'info',
    position: 'bottom-left',
    className: 'bg-slate-800/80 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10'
  }
]
  }),

  actions: {
    addToast(message, type, position = 'button-left') {
      const id = Date.now()
      this.toasts.push({ id, message, type, position })

      setTimeout(() => {
        this.removeToast(id)
      }, 5000)
    },
    removeToast(id) {
      this.toasts = this.toasts.filter(t => t.id !== id)
    }
  }
})
