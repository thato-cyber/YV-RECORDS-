import { ArtistData, Release, Video, Testimonial } from './types';

export const ARTIST_DATA: ArtistData = {
  name: "ANDRE DA ARTISTE",
  tagline: "More Than Music. A Movement.",
  subheadline: "Blending Afrobeat, Amapiano, Hip Hop and raw storytelling into unforgettable global sounds.",
  genres: ["Afrobeat", "Amapiano", "Hip Hop", "Afro-fusion"],
  bio: {
    story: "Born and raised in the vibrant heart of South Africa, Andre Da Artiste didn't just find music—music found him. Starting from the ground up as an independent artist, he used the rhythm of his streets and the heartbeat of his heritage to craft a sound that defies borders. His journey is one of resilience, late-night sessions, and an unwavering belief in the power of raw storytelling.",
    vision: "With a vision that spans from the townships of SA to the global stages of London and New York, Andre is not just creating songs; he's building a bridge between cultures. His sound is a fusion of rhythmic Afrobeat foundations, the soul-stirring depth of Amapiano, and the lyrical grit of Hip Hop."
  },
  socials: {
    spotify: "https://open.spotify.com/artist/example",
    appleMusic: "https://music.apple.com/artist/example",
    youtube: "https://youtube.com/c/example",
    audiomack: "https://audiomack.com/artist/example",
    instagram: "https://instagram.com/andredaartiste",
    twitter: "https://twitter.com/andredaartiste",
    whatsapp: "https://wa.me/27123456789", // Placeholder
    email: "andredaartiste7@gmail.com"
  }
};

export const RELEASES: Release[] = [
  {
    id: "1",
    title: "Vibes from the South",
    type: "EP",
    imageUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
    year: "2024",
    spotifyId: "6N2uI3K7Vl0" // Placeholder
  },
  {
    id: "2",
    title: "Gold Chains",
    type: "Single",
    imageUrl: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: "3",
    title: "Midnight in Lagos",
    type: "Single",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    year: "2023"
  }
];

export const VIDEOS: Video[] = [
  {
    id: "v1",
    title: "Official Music Video - Waves",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Lindiwe M.",
    role: "Fan & Blogger",
    text: "The energy Andre brings to every track is unmatched. He truly represents the new era of South African sound."
  },
  {
    id: "t2",
    name: "James K.",
    role: "Industry Producer",
    text: "A master of fusion. Andre knows exactly how to blend genres while keeping the soul of the music intact."
  }
];
