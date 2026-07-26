<script setup lang="ts">
import type { Meal } from '@/types/meal.types'

interface MealItemProps {
  meal: Meal
}

defineProps<MealItemProps>()

const emit = defineEmits<{
  remove: [id: string]
  edit: [id: string]
  'toggle-favorite': [id: string]
}>()
</script>

<template>
  <li class="flex items-center justify-between gap-2 rounded border border-gray-200 px-3 py-2">
    <span class="truncate">{{ meal.name }}</span>

    <div class="flex shrink-0 gap-1">
      <button
        type="button"
        :class="meal.isFavorite ? 'text-yellow-500' : 'text-gray-300'"
        title="Marcar como favorito"
        @click="emit('toggle-favorite', meal.id)"
      >
        ★
      </button>

      <button type="button" title="Editar" @click="emit('edit', meal.id)">
        ✏️
      </button>

      <button type="button" title="Eliminar" @click="emit('remove', meal.id)">
        🗑️
      </button>
    </div>
  </li>
</template>
