// Type definitions for Cosmic CMS objects

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface PropertyType {
  key: 'entire_place' | 'private_room' | 'shared_room';
  value: string;
}

export interface Photo {
  url: string;
  imgix_url: string;
}

export interface Host extends CosmicObject {
  type: 'hosts';
  metadata: {
    name: string;
    bio?: string;
    profile_photo?: Photo;
    member_since?: string;
    response_rate?: number;
  };
}

export interface Listing extends CosmicObject {
  type: 'listings';
  metadata: {
    title: string;
    description: string;
    price_per_night: number;
    location: string;
    property_type: PropertyType;
    guests: number;
    bedrooms: number;
    bathrooms: number;
    amenities?: string[];
    photos?: Photo[];
    host?: Host;
    available?: boolean;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    listing?: Listing;
    guest_name: string;
    rating: number;
    comment: string;
    review_date?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}