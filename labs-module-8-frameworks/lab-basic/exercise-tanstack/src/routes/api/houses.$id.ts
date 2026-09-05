import { createFileRoute } from '@tanstack/react-router'
import houses from '@/data/houses.json'

export const Route = createFileRoute('/api/houses/$id')({
  server: {
    handlers: {
      GET: ({ params }) => {
        const house = houses.find((h) => h.id === params.id)

        if (!house) {
          return Response.json({ error: 'House not found' }, { status: 404 })
        }

        return Response.json(house)
      },
    },
  },
})
