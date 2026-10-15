// Single source of truth for everything on the EPICJARED landing page.
// Edit prices, ticket links, dates and copy here; components only render it.

// Kyle's dedicated EPICJARED checkout (Epic Jared Pass: Base Camp $17.99 / All Access $34.99).
// Its own checkout keeps offer sales separate from regular tickets in ROLLER reporting.
const ROLLER_TICKETS = "https://ecom.roller.app/bolderadventurepark/epicjaredadmission/en-us/home";
const BOLDER_UPLOADS = "https://bolderadventurepark.com/wp-content/uploads";
const JARED_ASSETS = "https://epicjared.com/assets";

export const site = {
  // Vercel sets VERCEL_PROJECT_PRODUCTION_URL; override with NEXT_PUBLIC_SITE_URL for a custom domain.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  name: "EPICJARED Exclusive Offer at Bolder Adventure Park",
};

export const offer = {
  code: "EPICJARED",
  // Shown in the countdown. Jared plans to promote this as "this weekend only".
  // Set to null to hide the countdown entirely.
  endsAt: "2026-10-18T19:00:00-05:00",
  endsLabel: "Sunday at close",
  scarcity: "Limited quantities available per day",
};

export type Pass = {
  id: string;
  name: string;
  price: string;
  // Optional strike-through price. Leave null unless the regular price is confirmed.
  regularPrice: string | null;
  tagline: string;
  // EPICJARED Roller checkout (set 16 Oct by Shoab).
  ticketUrl: string;
  image: { src: string; alt: string; width: number; height: number };
  attractions: string[];
  extras: string[];
  featured: boolean;
};

const baseCampAttractions = [
  "Bumper Cars",
  "Exploration Playground",
  "Adventure Nets",
  "Jump Pad",
  "Blaster Zone",
  "Tubing Slides",
];

export const passes: Pass[] = [
  {
    id: "base-camp",
    name: "Epic Jared – Base Camp",
    price: "17.99",
    regularPrice: null,
    tagline: "All the ground-level action.",
    ticketUrl: `${ROLLER_TICKETS}?utm_source=epicjared_landing&utm_medium=referral&utm_campaign=epicjared&utm_content=base-camp`,
    image: {
      src: `${BOLDER_UPLOADS}/2026/05/DSC04155-768x512.webp`,
      alt: "Two kids racing down the tubing slides at Bolder Adventure Park",
      width: 768,
      height: 512,
    },
    attractions: baseCampAttractions,
    extras: [],
    featured: false,
  },
  {
    id: "all-access",
    name: "Epic Jared – All Access",
    price: "34.99",
    regularPrice: null,
    tagline: "The whole park, ground to summit.",
    ticketUrl: `${ROLLER_TICKETS}?utm_source=epicjared_landing&utm_medium=referral&utm_campaign=epicjared&utm_content=all-access`,
    image: {
      src: `${BOLDER_UPLOADS}/2025/11/Photo-Carousel_RopesCourse_690x637_5.webp`,
      alt: "A man zip lining across Bolder Adventure Park",
      width: 690,
      height: 637,
    },
    attractions: baseCampAttractions,
    extras: [
      "Rock Climbing",
      "Mountain Experience",
      "Free Fall Jump",
      "Ropes Course & Zip Lines",
    ],
    featured: true,
  },
];

