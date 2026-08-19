export interface Business {
  title: string;
  desc: string;
  img: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface Leader {
  name: string;
  title: string;
  img: string;
}

export interface NewsItem {
  img: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
}

export interface SustainabilityInitiative {
  iconName: 'Sun' | 'Leaf' | 'TrendingDown' | 'Users';
  title: string;
  desc: string;
}

export interface BahrainLocation {
  id: string;
  name: string;
  region: string;
  x: string;
  y: string;
  type: string;
  address: string;
  iconName: 'Landmark' | 'Building2' | 'Wrench' | 'Factory';
}

export interface StatItem {
  iconName: 'Calendar' | 'Users' | 'Building2' | 'UserCheck' | 'Handshake';
  end: number;
  suffix: string;
  label: string;
}


export const bahrainLocations: BahrainLocation[] = [
  {
    id: 'manama',
    name: 'Headquarters - Manama',
    region: 'Al ‘Āşimah',
    x: '52%',
    y: '22%',
    type: 'Headquarters',
    address: 'Kanoo Tower, Manama Diplomatic Area',
    iconName: 'Landmark',
  },
  {
    id: 'seef',
    name: 'Lexus Centre - Seef',
    region: 'Al ‘Āşimah',
    x: '42%',
    y: '20%',
    type: 'Showroom',
    address: 'Seef District, Manama',
    iconName: 'Building2',
  },
  {
    id: 'muharraq',
    name: 'Service Center - Muharraq',
    region: 'Al Muḩarraq',
    x: '64%',
    y: '14%',
    type: 'Service Center',
    address: 'Airport Road, Muharraq',
    iconName: 'Wrench',
  },
  {
    id: 'hidd',
    name: 'Industrial Division - Hidd',
    region: 'Al Muḩarraq',
    x: '72%',
    y: '25%',
    type: 'Industrial',
    address: 'BIIP Industrial Area, Hidd',
    iconName: 'Factory',
  },
  {
    id: 'sitra',
    name: 'Toyota Showroom - Sitra',
    region: 'Al Janūbīyah',
    x: '56%',
    y: '34%',
    type: 'Showroom',
    address: 'Sitra Highway, Sitra',
    iconName: 'Building2',
  },
];

export const sustainabilityInitiatives: SustainabilityInitiative[] = [

  {
    iconName: 'Sun',
    title: 'Renewable Energy',
    desc: 'Investing in solar and clean energy solutions to power Bahrain.',
  },
  {
    iconName: 'Leaf',
    title: 'ESG Initiatives',
    desc: 'Embedding environmental, social, and governance standards across operations.',
  },
  {
    iconName: 'TrendingDown',
    title: 'Carbon Reduction',
    desc: 'Measurable carbon footprint reduction across all business divisions.',
  },
  {
    iconName: 'Users',
    title: 'Community Impact',
    desc: 'Empowering communities through education, health, and green programs.',
  },
];

export const statItems: StatItem[] = [
  {
    iconName: 'Calendar',
    end: 60,
    suffix: '+',
    label: 'Years of Legacy in Bahrain',
  },
  {
    iconName: 'Users',
    end: 2600,
    suffix: '+',
    label: 'Employees and Growing',
  },
  {
    iconName: 'Building2',
    end: 15,
    suffix: '+',
    label: 'Business Divisions',
  },
  {
    iconName: 'UserCheck',
    end: 100000,
    suffix: '+',
    label: 'Happy Customers',
  },
  {
    iconName: 'Handshake',
    end: 25,
    suffix: '+',
    label: 'Global Brands & Partnerships',
  },
];

export interface AboutFeature {
  iconName: 'Award' | 'Users' | 'Leaf';
  title: string;
}

export const aboutData = {
  tag: 'ABOUT US',
  titleLine1: 'A Legacy Built on Trust',
  titleLine2: 'A Future Driven by Innovation.',
  description:
    'From a humble beginning in 1960 to becoming one of the most diversified business groups in the region, our journey has been defined by values, vision and the trust of Bahrain.',
  ctaText: 'OUR STORY',
  ctaHref: '#story',
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
  imageAlt: 'Ebrahim K. Kanoo Headquarters',
  features: [
    {
      iconName: 'Award',
      title: "Bahrain's\nHomegrown\nEnterprise",
    },
    {
      iconName: 'Users',
      title: 'Built on Values.\nFocused on\nPeople.',
    },
    {
      iconName: 'Leaf',
      title: 'Committed to\nSustainability &\nCommunities.',
    },
  ] as AboutFeature[],
};

export interface HeaderNavItem {
  label: string;
  href: string;
}

export const headerNavItems: HeaderNavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Businesses', href: '#businesses' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Our Brands', href: '#brands' },
  { label: 'News & Insights', href: '#news' },
  { label: 'Presence', href: '#presence' },
];

