<script setup lang="ts">
import { useMealsStore } from '@/stores/meals.store'
import MealItem from '@/components/MealItem/MealItem.vue'

const store = useMealsStore()

const handleAddToWeek = (id: string) => {
  const meal = store.favorites.find((m) => m.id === id)
  if (!meal) return

  store.addMeal({ name: meal.name, day: meal.day, time: meal.time })
}
</script>

<template>
  <div class="mx-auto max-w-3xl p-6">
    <h1 class="mb-6 text-2xl font-bold">Platos favoritos</h1>

    <ul v-if="store.favorites.length > 0" class="flex flex-col gap-2">
      <MealItem
        v-for="meal in store.favorites"
        :key="meal.id"
        :meal="meal"
        @remove="store.removeMeal"
        @toggle-favorite="store.toggleFavorite"
      >
        <template #extra-actions>
          <button
            type="button"
            title="Añadir al plan semanal"
            class="text-blue-600"
            @click="handleAddToWeek(meal.id)"
          >
            ➕
          </button>
        </template>
      </MealItem>
    </ul>

    <p v-else class="text-gray-400">Todavía no has marcado ningún plato como favorito.</p>
  </div>
</template>