// Every string attributed to Jared must be copied word for word from his
// October 12 Facebook post. Do not paraphrase. Do not add the 75% / 100% /
// $6.25 admission-coverage section of that post anywhere on this page.
// Source post: https://www.facebook.com/share/p/1QXXNe8tNk/ (deliberately not linked
// from the page, because the rest of the post describes the excluded offer).
export const jared = {
  name: "Jared Guynes",
  postDate: "October 12 at 9:05 PM",
  websiteUrl: "https://epicjared.com/",
  quotes: {
    headline: "Bolder Adventure Park in Grand Prairie needs help.",
    pitch:
      "Despite being an amazing, affordable, climate-controlled indoor fun space for all ages: business has not been great. This family fun facility has rock climbing, zip lines, tube slides, bumper cars, and 7 treehouses connected by rope bridges. There is an arcade, a playground and a blaster arena. Parking is absolutely free. And you’ll never get wet or sunburned.",
    climate: "climate-controlled indoor fun space for all ages",
    rides: "rock climbing, zip lines, tube slides, bumper cars",
    treehouses: "7 treehouses connected by rope bridges",
    arcade: "There is an arcade, a playground and a blaster arena.",
    parking: "Parking is absolutely free.",
    weather: "And you’ll never get wet or sunburned.",
    wordOut: "Help me get the word out.",
    closer: "You do your part and I’ll do mine.",
  },
  engagement: [
    { value: "1.2K", label: "reactions" },
    { value: "908", label: "comments" },
    { value: "236", label: "shares" },
  ],
  credentials: [
    { value: "4×", label: "Guinness World Records" },
    { value: "2019", label: "Nerf Ultra Champion" },
    { value: "300K+", label: "followers" },
    { value: "S6", label: "The Floor on FOX" },
  ],
  ticker: [
    "Nerf Champion",
    "4× Guinness World Record Holder",
    "Blaster Battle Host",
    "The Floor · Season 6 on FOX",
    "300,000+ Followers",
    "Rockwall, Texas",
  ],
  press: [
    "Good Morning America",
    "CBS News",
    "Sports Illustrated",
    "NBC 5",
    "The Dallas Morning News",
    "Texas Monthly",
  ],
  images: {
    portrait: {
      src: `${JARED_ASSETS}/jared-guynes-portrait-1120.webp`,
      alt: "Jared Guynes smiling in his signature bright floral shirt",
      width: 1120,
      height: 1323,
    },
    stadium: {
      src: `${JARED_ASSETS}/jared-guynes-blaster-battle-crowd-att-stadium-1600.webp`,
      alt: "Jared Guynes on stage at AT&T Stadium as thousands raise their foam blasters",
      width: 1600,
      height: 1201,
    },
  },
};

export const bolder = {
  name: "Bolder Adventure Park",
  websiteUrl: "https://bolderadventurepark.com/",
  logo: `${BOLDER_UPLOADS}/2026/04/Bolder-Lock-Up-White-logos-1-1.svg`,
  // Bolder's own site icon (the "B" from the logo, 64×64), used as this page's favicon.
  favicon: `${BOLDER_UPLOADS}/2025/05/fav.webp`,
  address: "2324 W Warrior Trail",
  city: "Grand Prairie, TX 75052",
  mapsUrl: "https://maps.google.com/?q=Bolder+Adventure+Park,+2324+W+Warrior+Trl,+Grand+Prairie,+TX+75052",
  phone: "(469) 858-0577",
  phoneHref: "tel:+14698580577",
  email: "bolder@bolderpark.com",
  waiverUrl: "https://waiver.roller.app/BolderAdventurePark/home",
  facebookUrl: "https://www.facebook.com/BolderAdventurePark",
  privacyUrl: "https://bolderadventurepark.com/privacy-policy/",
  faqUrl: "https://bolderadventurepark.com/faqs/",
  hours: [
    { day: "Friday", time: "4 PM – 9 PM" },
    { day: "Saturday", time: "11 AM – 9 PM" },
    { day: "Sunday", time: "11 AM – 7 PM" },
  ],
  google: {
    rating: "4.4",
    reviews: "3,196",
    url: "https://maps.google.com/?cid=13194092835865901850",
    highlights: [
      "The staff and service were outstanding and prices very reasonable.",
      "Climbing, jungle gyms, slides and video games, this place has it all.",
      "The bar, concession area is well done with full menu of food and drinks.",
    ],
  },
};

