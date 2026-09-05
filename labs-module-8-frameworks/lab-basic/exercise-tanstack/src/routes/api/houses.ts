import { createFileRoute } from '@tanstack/react-router'
import houses from '@/data/houses.json'

export const Route = createFileRoute('/api/houses')({
  server: {
    handlers: {
      GET: () => Response.json(houses),
    },
  },
})
