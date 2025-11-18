import { getCollection } from "@/lib/collections"
import { notFound } from "next/navigation"
import { CollectionContent } from "./collection-content"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const collections = [
    'bali',
    'iceland', 
    'morocco',
    'tokyo',
    'urban-portraits',
    'new-zealand'
  ]
  
  return collections.map((slug) => ({
    slug,
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