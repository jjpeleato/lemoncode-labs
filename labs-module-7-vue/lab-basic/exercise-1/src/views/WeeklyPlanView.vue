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
  <div class="mx-auto max-w-6xl p-6">
    <div class="mb-6 flex items-center justify-between">
      <h1 class="text-2xl font-bold">Plan semanal</h1>
      <button
        type="button"
        :disabled="isEmpty"
        class="rounded border border-red-300 px-4 py-2 text-red-600 disabled:opacity-40"
        @click="isClearDialogOpen = true"
      >
        Limpiar plan
      </button>
    </div>

    <div class="mb-8 rounded-lg border border-gray-200 p-4">
      <MealForm
        :meal="editingMeal ?? undefined"
        @submit="handleSubmit"
        @cancel="handleCancelEdit"
      />
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
