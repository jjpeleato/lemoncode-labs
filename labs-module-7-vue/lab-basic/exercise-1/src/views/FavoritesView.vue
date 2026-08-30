<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMealsStore } from '@/stores/meals.store'
import MealItem from '@/components/MealItem/MealItem.vue'

const store = useMealsStore()

const searchTerm = ref('')

const filteredFavorites = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()
  if (!term) return store.favorites

  return store.favorites.filter((meal) => meal.name.toLowerCase().includes(term))
})

const handleAddToWeek = (id: string) => {
  const meal = store.favorites.find((m) => m.id === id)
  if (!meal) return

  store.addMeal({ name: meal.name, day: meal.day, time: meal.time })
}
</script>

<template>
  <div class="mx-auto w-full max-w-2xl px-6 py-16">
    <div class="mb-12 flex flex-col items-center gap-2 text-center">
      <p class="font-mono text-[11px] uppercase tracking-wide text-muted">Tus favoritos</p>
      <h2 class="font-display text-3xl font-semibold">Platos favoritos</h2>
    </div>

    <div v-if="store.favorites.length > 0" class="mb-6">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Buscar por nombre..."
        class="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm placeholder:text-muted/60 focus:border-fg focus:outline-none focus:ring-1 focus:ring-fg"
      />
    </div>

    <ul v-if="filteredFavorites.length > 0" class="flex flex-col gap-3">
      <li v-for="meal in filteredFavorites" :key="meal.id" class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <MealItem
          :meal="meal"
          hide-edit
          class="flex-1"
          @remove="store.removeMeal"
          @toggle-favorite="store.toggleFavorite"
        />

        <button
          type="button"
          class="flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs text-muted transition-colors hover:border-fg hover:text-fg sm:justify-start"
          @click="handleAddToWeek(meal.id)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path d="M12 5v14M5 12h14" stroke-linecap="round" />
          </svg>
          Añadir al plan
        </button>
      </li>
    </ul>

    <p
      v-else-if="store.favorites.length > 0"
      class="rounded-xl border border-dashed border-border px-8 py-14 text-center text-sm text-muted"
    >
      Ningún favorito coincide con "{{ searchTerm }}".
    </p>

    <p v-else class="rounded-xl border border-dashed border-border px-8 py-14 text-center text-sm leading-relaxed text-muted">
      Todavía no has marcado ningún plato como favorito.<br />
      Pulsa la estrella de cualquier plato del plan para añadirlo aquí.
    </p>
  </div>
</template>
