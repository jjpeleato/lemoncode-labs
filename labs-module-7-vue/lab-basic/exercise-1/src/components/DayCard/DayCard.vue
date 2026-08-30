<script setup lang="ts">
import { computed } from 'vue'
import { useMealsStore } from '@/stores/meals.store'
import MealItem from '@/components/MealItem/MealItem.vue'
import type { DayOfWeek, MealTime } from '@/types/meal.types'

interface DayCardProps {
  day: DayOfWeek
  label: string
  timeFilter: MealTime | 'all'
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

const showLunch = computed(() => props.timeFilter === 'all' || props.timeFilter === 'lunch')
const showDinner = computed(() => props.timeFilter === 'all' || props.timeFilter === 'dinner')

const visibleMealsCount = computed(() => {
  if (props.timeFilter === 'lunch') return lunchMeals.value.length
  if (props.timeFilter === 'dinner') return dinnerMeals.value.length
  return dayMeals.value.length
})
</script>

<template>
  <div class="flex flex-col rounded-xl border border-border bg-surface p-6">
    <div class="mb-5 flex items-baseline justify-between">
      <h3 class="font-display text-xl font-semibold">{{ label }}</h3>
      <span class="font-mono text-[11px] tracking-wide text-muted">
        {{ visibleMealsCount }} {{ visibleMealsCount === 1 ? 'plato' : 'platos' }}
      </span>
    </div>

    <div class="mb-5 border-t border-dashed border-border"></div>

    <div v-if="showLunch" class="mb-6 flex flex-col gap-2.5">
      <div class="flex items-center gap-2">
        <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-fg"></span>
        <p class="font-mono text-[11px] uppercase tracking-wide text-muted">Comida</p>
      </div>
      <ul class="flex flex-col gap-2">
        <li v-for="meal in lunchMeals" :key="meal.id">
          <MealItem
            :meal="meal"
            @remove="emit('remove', $event)"
            @edit="emit('edit', $event)"
            @toggle-favorite="emit('toggle-favorite', $event)"
          />
        </li>
      </ul>
      <p v-if="lunchMeals.length === 0" class="rounded-md border border-dashed border-border px-3 py-2.5 text-xs text-muted/70">
        Sin platos
      </p>
    </div>

    <div v-if="showDinner" class="flex flex-col gap-2.5">
      <div class="flex items-center gap-2">
        <span class="h-1.5 w-1.5 shrink-0 rounded-full border border-muted"></span>
        <p class="font-mono text-[11px] uppercase tracking-wide text-muted">Cena</p>
      </div>
      <ul class="flex flex-col gap-2">
        <li v-for="meal in dinnerMeals" :key="meal.id">
          <MealItem
            :meal="meal"
            @remove="emit('remove', $event)"
            @edit="emit('edit', $event)"
            @toggle-favorite="emit('toggle-favorite', $event)"
          />
        </li>
      </ul>
      <p v-if="dinnerMeals.length === 0" class="rounded-md border border-dashed border-border px-3 py-2.5 text-xs text-muted/70">
        Sin platos
      </p>
    </div>
  </div>
</template>
