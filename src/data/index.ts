import { NavItem, Service, Industry, TeamMember, InsightTopic, Testimonial, Partner } from '../types';

export const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Tax Planning & Strategy',
    description: 'Comprehensive tax planning with detailed comparisons and analysis to optimize tax efficiency for individuals and businesses.',
    icon: 'BarChart',
  },
  {
    id: 2,
    title: 'Business Consulting',
    description: 'Strategic advice for business start-ups, ongoing operations, and succession planning to ensure long-term success.',
    icon: 'Briefcase',
  },
  {
    id: 3,
    title: 'Retirement Planning',
    description: 'Customized retirement strategies that secure your financial future while maximizing tax advantages.',
    icon: 'PiggyBank',
  },
  {
    id: 4,
    title: 'Financial Analysis',
    description: 'Detailed financial analysis to identify opportunities for growth and improvement in your business operations.',
    icon: 'LineChart',
  },
];

export const industries: Industry[] = [
  { id: 1, name: 'Construction', icon: 'Building' },
  { id: 2, name: 'Dentists', icon: 'Stethoscope' },
  { id: 3, name: 'Healthcare Providers', icon: 'HeartPulse' },
  { id: 4, name: 'Restaurants', icon: 'Utensils' },
  { id: 5, name: 'Gas Stations', icon: 'Fuel' },
  { id: 6, name: 'Law Firms', icon: 'Scale' },
  { id: 7, name: 'Manufacturers', icon: 'Factory' },
  { id: 8, name: 'Real Estate', icon: 'Home' },
  { id: 9, name: 'Farms', icon: 'Wheat' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John D.',
    title: 'U.S. Army Veteran – New Business Owner',
    content: 'I was a bit lost when transitioning from military service to running a business. The whole world of taxes and business planning felt like a maze. But when I reached out to VETERAN, I immediately felt like I had a team that understood me. They guided me through the whole process, from building a solid business plan to finding the best tax strategies. Their mentorship has been a game-changer, and I now feel like I\'m not just surviving—I\'m thriving in the business world.',
  },
  {
    id: 2,
    name: 'Sarah M.',
    title: 'U.S. Navy Veteran – Entrepreneur',
    content: 'I\'ve always been a go-getter, but managing taxes for my small business was something I never quite had a handle on. VETERAN\'s team changed that for me. From the first consultation, they listened, understood my goals, and created a tax plan that made sense. They weren\'t just about cutting taxes—they focused on my long-term business growth. Now, I\'m confident that my business\'s financial future is solid, and that\'s a huge relief.',
  },
  {
    id: 3,
    name: 'Lisa R.',
    title: 'Military Spouse – Family Financial Planning',
    content: 'Navigating our family\'s finances as a military spouse was overwhelming. I wanted to make sure we were doing everything right, both personally and in our business. VETERAN took the time to get to know us and created a tailored financial plan that made everything so much clearer. I\'m incredibly grateful for their support and for making sure our family\'s financial future is as strong as it can be.',
  },
  {
    id: 4,
    name: 'Michael T.',
    title: 'U.S. Marine Corps Veteran – Veteran Entrepreneur',
    content: 'As a veteran starting my own business, I had no idea where to even begin with taxes and financial planning. VETERAN was a lifeline. They didn\'t just give me a generic tax strategy—they personalized everything to my unique challenges. From day one, their guidance made all the difference. My business is growing steadily, and I know I\'ve got a team of experts looking out for my success every step of the way.',
  },
  {
    id: 5,
    name: 'David L.',
    title: 'U.S. Air Force Veteran – Tax & Financial Advisor',
    content: 'When I first came to VETERAN, I didn\'t realize how many tax benefits were available to veterans like me. Their workshops and one-on-one consultations were exactly what I needed to understand how to leverage those benefits. Thanks to their help, I\'m making smarter financial decisions, both personally and for my business. They didn\'t just educate me—they empowered me to make the most of every opportunity.',
  },
];

export const partners: Partner[] = [
  {
    id: 1,
    name: 'Small Business Administration',
    logo: 'https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/logos/SBA-logo.png',
    alt: 'SBA Logo',
  },
  {
    id: 2,
    name: 'Disabled American Veterans',
    logo: 'https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/logos/dav.png',
    alt: 'DAV Logo',
  },
  {
    id: 3,
    name: 'Veterans of Foreign Wars',
    logo: 'https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/logos/vfw.png',
    alt: 'VFW Logo',
  },
  {
    id: 4,
    name: 'American Legion',
    logo: 'https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/logos/american%20legion.png',
    alt: 'American Legion Logo',
  },
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Seung Choi',
    title: 'Principal at VETERAN',
    bio: [
      'Seung leads VETERAN, a highly regarded firm specializing in personalized tax solutions and strategic financial guidance. With extensive experience across both the private and public sectors, including years of service in federal government agencies. Seung is dedicated to helping small businesses and individuals navigate complex financial landscapes. His approach focuses on creating customized strategies that optimize tax efficiency and foster sustainable growth.',
      'Seung holds a Bachelor of Science in Accounting and a Master of Business Administration with a concentration in Taxation, both earned in New York. His forward-thinking approach to financial strategy is reflected in his doctoral dissertation, Blockchain-Enabled Tax Compliance: Revolutionizing Real-Time Audits and Reshaping the Future of Taxation, highlighting his passion for innovation in the field.',
      'A proud U.S. Army veteran, Seung embodies leadership, integrity, and a strong commitment to service. His professional credentials include licensure in New York, IRS Enrolled Agent status, and recognition as a Certified Tax Strategist. He is also a licensed New York State real estate agent, Certified Acceptance Agent, and Certified Defense Financial Manager. Additionally, Seung holds all levels of DoD Financial Management Certifications and Lean Six Sigma Green and Black Belt certifications. Currently, he is pursuing a Juris Doctor degree to further enhance his expertise in tax and legal matters.',
      'Seung is an active member of the American Institute of Certified Public Accountants, the New York State Society of Certified Public Accountants, and the National Association of Certified Valuators and Analysts. He also serves on the boards of several nonprofit organizations, contributing his expertise to meaningful causes.',
      'Outside of his professional life, Seung is dedicated to maintaining a disciplined, healthy lifestyle and can often be found lifting weights at the gym, enjoying time with family, or spending time outdoors fishing and camping.',
      'With a deep understanding of the unique needs of small businesses and high-net-worth individuals, Seung crafts effective financial solutions that streamline operations, reduce tax burdens, and promote lasting success. His commitment to continuous learning and problem-solving ensures that he remains a trusted advisor in today\'s evolving financial landscape.'
    ],
    image: 'https://images.pexels.com/photos/5083408/pexels-photo-5083408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const insightTopics: InsightTopic[] = [
  {
    id: 1,
    title: 'Tax Depreciation and Expensing',
    description: 'With changes in tax law, it\'s crucial for businesses to navigate how to depreciate assets or expense them under Section 179. The IRS has revised limits, and tax planning can help optimize deductions for capital expenditures.',
  },
  {
    id: 2,
    title: 'Research & Experimentation Tax Credit',
    description: 'Businesses investing in innovative projects can benefit from enhanced tax credits for research and development. Keeping abreast of these provisions, especially as IRS rules evolve, is essential for companies looking to reduce tax burdens.',
  },
  {
    id: 3,
    title: 'Interest Expense Deduction Limitations',
    description: 'The TCJA introduced limitations on the deductibility of business interest expenses. Understanding how these limitations apply, particularly for businesses with high debt loads, can be key to minimizing taxable income.',
  },
];