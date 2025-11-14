# 🏡 Airbnb Clone - Property Rental Platform

![App Preview](https://imgix.cosmicjs.com/492edd80-c1a8-11f0-a34a-efbcf979242c-photo-1520250497591-112f2f40a3f4-1763158897195.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern property rental platform built with Next.js 16 and powered by Cosmic CMS. Browse vacation rentals, view detailed property information, read guest reviews, and connect with hosts.

## ✨ Features

- 🏠 **Property Listings** - Browse beautiful vacation rentals with detailed information
- 🔍 **Advanced Search & Filtering** - Find properties by location, type, amenities, and more
- 📸 **Photo Galleries** - View multiple high-quality images for each property
- ⭐ **Guest Reviews** - Read authentic reviews with ratings and comments
- 👤 **Host Profiles** - Learn about property hosts with detailed profiles
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations
- 🚀 **Fast Performance** - Server-side rendering with Next.js 16 for optimal speed

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6917aaddd08bae0bc234bd56&clone_repository=6917ace6d08bae0bc234bd74)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create an arbnb clone"

### Code Generation Prompt

> "Build an airbnb clone."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Package Manager**: Bun
- **Image Optimization**: Imgix

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your content configured

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching All Listings

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: listings } = await cosmic.objects
  .find({ type: 'listings' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Listing with Host and Reviews

```typescript
const listing = await cosmic.objects
  .findOne({
    type: 'listings',
    slug: 'beachfront-paradise'
  })
  .depth(1)

// Access host information
const host = listing.object.metadata.host

// Fetch reviews for this listing
const { objects: reviews } = await cosmic.objects
  .find({
    type: 'reviews',
    'metadata.listing': listing.object.id
  })
  .depth(1)
```

### Filtering by Property Type

```typescript
const { objects: entirePlaces } = await cosmic.objects
  .find({
    type: 'listings',
    'metadata.property_type.key': 'entire_place'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This application uses three main Object Types from your Cosmic bucket:

### Listings
- Property title and description
- Price per night
- Location
- Property type (Entire Place, Private Room, Shared Room)
- Guest capacity, bedrooms, and bathrooms
- Amenities (WiFi, Kitchen, Pool, etc.)
- Photo galleries
- Connected host information
- Availability status

### Hosts
- Host name and bio
- Profile photo
- Member since date
- Response rate percentage

### Reviews
- Connected listing reference
- Guest name
- Star rating (1-5)
- Review comment
- Review date

All content is dynamically fetched from Cosmic using the SDK, making it easy to update listings, hosts, and reviews without touching the code.

## 🚢 Deployment Options

### Deploy to Vercel

The easiest way to deploy this Next.js application is with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the "Deploy" button above
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

You can also deploy to Netlify:

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 📖 Learn More

- [Cosmic CMS Documentation](https://www.cosmicjs.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

<!-- README_END -->