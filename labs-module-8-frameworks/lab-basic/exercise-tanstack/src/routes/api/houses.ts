import { createFileRoute } from '@tanstack/react-router'
import { getHouses } from '@/lib/houses'

export const Route = createFileRoute('/api/houses')({
  server: {
    handlers: {
      GET: () => Response.json(getHouses()),
    },
  },
})
