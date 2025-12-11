import { getCollection, getAllCollections } from "@/lib/collections"
import { notFound } from "next/navigation"
import { CollectionContent } from "./collection-content"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const collections = getAllCollections()
  
  return collections.map((collection) => ({
    slug: collection.slug,
  }))
}

export default async function CollectionPage({ params }: Props) {
  // Ensure params is properly awaited
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const collection = await getCollection(slug)

  if (!collection) {
    notFound()
  }

  return <CollectionContent collection={collection} />
}
