import type { Collection, Photo } from "./types"

// New website images collection mapping
const newWebsiteCollections = {
  'landscapes': {
    title: "Dramatic Landscapes",
    description: "Breathtaking natural scenery from around the world",
    images: [
      'big-mountain.webp', 'mountains1.webp', 'mountains2.webp', 'trees-1.webp',
      'trees-and-mountains.webp', 'willow-tree-i-think.webp', 'overview-waterfall.webp',
      'waterfall-1.webp', 'waterfall-closer.webp', 'waterfall-full-image.webp',
      'big-rock-full.webp', 'big-rock-left.webp', 'bigrock1.webp',
      'coastal1.webp', 'nightime-peninsula.webp', 'nightime-peninsula-2.webp'
    ]
  },
  'urban-architecture': {
    title: "Urban Architecture",
    description: "Cityscapes and architectural photography",
    images: [
      'church.webp', 'clay-roof-house-panoramic.webp', 'top-of-cool-building.webp',
      'flags.webp', 'hispanic-street-market-with-flags.webp', 'red-bike-house-road.webp',
      'road1.webp', 'street-food.webp', 'vespa-road-hispanic.webp',
      'wall-graffiti-flower.webp', 'sepia-public-house.webp', 'public-house-2nd-floor.webp'
    ]
  },
  'tropical-nature': {
    title: "Tropical Nature",
    description: "Exotic flora and tropical environments",
    images: [
      'jungle1.webp', 'jungle2.webp', 'river-rainforest-tropical.webp',
      'tropical-tops-of-trees.webp', 'fall-leaves.webp', 'green-plant-closeup.webp',
      'moss.webp', 'palm-tree-bw.webp', 'palm-trees-with-colors-and-paper.webp',
      'flower-close-up.webp', 'flower-close-up-2.webp', 'flower-close-up-3.webp',
      'flower-close-up-4.webp', 'flower-closeup-bw.webp', 'pink-flowers-closeup.webp',
      'purple-flowers.webp', 'red-flowers.webp', 'white-flowers.webp'
    ]
  },
  'portraits': {
    title: "Portraits",
    description: "People and portrait photography",
    images: [
      'emma-child1.webp', 'emma-child2.webp', 'emma-child3.webp', 'emma-child4.webp',
      'emma-child5.webp', 'emma-child6.webp', 'emma-child7.webp', 'emma-child8.webp',
      'emma-child9.webp', 'emma-child10.webp', 'emma-child11.webp', 'emma-child12.webp',
      'brother1.webp', 'brother3bw.webp', 'brother4bw.webp', 'brother5bw.webp',
      'brother7.webp', 'brother8.webp', 'brother9.webp', 'brother21bw.webp',
      'brother22.webp', 'brother28.webp', 'brother29.webp', 'brother30.webp'
    ]
  },
  'animals-wildlife': {
    title: "Animals & Wildlife",
    description: "Animal photography and nature subjects",
    images: [
      'cat.webp', 'cat2.webp', 'dog-bw.webp', 'cow.webp',
      'animal?.webp', 'animal?2.webp', 'lizard.webp', 'swampape.webp',
      'spider-in-spiderweb.webp', 'spider-in-web2.webp'
    ]
  },
  'water-seascapes': {
    title: "Water & Seascapes",
    description: "Ocean, rivers and water photography",
    images: [
      'big-rock-boat-2-i-think.webp', 'big-rock-ocean-boat.webp', 'big-rock-ocean3.webp',
      'back-of-boat.webp', 'boat-closeup.webp', 'boat.webp', 'full-fock-and-boat.webp',
      'trail-into-ocean.webp', 'two-rocks.webp', 'friend-lake.webp',
      'pretty-waterfall.webp', 'panoramic-river-mountains-wow-this-is-gorgeous.webp'
    ]
  }
} as const

// Aspect ratios for different image types
const aspectRatios = [
  { width: 1800, height: 1200 }, // 3:2
  { width: 1800, height: 1350 }, // 4:3
  { width: 1800, height: 1080 }, // 16:9
  { width: 1200, height: 1800 }, // 2:3 (portrait)
  { width: 1600, height: 1600 }, // 1:1 (square)
] as const

// Common metadata for photos
const defaultMetadata = {
  camera: "Sony Alpha A7 IV",
  lens: "24-70mm f/2.8",
  aperture: "f/8.0",
  shutterSpeed: "1/250",
  iso: "100",
  focalLength: "35mm",
  takenAt: new Date().toISOString().split("T")[0],
} as const

