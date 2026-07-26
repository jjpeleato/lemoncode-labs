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
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <div>
      <label for="meal-name" class="block text-sm font-medium mb-1">Nombre del plato</label>
      <input
        id="meal-name"
        v-model="name"
        type="text"
        placeholder="Ej: Pasta carbonara"
        class="w-full rounded border border-gray-300 px-3 py-2"
      />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="meal-day" class="block text-sm font-medium mb-1">Día</label>
        <select id="meal-day" v-model="day" class="w-full rounded border border-gray-300 px-3 py-2">
          <option v-for="option in DAYS_OF_WEEK" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>

      <div>
        <label for="meal-time" class="block text-sm font-medium mb-1">Comida / Cena</label>
        <select id="meal-time" v-model="time" class="w-full rounded border border-gray-300 px-3 py-2">
          <option value="lunch">Comida</option>
          <option value="dinner">Cena</option>
        </select>
      </div>
    </div>

    <div class="flex gap-2">
      <button
        type="submit"
        :disabled="!isNameValid"
        class="flex-1 rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
      >
        {{ isEditMode ? 'Guardar' : 'Agregar' }}
      </button>

      <button
        v-if="isEditMode"
        type="button"
        class="rounded border border-gray-300 px-4 py-2"
        @click="emit('cancel')"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>
