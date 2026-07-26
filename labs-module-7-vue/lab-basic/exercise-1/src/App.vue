<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex gap-4 border-b border-gray-200 p-4">
    <RouterLink to="/plan" class="font-medium" active-class="text-blue-600">
      Plan semanal
    </RouterLink>
    <RouterLink to="/favorites" class="font-medium" active-class="text-blue-600">
      Platos favoritos
    </RouterLink>
  </nav>

  <RouterView />
</template>
