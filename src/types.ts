export interface ArtistData {
  name: string;
  tagline: string;
  subheadline: string;
  genres: string[];
  bio: {
    story: string;
    vision: string;
  };
  socials: {
    spotify: string;
    appleMusic: string;
    youtube: string;
    audiomack: string;
    instagram: string;
    twitter: string;
    whatsapp: string;
    email: string;
  };
}

export interface Release {
  id: string;
  title: string;
  type: 'Single' | 'EP' | 'Album';
  imageUrl: string;
  spotifyId?: string;
  year: string;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}
