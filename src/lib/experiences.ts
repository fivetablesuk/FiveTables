export type Experience = {
  slug: string;
  monthLabel: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  heroImage?: string;
  details?: string[];
  ctaHref?: string;
  ctaLabel?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "private-pool-snooker",
    monthLabel: "December 2026",
    title: "Private Pool & Snooker Evening",
    summary:
      "An evening of friendly competition, exceptional company and games at Poolhouse, Liverpool Street.",
    description:
      "Join fellow members for a refined evening of pool and snooker — private suite access, an events games host, and a welcome drink in an intimate setting built for conversation as much as competition.",
    image: "/images/poolhouse.jpg",
    heroImage: "/images/poolhouse.jpg",
    details: [
      "Saturday 5th December 2026",
      "8:00 PM",
      "Poolhouse, Liverpool Street",
      "£89",
    ],
    ctaHref: "/events/poolhouse",
    ctaLabel: "Secure Your Spot",
  },
  {
    slug: "private-whisky-tasting",
    monthLabel: "January 2027",
    title: "Private Whisky Tasting",
    summary:
      "A guided tasting of rare and distinguished whiskies in an intimate setting.",
    description:
      "An evening dedicated to craft and conversation — guided through a curated selection of whiskies, with the time and company to appreciate each pour properly.",
    image: "/images/experiences/placeholder.jpg",
    details: ["January 2027", "London", "Members & invited guests"],
  },
  {
    slug: "cigars-conversation",
    monthLabel: "February 2027",
    title: "Cigars & Conversation",
    summary:
      "An evening of fine cigars, good company and unhurried conversation.",
    description:
      "Settle in for an evening shaped around presence — carefully selected cigars, a considered pour, and the kind of conversation that only happens when the room is right.",
    image: "/images/experiences/placeholder.jpg",
    details: ["February 2027", "London", "Members & invited guests"],
  },
  {
    slug: "indoor-golf-clays",
    monthLabel: "March 2027",
    title: "Indoor Golf & Clays",
    summary:
      "Competitive pursuit indoors — golf simulation and clay shooting in one experience.",
    description:
      "A day of precision and play: indoor golf and clays brought together for members who enjoy competition without sacrificing the calibre of the company.",
    image: "/images/experiences/placeholder.jpg",
    details: ["March 2027", "Greater London", "Members & invited guests"],
  },
  {
    slug: "outdoor-golf",
    monthLabel: "April 2027",
    title: "Outdoor Golf Experience",
    summary:
      "A day on the course with fellow members — landscape, pace and good company.",
    description:
      "Leave the city behind for a full outdoor golf experience — beautiful fairways, unhurried rounds, and the shared pleasure of a day well spent among peers.",
    image: "/images/experiences/placeholder.jpg",
    details: ["April 2027", "UK", "Members & invited guests"],
  },
  {
    slug: "shooting-experience",
    monthLabel: "May 2027",
    title: "Shooting Experience",
    summary:
      "A curated shooting day for members who value skill, focus and tradition.",
    description:
      "An outdoor shooting experience designed with care — instruction where needed, challenge for those who want it, and the quiet satisfaction of a day outdoors among equals.",
    image: "/images/experiences/placeholder.jpg",
    details: ["May 2027", "UK", "Members & invited guests"],
  },
  {
    slug: "padel-social",
    monthLabel: "June 2027",
    title: "Padel Social",
    summary:
      "A social padel gathering — movement, energy and connection on court.",
    description:
      "A lively padel social for members — mixed play, easy competition and the chance to meet others across the five tables in a fresh setting.",
    image: "/images/experiences/placeholder.jpg",
    details: ["June 2027", "London", "Members & invited guests"],
  },
  {
    slug: "polo-experience",
    monthLabel: "July 2027",
    title: "Polo Experience",
    summary:
      "An afternoon of polo — atmosphere, elegance and exceptional company.",
    description:
      "Experience the world of polo up close — the energy of the pitch, the setting of a classic day out, and the company of a carefully gathered room.",
    image: "/images/experiences/placeholder.jpg",
    details: ["July 2027", "UK", "Members & invited guests"],
  },
  {
    slug: "motorsport-experience",
    monthLabel: "August 2027",
    title: "Motorsport Experience",
    summary:
      "Speed, precision and adrenaline — a motorsport day for members.",
    description:
      "A high-octane motorsport experience built for those who appreciate craft under pressure — track time, insight from the paddock, and a day you will remember.",
    image: "/images/experiences/placeholder.jpg",
    details: ["August 2027", "UK", "Members & invited guests"],
  },
];

export function getExperience(slug: string) {
  return EXPERIENCES.find((experience) => experience.slug === slug);
}

export function getExperienceSlugs() {
  return EXPERIENCES.map((experience) => experience.slug);
}
