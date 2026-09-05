import { createFileRoute } from '@tanstack/react-router'
import { getHouseById } from '@/lib/houses'

export const Route = createFileRoute('/api/houses/$id')({
  server: {
    handlers: {
      GET: ({ params }) => {
        const house = getHouseById(params.id)

        if (!house) {
          return Response.json({ error: 'House not found' }, { status: 404 })
        }

        return Response.json(house)
      },
    },
  },
})
