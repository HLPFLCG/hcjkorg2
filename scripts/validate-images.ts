const fs = require('fs');
const path = require('path');

// New website collections mapping
const newWebsiteCollections = {
  'landscapes': [
    'big-mountain.webp', 'mountains1.webp', 'mountains2.webp', 'trees-1.webp',
    'trees-and-mountains.webp', 'willow-tree-i-think.webp', 'overview-waterfall.webp',
    'waterfall-1.webp', 'waterfall-closer.webp', 'waterfall-full-image.webp',
    'big-rock-full.webp', 'big-rock-left.webp', 'bigrock1.webp',
    'coastal1.webp', 'nightime-peninsula.webp', 'nightime-peninsula-2.webp'
  ],
  'urban-architecture': [
    'church.webp', 'clay-roof-house-panoramic.webp', 'top-of-cool-building.webp',
    'flags.webp', 'hispanic-street-market-with-flags.webp', 'red-bike-house-road.webp',
    'road1.webp', 'street-food.webp', 'vespa-road-hispanic.webp',
    'wall-graffiti-flower.webp', 'sepia-public-house.webp', 'public-house-2nd-floor.webp'
  ],
  'tropical-nature': [
    'jungle1.webp', 'jungle2.webp', 'river-rainforest-tropical.webp',
    'tropical-tops-of-trees.webp', 'fall-leaves.webp', 'green-plant-closeup.webp',
    'moss.webp', 'palm-tree-bw.webp', 'palm-trees-with-colors-and-paper.webp',
    'flower-close-up.webp', 'flower-close-up-2.webp', 'flower-close-up-3.webp',
    'flower-close-up-4.webp', 'flower-closeup-bw.webp', 'pink-flowers-closeup.webp',
    'purple-flowers.webp', 'red-flowers.webp', 'white-flowers.webp'
  ],
  'portraits': [
    'emma-child1.webp', 'emma-child2.webp', 'emma-child3.webp', 'emma-child4.webp',
    'emma-child5.webp', 'emma-child6.webp', 'emma-child7.webp', 'emma-child8.webp',
    'emma-child9.webp', 'emma-child10.webp', 'emma-child11.webp', 'emma-child12.webp',
    'brother1.webp', 'brother3bw.webp', 'brother4bw.webp', 'brother5bw.webp',
    'brother7.webp', 'brother8.webp', 'brother9.webp', 'brother21bw.webp',
    'brother22.webp', 'brother28.webp', 'brother29.webp', 'brother30.webp'
  ],
  'animals-wildlife': [
    'cat.webp', 'cat2.webp', 'dog-bw.webp', 'cow.webp',
    'animal?.webp', 'animal?2.webp', 'lizard.webp', 'swampape.webp',
    'spider-in-spiderweb.webp', 'spider-in-web2.webp'
  ],
  'water-seascapes': [
    'big-rock-boat-2-i-think.webp', 'big-rock-ocean-boat.webp', 'big-rock-ocean3.webp',
    'back-of-boat.webp', 'boat-closeup.webp', 'boat.webp', 'full-fock-and-boat.webp',
    'trail-into-ocean.webp', 'two-rocks.webp', 'friend-lake.webp',
    'pretty-waterfall.webp', 'panoramic-river-mountains-wow-this-is-gorgeous.webp'
  ]
} as const;

interface ValidationResult {
  hasErrors: boolean;
  hasWarnings: boolean;
  totalImages: number;
  validatedImages: number;
  errors: string[];
  warnings: string[];
}

function validateImages(dryRun: boolean = false): ValidationResult {
  const publicDir = path.join(process.cwd(), 'public');
  const result: ValidationResult = {
    hasErrors: false,
    hasWarnings: false,
    totalImages: 0,
    validatedImages: 0,
    errors: [],
    warnings: []
  };

  console.log('\ud83d\udd0d Starting image validation...');
  if (dryRun) {
    console.log('\u26a0\ufe0f  Running in dry-run mode - will not fail the build\n');
  }

  // Check newwebsiteimages directory
  const newWebsiteDir = path.join(publicDir, 'newwebsiteimages');
  if (!fs.existsSync(newWebsiteDir)) {
    const error = 'newwebsiteimages directory missing';
    result.errors.push(error);
    console.error(`\u274c ${error}`);
    result.hasErrors = true;
    return result;
  }

  console.log('\n\ud83d\udcc1 Checking newwebsiteimages collections...');

  // Check each collection
  Object.entries(newWebsiteCollections).forEach(([slug, images]) => {
    console.log(`\n\ud83d\udcc1 Checking collection: ${slug}`);

    // Check if collection images exist
    images.forEach(imageName => {
      result.totalImages++;
      const imagePath = path.join(newWebsiteDir, imageName);
      
      if (!fs.existsSync(imagePath)) {
        const error = `Image missing: newwebsiteimages/${imageName}`;
        result.errors.push(error);
        console.error(`\u274c ${error}`);
        result.hasErrors = true;
      } else {
        result.validatedImages++;
      }
    });
  });

  // Check favicon files
  console.log('\n\ud83d\udcc1 Checking favicon files...');
  const faviconFiles = [
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'apple-touch-icon.png'
  ];

  faviconFiles.forEach(faviconFile => {
    const faviconPath = path.join(publicDir, faviconFile);
    if (!fs.existsSync(faviconPath)) {
      const warning = `Favicon file missing: ${faviconFile}`;
      result.warnings.push(warning);
      console.warn(`\u26a0\ufe0f  ${warning}`);
      result.hasWarnings = true;
    } else {
      console.log(`\u2705 Favicon found: ${faviconFile}`);
      result.validatedImages++;
    }
    result.totalImages++;
  });

  // Print summary
  console.log('\n\ud83d\udcca Validation Summary:');
  console.log(`Total images checked: ${result.totalImages}`);
  console.log(`Images validated: ${result.validatedImages}`);
  console.log(`Missing images: ${result.totalImages - result.validatedImages}`);

  if (result.hasWarnings) {
    console.log(`\n\u26a0\ufe0f  Warnings: ${result.warnings.length}`);
    result.warnings.forEach(warning => console.log(`  - ${warning}`));
  }

  if (result.hasErrors) {
    console.log(`\n\u274c Errors: ${result.errors.length}`);
    result.errors.forEach(error => console.log(`  - ${error}`));

    if (!dryRun) {
      console.error('\n\u274c Image validation failed. Please fix the missing images before deploying.');
      process.exit(1);
    } else {
      console.log('\n\u26a0\ufe0f  Dry run completed with errors. Build will continue.');
    }
  } else {
    console.log('\n\u2705 All images validated successfully!');
  }

  return result;
}

// Parse command line arguments
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

// Run the validation
validateImages(dryRun);