import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all listings with host information
export async function getListings() {
  try {
    const response = await cosmic.objects
      .find({ type: 'listings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch listings');
  }
}

// Fetch a single listing by slug
export async function getListing(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'listings',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch listing');
  }
}

// Fetch reviews for a specific listing
export async function getReviewsForListing(listingId: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'reviews',
        'metadata.listing': listingId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch reviews');
  }
}

// Fetch all hosts
export async function getHosts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'hosts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch hosts');
  }
}