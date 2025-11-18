import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Portfolio data (in a real app, this would come from a database or CMS)
const portfolioItems = [
  {
    id: '1',
    title: 'Coastal Photography',
    description: 'A stunning collection of coastal landscapes and seascapes captured during golden hour, showcasing the raw beauty of ocean landscapes and dramatic lighting conditions.',
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
    description: 'Modern architectural photography showcasing the beauty of urban design and cityscapes, capturing the intersection of form and function in contemporary architecture.',
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
    <div className="min-h-screen bg-[#F2EDE3]">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-2">{item.title}</h1>
            <p className="font-lato text-xl text-white/90">{item.category}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl font-bold text-black mb-6">About This Project</h2>
              <p className="font-lato text-lg text-gray-700 leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Gallery */}
              <h3 className="font-playfair text-2xl font-semibold text-black mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {item.gallery.map((image, index) => (
                  <div key={index} className="relative h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden group">
                    <Image
                      src={image}
                      alt={`${item.title} - Image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="font-playfair text-xl font-semibold text-black mb-6">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-lato text-sm text-gray-600">Client</p>
                    <p className="font-lato font-medium text-black">{item.client}</p>
                  </div>
                  
                  <div>
                    <p className="font-lato text-sm text-gray-600">Year</p>
                    <p className="font-lato font-medium text-black">{item.year}</p>
                  </div>
                  
                  <div>
                    <p className="font-lato text-sm text-gray-600">Category</p>
                    <p className="font-lato font-medium text-black">{item.category}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6">
                  <h4 className="font-lato text-sm font-medium text-black mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#722f37] text-white text-sm rounded-full"
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
                    className="block w-full bg-[#722f37] text-white text-center py-3 px-6 rounded-lg hover:bg-[#5a2529] transition-colors font-lato font-medium"
                  >
                    Start Your Project
                  </Link>
                </div>

                {/* Back Button */}
                <div className="mt-4">
                  <Link
                    href="/portfolio"
                    className="block w-full text-center py-2 px-4 text-gray-600 hover:text-black transition-colors font-lato"
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