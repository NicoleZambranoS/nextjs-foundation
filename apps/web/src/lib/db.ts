import "server-only"

// Mock database client matching the Prisma-like interface used by server actions.
// In a real app, this would be a Prisma, Drizzle, or other ORM client instance.

async function updateProduct(args: {
  where: { id: string }
  data: { name?: string; price?: number; inventory?: number }
}) {
  const res = await fetch(`https://api.acme.com/products/${args.where.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(args.data),
  })
  if (!res.ok) throw new Error("Failed to update product")
  return res.json()
}

async function deleteProduct(args: { where: { id: string } }) {
  const res = await fetch(`https://api.acme.com/products/${args.where.id}`, {
    method: "DELETE",
  })
  if (!res.ok) throw new Error("Failed to delete product")
  return res.json()
}

export const db = {
  products: {
    update: updateProduct,
    delete: deleteProduct,
  },
} as const
