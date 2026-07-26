import type { DayOfWeek } from '@/types/meal.types'

interface DayOption {
  value: DayOfWeek
  label: string
}

export const DAYS_OF_WEEK: readonly DayOption[] = [
  { value: 'monday', label: 'Lunes' },
  { value: 'tuesday', label: 'Martes' },
  { value: 'wednesday', label: 'Miércoles' },
  { value: 'thursday', label: 'Jueves' },
  { value: 'friday', label: 'Viernes' },
  { value: 'saturday', label: 'Sábado' },
  { value: 'sunday', label: 'Domingo' },
]
