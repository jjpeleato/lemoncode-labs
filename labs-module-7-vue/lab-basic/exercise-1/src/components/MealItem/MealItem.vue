<script setup lang="ts">
import type { Meal } from '@/types/meal.types'

interface MealItemProps {
  meal: Meal
  hideEdit?: boolean
}

withDefaults(defineProps<MealItemProps>(), {
  hideEdit: false,
})

const emit = defineEmits<{
  remove: [id: string]
  edit: [id: string]
  'toggle-favorite': [id: string]
}>()
</script>

<template>
  <div class="flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-surface-alt px-4 py-2">
    <span class="truncate text-sm">{{ meal.name }}</span>

    <div class="flex shrink-0 items-center gap-1.5">
      <slot name="extra-actions" />

      <button
        type="button"
        title="Marcar como favorito"
        class="flex h-6 w-6 items-center justify-center rounded-full transition-colors"
        :class="meal.isFavorite ? 'text-fg' : 'text-muted hover:text-fg'"
        @click="emit('toggle-favorite', meal.id)"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" :fill="meal.isFavorite ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.75">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button
        v-if="!hideEdit"
        type="button"
        title="Editar"
        class="flex h-6 w-6 items-center justify-center rounded-full text-muted transition-colors hover:text-fg"
        @click="emit('edit', meal.id)"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
          <path d="M12 20h9" stroke-linecap="round" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        title="Eliminar"
        class="flex h-6 w-6 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg hover:text-ink"
        @click="emit('remove', meal.id)"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
          <path d="M3 6h18" stroke-linecap="round" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>