// Five photos: the first is the large tile in the mosaic.
export const gallery = [
  {
    src: `${BOLDER_UPLOADS}/2026/05/DSC02962-800-768x512.webp`,
    alt: "Family climbing the indoor Mountain Course",
    label: "Mountain Experience",
    width: 768,
    height: 512,
  },
  {
    src: `${BOLDER_UPLOADS}/2026/05/DSC04118-800-768x512.webp`,
    alt: "Kids smiling on the tubing slides",
    label: "Tubing Slides",
    width: 768,
    height: 512,
  },
  {
    src: `${BOLDER_UPLOADS}/2026/05/guests-laser-tag-bolder-adventure-768x565.webp`,
    alt: "Guests with foam blasters in the Blaster Zone",
    label: "Blaster Zone",
    width: 768,
    height: 565,
  },
  {
    src: `${BOLDER_UPLOADS}/2026/05/girl-zip-lining-bolder-adventure-768x601.webp`,
    alt: "Girl zip lining over the park",
    label: "Zip Lines",
    width: 768,
    height: 601,
  },
  {
    src: `${BOLDER_UPLOADS}/2026/07/DSC08363-1-768x512.webp`,
    alt: "Kid scaling the climbing wall",
    label: "Rock Climbing",
    width: 768,
    height: 512,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  source: "Google review" | "Comment on Jared’s post" | "Bolder guest";
  detail?: string;
};

// Reviewer names are shortened to first name + last initial.
export const testimonials: Testimonial[] = [
  {
    quote:
      "We went here on an evening with kids and it was awesome fun. I have 2 teens and a toddler. There is something for all age group here.",
    name: "Rafiq K.",
    source: "Google review",
    detail: "Local Guide",
  },
  {
    quote:
      "This place is awesome. Our son had his birthday there 2 years in a row. Great spot.",
    name: "Aaron Y.",
    source: "Comment on Jared’s post",
  },
  {
    quote:
      "Fun place, something different for kids and adults to both enjoy. Place is big and has games and arcades.",
    name: "Maria V.",
    source: "Google review",
    detail: "Local Guide",
  },
  {
    quote:
      "The indoor mountain was amazing — it felt like stepping into a real outdoor adventure. Climbing to the top gave us such a sense of accomplishment. A must-try experience!",
    name: "Omar H.",
    source: "Bolder guest",
    detail: "Mountain Experience",
  },
  {
    quote:
      "Very cool that the community is coming together to help, this place is really awesome and we need these kind of fun adventure parks in a world full of tablets and screens raising our children!",
    name: "Dan H.",
    source: "Comment on Jared’s post",
  },
  {
    quote:
      "What impressed us most was the staff. They were patient, friendly, and always willing to help. Their focus on safety gave us confidence to fully enjoy the park.",
    name: "Chris L.",
    source: "Bolder guest",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What is the EPICJARED Exclusive Offer?",
    a: "A special price on Bolder Adventure Park tickets for Jared’s community: Base Camp for $17.99 and All Access for $34.99 per person. Quantities are limited each day, so book online before you go.",
  },
  {
    q: "What’s the difference between Base Camp and All Access?",
    a: "Base Camp covers all the ground-level action: Bumper Cars, Exploration Playground, Adventure Nets, Jump Pad, Blaster Zone and Tubing Slides. All Access includes everything in Base Camp plus Rock Climbing, the Mountain Experience, the Free Fall Jump and the Ropes Course & Zip Lines.",
  },
  {
    q: "When is Bolder open?",
    a: "Friday 4 PM – 9 PM, Saturday 11 AM – 9 PM and Sunday 11 AM – 7 PM.",
  },
  {
    q: "Where is Bolder Adventure Park, and is parking really free?",
    a: "Bolder is at 2324 W Warrior Trail, Grand Prairie, TX 75052, inside EpicCentral. Yes, parking is free.",
  },
  {
    q: "Are there height or weight requirements?",
    a: "Guests need to be at least 42″ tall for the Base Camp attractions. The mountain and ropes courses require 48″, or 42″ when accompanied by an adult. The ropes course has a 265 lb maximum, and aerial guests must fit properly in a harness. Full safety details are on each attraction page at bolderadventurepark.com.",
  },
  {
    q: "Do I need a waiver?",
    a: "Yes. Every guest needs a ticket and a signed waiver. Sign it online before you arrive and walk right in.",
  },
  {
    q: "Do parents who aren’t playing need a ticket?",
    a: "For everyone’s safety, every guest needs a ticket and waiver. Parents who don’t want to participate can get a discounted Green Parent Pass at the park.",
  },
  {
    q: "How do the Ropes Course and Mountain times work?",
    a: "The Ropes Course and Via Ferrata run on an appointment basis, assigned at the park on a first come, first served basis. Arrive early to get the time you want. Groups of 10 or more should book a group event.",
  },
  {
    q: "Can I bring outside food or drinks?",
    a: "Outside food, drinks and coolers aren’t allowed (except for dietary needs, allergies and baby formula). Bolder has a full concession area with food and drinks.",
  },
];
