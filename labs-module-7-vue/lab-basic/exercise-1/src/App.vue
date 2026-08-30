<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-screen w-full bg-ink text-fg">
    <header class="w-full border-b border-border/70">
      <div class="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-6 py-14 text-center">
        <p class="font-mono text-[11px] font-medium uppercase tracking-[0.35em] text-muted">
          Planificador semanal
        </p>
        <h1 class="font-display text-4xl font-semibold sm:text-5xl">Meal Planner</h1>
      </div>

      <nav class="mx-auto flex w-full max-w-5xl items-center justify-center gap-6 px-6 pb-10">
        <RouterLink
          to="/plan"
          class="font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-fg"
          active-class="!text-fg underline underline-offset-4 decoration-1"
        >
          Plan semanal
        </RouterLink>
        <span class="text-border">·</span>
        <RouterLink
          to="/favorites"
          class="font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-fg"
          active-class="!text-fg underline underline-offset-4 decoration-1"
        >
          Platos favoritos
        </RouterLink>
      </nav>
    </header>

    <main class="w-full">
      <RouterView />
    </main>
  </div>
</template>
