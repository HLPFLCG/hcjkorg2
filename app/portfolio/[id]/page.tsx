import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Portfolio data (in a real app, this would come from a database or CMS)
const portfolioItems = [
  {
    id: '1',
    title: 'Coastal Photography',
    description: 'A stunning collection of coastal landscapes and seascapes captured during golden hour.',
    image: '/coastal1.webp',
    category: 'Photography',
    client: 'Coastal Magazine',
    year: '2024',
    tags: ['landscape', 'ocean', 'photography'],
    gallery: [
      '/coastal1.webp',
      '/beach-greenery.webp',
      '/big-rock-ocean3.webp'
    ]
  },
  {
    id: '2',
    title: 'Urban Architecture',
    description: 'Modern architectural photography showcasing the beauty of urban design and cityscapes.',
    image: '/bw-city-brick.webp',
    category: 'Photography',
    client: 'Architecture Digest',
    year: '2024',
    tags: ['architecture', 'urban', 'modern'],
    gallery: [
      '/bw-city-brick.webp',
      '/church.webp',
      '/top-of-cool-building.webp'
    ]
  }
];

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id,
  }));
}

export default function PortfolioItem({ params }: { params: { id: string } }) {
  const item = portfolioItems.find(p => p.id === params.id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">{item.title}</h1>
            <p className="text-xl text-gray-200">{item.category}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Project</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Gallery */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {item.gallery.map((image, index) => (
                  <div key={index} className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${item.title} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Client</p>
                    <p className="font-medium text-gray-900">{item.client}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Year</p>
                    <p className="font-medium text-gray-900">{item.year}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600">Category</p>
                    <p className="font-medium text-gray-900">{item.category}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Start Your Project
                  </Link>
                </div>

                {/* Back Button */}
                <div className="mt-4">
                  <Link
                    href="/portfolio"
                    className="block w-full text-center py-2 px-4 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    ← Back to Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}