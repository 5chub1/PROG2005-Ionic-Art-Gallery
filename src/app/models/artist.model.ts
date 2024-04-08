export default interface Artist {
  id: string;
  name: string;
  dob: Date;
  gender: 'Female' | 'Male' | 'Unspecified';
  artworkType: 'painting' | 'sculpture' | 'photograph' | 'video art' | 'digital art' | 'printmaking';
  contactInfo: string;
  exhibitionDate: Date;
  specialNotes?: string;
  isFeatured: boolean;
}