<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMealsStore } from '@/stores/meals.store'
import { DAYS_OF_WEEK } from '@/constants/days.constant'
import MealForm from '@/components/MealForm/MealForm.vue'
import DayCard from '@/components/DayCard/DayCard.vue'
import ConfirmDialog from '@/components/ConfirmDialog/ConfirmDialog.vue'
import type { Meal, MealInput } from '@/types/meal.types'

const store = useMealsStore()

const editingMeal = ref<Meal | null>(null)
const isClearDialogOpen = ref(false)

const isEmpty = computed(() => store.meals.length === 0)

const handleSubmit = (input: MealInput) => {
  if (editingMeal.value) {
    store.updateMeal(editingMeal.value.id, input)
    editingMeal.value = null
    return
  }

  store.addMeal(input)
}

const handleEdit = (id: string) => {
  const meal = store.meals.find((m) => m.id === id)
  if (!meal) return
  editingMeal.value = meal
}

const handleCancelEdit = () => {
  editingMeal.value = null
}

const handleClearConfirmed = () => {
  store.clearAll()
  isClearDialogOpen.value = false
}
</script>

<template>
  <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-16">
    <aside class="lg:sticky lg:top-16">
      <div class="border-t border-border pt-6">
        <p class="mb-5 font-mono text-[10px] uppercase tracking-wide text-muted">Añadir plato</p>
        <MealForm :meal="editingMeal ?? undefined" @submit="handleSubmit" @cancel="handleCancelEdit" />
      </div>

      <button
        type="button"
        :disabled="isEmpty"
        class="mt-8 font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:text-fg hover:underline underline-offset-4 disabled:cursor-not-allowed disabled:opacity-30"
        @click="isClearDialogOpen = true"
      >
        Limpiar plan semanal
      </button>
    </aside>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      <DayCard
        v-for="option in DAYS_OF_WEEK"
        :key="option.value"
        :day="option.value"
        :label="option.label"
        @remove="store.removeMeal"
        @edit="handleEdit"
        @toggle-favorite="store.toggleFavorite"
      />
    </div>

    <ConfirmDialog
      :open="isClearDialogOpen"
      title="Limpiar plan semanal"
      message="Se eliminarán todos los platos planificados. Esta acción no se puede deshacer."
      @confirm="handleClearConfirmed"
      @cancel="isClearDialogOpen = false"
    />
  </div>
</template>
