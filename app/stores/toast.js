import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [],
    englishAlert: 'System Online: Dark mode interface active.',
    toastButtons: [
      { label: 'Success', type: 'success', position: 'top-right', message: 'عملیات موفقیت‌آمیز بود! 🎉' },
      { label: 'Error', type: 'error', position: 'top-left', message: 'خطایی رخ داده است! ❌' },
      { label: 'Warning', type: 'warning', position: 'bottom-right', message: 'هشدار: دسترسی محدود است! ⚠️' },
      { label: 'Info', type: 'info', position: 'bottom-left', message: 'اطلاعات: سیستم به‌روز است. ℹ️' }
    ]
  }),
  actions: {
    addToast(message, type = 'default', position = 'top-right') {
      const id = Date.now()
      this.toasts.push({ id, message, type, position })
      setTimeout(() => this.removeToast(id), 5000)
    },
    removeToast(id) {
      this.toasts = this.toasts.filter(t => t.id !== id)
    }
  }
})
})
