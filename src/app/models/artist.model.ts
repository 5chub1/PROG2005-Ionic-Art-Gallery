export default interface Artist {
  artist_id: string;
  name: string;
  dob: Date;
  gender: 'Female' | 'Male' | 'Unspecified';
  artwork_type: 'painting' | 'sculpture' | 'photograph' | 'video art' | 'digital art' | 'printmaking';
  contact_info: string;
  exhibition_date: Date;
  special_notes?: string;
  is_featured_artist: boolean;
}