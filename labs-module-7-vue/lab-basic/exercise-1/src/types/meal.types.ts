export type DayOfWeek =
  'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export type MealTime = 'lunch' | 'dinner'

export interface Meal {
  id: string
  name: string
  day: DayOfWeek
  time: MealTime
  isFavorite: boolean
}

export interface MealInput {
  name: string
  day: DayOfWeek
  time: MealTime
}
