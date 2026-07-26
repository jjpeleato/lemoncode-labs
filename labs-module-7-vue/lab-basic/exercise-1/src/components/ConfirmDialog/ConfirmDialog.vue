<script setup lang="ts">
interface ConfirmDialogProps {
  open: boolean
  title: string
  message: string
}

defineProps<ConfirmDialogProps>()

const emit = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 flex items-center justify-center bg-black/50"
    @click.self="emit('cancel')"
  >
    <div class="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
      <h2 class="mb-2 text-lg font-semibold">{{ title }}</h2>
      <p class="mb-6 text-gray-600">{{ message }}</p>

      <div class="flex justify-end gap-2">
        <button
          type="button"
          class="rounded border border-gray-300 px-4 py-2"
          @click="emit('cancel')"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="rounded bg-red-600 px-4 py-2 text-white"
          @click="emit('confirm')"
        >
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>
