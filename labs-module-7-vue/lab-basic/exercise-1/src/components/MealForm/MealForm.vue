<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { DAYS_OF_WEEK } from '@/constants/days.constant'
import type { Meal, MealInput, DayOfWeek, MealTime } from '@/types/meal.types'

interface MealFormProps {
  meal?: Meal
}

const props = defineProps<MealFormProps>()

const emit = defineEmits<{
  submit: [input: MealInput]
  cancel: []
}>()

const isEditMode = computed(() => props.meal !== undefined)

const name = ref('')
const day = ref<DayOfWeek>('monday')
const time = ref<MealTime>('lunch')

const resetForm = () => {
  name.value = props.meal?.name ?? ''
  day.value = props.meal?.day ?? 'monday'
  time.value = props.meal?.time ?? 'lunch'
}

resetForm()

watch(() => props.meal, resetForm)

const isNameValid = computed(() => name.value.trim().length > 0)

const handleSubmit = () => {
  if (!isNameValid.value) return

  emit('submit', {
    name: name.value.trim(),
    day: day.value,
    time: time.value,
  })

  if (!isEditMode.value) resetForm()
}
</script>

<template>
  <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
    <div>
      <label for="meal-name" class="mb-2 block font-mono text-[10px] uppercase tracking-wide text-muted">
        Nombre del plato
      </label>
      <input
        id="meal-name"
        v-model="name"
        type="text"
        placeholder="Ej: Pasta carbonara"
        class="w-full rounded-lg border border-border bg-surface-alt px-3 py-2.5 text-sm placeholder:text-muted/60 focus:border-fg focus:outline-none focus:ring-1 focus:ring-fg"
      />
    </div>

    <div>
      <label for="meal-day" class="mb-2 block font-mono text-[10px] uppercase tracking-wide text-muted">
        Día
      </label>
      <select
        id="meal-day"
        v-model="day"
        class="w-full rounded-lg border border-border bg-surface-alt px-3 py-2.5 text-sm focus:border-fg focus:outline-none focus:ring-1 focus:ring-fg"
      >
        <option v-for="option in DAYS_OF_WEEK" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>

    <div>
      <label for="meal-time" class="mb-2 block font-mono text-[10px] uppercase tracking-wide text-muted">
        Comida / Cena
      </label>
      <select
        id="meal-time"
        v-model="time"
        class="w-full rounded-lg border border-border bg-surface-alt px-3 py-2.5 text-sm focus:border-fg focus:outline-none focus:ring-1 focus:ring-fg"
      >
        <option value="lunch">Comida</option>
        <option value="dinner">Cena</option>
      </select>
    </div>

    <div class="flex flex-col gap-2 pt-1">
      <button
        type="submit"
        :disabled="!isNameValid"
        class="w-full rounded-lg bg-fg px-4 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:bg-surface-alt disabled:text-muted"
      >
        {{ isEditMode ? 'Guardar cambios' : 'Agregar al plan' }}
      </button>

      <button
        v-if="isEditMode"
        type="button"
        class="w-full rounded-lg border border-border px-4 py-2.5 text-sm text-muted transition-colors hover:border-fg hover:text-fg"
        @click="emit('cancel')"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>