// Function to get images for a collection
function getCollectionImages(collectionSlug: string): Photo[] {
  const collection = newWebsiteCollections[collectionSlug as keyof typeof newWebsiteCollections]
  if (!collection) return []

  return collection.images.map((imageName, index) => {
    const dimensions = aspectRatios[index % aspectRatios.length]
    
    return {
      id: `${collectionSlug}-${index}`,
      src: `/newwebsiteimages/${imageName}`,
      width: dimensions.width,
      height: dimensions.height,
      alt: `${collection.title} image ${index + 1}`,
      metadata: defaultMetadata,
    }
  })
}

// Function to get cover image path
function getCoverImagePath(collectionSlug: string): string {
  const collection = newWebsiteCollections[collectionSlug as keyof typeof newWebsiteCollections]
  if (!collection) return '/images/logo/hcjkstacked.svg'
  
  return `/newwebsiteimages/${collection.images[0]}`
}

// Collections data
const collections: Collection[] = [
  {
    id: "1",
    slug: "landscapes",
    title: "Dramatic Landscapes",
    description: "Breathtaking natural scenery from around the world",
    fullDescription:
      "From towering mountain peaks to serene waterfalls, this collection captures the raw beauty and majesty of natural landscapes. Each image tells a story of the earth's diverse and awe-inspiring environments.",
    coverImage: getCoverImagePath("landscapes"),
    tags: ["Nature", "Landscape", "Mountains", "Water"],
    featured: true,
    photos: getCollectionImages("landscapes"),
  },
  {
    id: "2",
    slug: "portraits",
    title: "Portrait Collection",
    description: "Intimate portraits capturing human emotion and character",
    fullDescription:
      "This collection explores the depth and diversity of human expression through intimate portraiture. Each photograph captures a moment of genuine emotion, revealing the unique character and stories of the subjects.",
    coverImage: getCoverImagePath("portraits"),
    tags: ["People", "Portrait", "Emotion", "Character"],
    featured: true,
    photos: getCollectionImages("portraits"),
  },
  {
    id: "3",
    slug: "urban-architecture",
    title: "Urban Architecture",
    description: "The beauty of cityscapes and architectural design",
    fullDescription:
      "Exploring the intersection of human creativity and urban environments, this collection showcases the architectural marvels and cityscapes that define our modern world. From historic buildings to contemporary structures.",
    coverImage: getCoverImagePath("urban-architecture"),
    tags: ["Urban", "Architecture", "City", "Design"],
    featured: true,
    photos: getCollectionImages("urban-architecture"),
  },
  {
    id: "4",
    slug: "tropical-nature",
    title: "Tropical Paradise",
    description: "Vibrant tropical flora and exotic natural beauty",
    fullDescription:
      "Immerse yourself in the lush, vibrant world of tropical environments. This collection captures the intense colors, diverse plant life, and natural beauty found in tropical regions around the globe.",
    coverImage: getCoverImagePath("tropical-nature"),
    tags: ["Tropical", "Nature", "Flora", "Color"],
    featured: false,
    photos: getCollectionImages("tropical-nature"),
  },
  {
    id: "5",
    slug: "animals-wildlife",
    title: "Animals & Wildlife",
    description: "Captivating wildlife and animal photography",
    fullDescription:
      "From domestic companions to wild creatures, this collection celebrates the diversity and beauty of the animal kingdom. Each photograph captures a moment of natural behavior and animal character.",
    coverImage: getCoverImagePath("animals-wildlife"),
    tags: ["Animals", "Wildlife", "Nature", "Pets"],
    featured: false,
    photos: getCollectionImages("animals-wildlife"),
  },
  {
    id: "6",
    slug: "water-seascapes",
    title: "Water & Seascapes",
    description: "The dynamic beauty of water in all its forms",
    fullDescription:
      "Water in all its forms - from tranquil lakes to crashing ocean waves - provides endless photographic opportunities. This collection captures the dynamic, serene, and powerful aspects of aquatic environments.",
    coverImage: getCoverImagePath("water-seascapes"),
    tags: ["Water", "Ocean", "Seascape", "Nature"],
    featured: false,
    photos: getCollectionImages("water-seascapes"),
  },
]

// Export functions
export const getAllCollections = (): Collection[] => collections
export const getFeaturedCollections = (): Collection[] => collections.filter(collection => collection.featured)
export const getCollection = (slug: string): Collection | undefined => collections.find(collection => collection.slug === slug)
export const getAllTags = (): string[] => Array.from(new Set(collections.flatMap(collection => collection.tags)))