import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Meal, MealInput } from '@/types/meal.types'

export const useMealsStore = defineStore('meals', () => {
  const meals = ref<Meal[]>([])

  const favorites = computed<Meal[]>(() => meals.value.filter((meal) => meal.isFavorite))

  const addMeal = (input: MealInput): void => {
    const newMeal: Meal = {
      id: crypto.randomUUID(),
      name: input.name,
      day: input.day,
      time: input.time,
      isFavorite: false,
    }
    meals.value.push(newMeal)
  }

  const removeMeal = (id: string): void => {
    meals.value = meals.value.filter((meal) => meal.id !== id)
  }

  const updateMeal = (id: string, input: MealInput): void => {
    const meal = meals.value.find((m) => m.id === id)
    if (!meal) return

    meal.name = input.name
    meal.day = input.day
    meal.time = input.time
  }

  const toggleFavorite = (id: string): void => {
    const meal = meals.value.find((m) => m.id === id)
    if (!meal) return

    meal.isFavorite = !meal.isFavorite
  }

  const clearAll = (): void => {
    meals.value = []
  }

  const mealsByDay = (day: string) => computed(() => meals.value.filter((meal) => meal.day === day))

  return {
    meals,
    favorites,
    addMeal,
    removeMeal,
    updateMeal,
    toggleFavorite,
    clearAll,
    mealsByDay,
  }
})
