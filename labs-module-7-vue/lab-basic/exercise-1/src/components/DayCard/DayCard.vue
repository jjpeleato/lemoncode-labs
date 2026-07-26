<script setup lang="ts">
import { computed } from 'vue'
import { useMealsStore } from '@/stores/meals.store'
import MealItem from '@/components/MealItem/MealItem.vue'
import type { DayOfWeek } from '@/types/meal.types'

interface DayCardProps {
  day: DayOfWeek
  label: string
}

const props = defineProps<DayCardProps>()

const emit = defineEmits<{
  remove: [id: string]
  edit: [id: string]
  'toggle-favorite': [id: string]
}>()

const store = useMealsStore()
const dayMeals = store.mealsByDay(props.day)

const lunchMeals = computed(() => dayMeals.value.filter((meal) => meal.time === 'lunch'))
const dinnerMeals = computed(() => dayMeals.value.filter((meal) => meal.time === 'dinner'))
</script>

<template>
  <div class="rounded-lg border border-gray-200 p-4">
    <h3 class="mb-3 font-semibold">{{ label }}</h3>

    <div class="mb-3">
      <p class="mb-1 text-sm font-medium text-gray-500">Comida</p>
      <ul class="flex flex-col gap-1">
        <MealItem
          v-for="meal in lunchMeals"
          :key="meal.id"
          :meal="meal"
          @remove="emit('remove', $event)"
          @edit="emit('edit', $event)"
          @toggle-favorite="emit('toggle-favorite', $event)"
        />
      </ul>
      <p v-if="lunchMeals.length === 0" class="text-sm text-gray-400">Sin platos</p>
    </div>

    <div>
      <p class="mb-1 text-sm font-medium text-gray-500">Cena</p>
      <ul class="flex flex-col gap-1">
        <MealItem
          v-for="meal in dinnerMeals"
          :key="meal.id"
          :meal="meal"
          @remove="emit('remove', $event)"
          @edit="emit('edit', $event)"
          @toggle-favorite="emit('toggle-favorite', $event)"
        />
      </ul>
      <p v-if="dinnerMeals.length === 0" class="text-sm text-gray-400">Sin platos</p>
    </div>
  </div>
</template>
