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
    class="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 backdrop-blur-sm"
    @click.self="emit('cancel')"
  >
    <div class="w-full max-w-sm rounded-xl border border-border bg-surface p-7">
      <h2 class="mb-2 font-display text-lg font-semibold">{{ title }}</h2>
      <p class="mb-7 text-sm text-muted">{{ message }}</p>

      <div class="flex justify-end gap-3">
        <button type="button" class="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-fg hover:text-fg" @click="emit('cancel')">
          Cancelar
        </button>
        <button type="button" class="rounded-lg bg-fg px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90" @click="emit('confirm')">
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>