export interface FooterSocialLink {
  iconName: 'Globe' | 'Linkedin' | 'Twitter' | 'Instagram';
  label: string;
  href: string;
}

export const footerData = {
  group: [
    { label: 'About Us', href: '#about' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Heritage & Legacy', href: '#about' },
    { label: 'Sustainability', href: '#sustainability' },
  ],
  businesses: [
    { label: 'Automotive', href: '#businesses' },
    { label: 'Leasing Solutions', href: '#businesses' },
    { label: 'Industrial Equipment', href: '#businesses' },
    { label: 'Information Technology', href: '#businesses' },
    { label: 'Energy & Power', href: '#businesses' },
    { label: 'Security Systems', href: '#businesses' },
  ],
  resources: [
    { label: 'News & Insights', href: '#news' },
    { label: 'Presence & Map', href: '#presence' },
    { label: 'Careers', href: '#' },
    { label: 'Investor Relations', href: '#' },
  ],
  socials: [
    { iconName: 'Globe', label: 'Website', href: '#' },
    { iconName: 'Linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
    { iconName: 'Twitter', label: 'Twitter', href: 'https://twitter.com' },
    { iconName: 'Instagram', label: 'Instagram', href: 'https://instagram.com' },
  ] as FooterSocialLink[],
  bottomLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Sitemap', href: '#' },
  ],
};

export const businesses: Business[] = [
  {
    title: 'Automotive',
    desc: 'Toyota, Lexus and complete mobility solutions.',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Leasing',
    desc: 'Smart leasing solutions for businesses.',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Industrial',
    desc: 'World-class equipment and industrial solutions.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Information Technology',
    desc: 'Innovative IT solutions for a connected world.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Energy',
    desc: 'Powering a cleaner and sustainable tomorrow.',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Security',
    desc: 'Advanced security solutions for total peace of mind.',
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
  },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85',
    alt: 'Luxury silver car driving on highway at golden hour',
    titleLine1: 'Driven by Trust.',
    titleLine2: 'Powered by Excellence.',
    subtitle: "For over 60 years, Ebrahim K. Kanoo has been Bahrain's trusted partner in progress.",
    ctaText: 'DISCOVER OUR GROUP',
    ctaLink: '#businesses',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85',
    alt: 'Modern Middle Eastern skyline at dusk',
    titleLine1: 'Pioneering Mobility.',
    titleLine2: 'Inspiring Innovation.',
    subtitle: 'Delivering world-class automotive, industrial, and technology solutions across the Kingdom.',
    ctaText: 'EXPLORE BUSINESSES',
    ctaLink: '#businesses',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    alt: 'Modern glass corporate skyscraper architecture',
    titleLine1: 'Empowering Bahrain.',
    titleLine2: 'Building The Future.',
    subtitle: 'Investing in local talent, sustainable development, and nationwide economic progress.',
    ctaText: 'LEARN MORE ABOUT US',
    ctaLink: '#about',
  },
];

export const brands: string[] = ['Toyota', 'Lexus', 'Toyota Plaza', 'Ziebart', 'TyrePlus'];

export const leaders: Leader[] = [
  {
    name: 'Ebrahim K. Kanoo',
    title: 'Chairman',
    img: '/images/leader-1.png',
  },
  {
    name: 'Senior Executive',
    title: 'Chief Executive Officer',
    img: '/images/leader-2.png',
  },
  {
    name: 'Senior Executive',
    title: 'Vice President, Operations',
    img: '/images/leader-3.png',
  },
];

export const newsItems: NewsItem[] = [
  {
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    date: '15 Jul 2025',
    category: 'Corporate',
    title: 'Ebrahim K. Kanoo Group Reports Strong Q2 Performance Across All Divisions',
    excerpt: 'The Group continues to demonstrate robust growth in automotive, industrial, and technology sectors.',
  },
  {
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    date: '02 Jul 2025',
    category: 'Automotive',
    title: 'New Toyota Land Cruiser Arrives in Bahrain Through Exclusive Kanoo Partnership',
    excerpt: 'Bahrain customers can now experience the all-new Land Cruiser at Kanoo showrooms across the Kingdom.',
  },
  {
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    date: '18 Jun 2025',
    category: 'CSR',
    title: 'Kanoo Group Launches Major Community Education Initiative Across Bahrain',
    excerpt: 'The initiative aims to support STEM education in 20 schools across the Kingdom.',
  },
];


