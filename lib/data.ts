export interface BlogPost {
  id: string
  title: string
  titleNe: string
  excerpt: string
  excerptNe: string
  content: string
  contentNe: string
  image: string
  date: string
  author: string
  category: string
  likes: number
  comments: number
}

export interface Testimonial {
  id: string
  name: string
  nameNe: string
  position: string
  positionNe: string
  company: string
  companyNe: string
  content: string
  contentNe: string
  image: string
  rating: number
}

export interface Location {
  id: string
  name: string
  nameNe: string
  address: string
  addressNe: string
  phone: string
  email: string
  mapUrl: string
  googleMapsLink?: string
}

export const heroImages = [
  "/hero-image.png",
  "/bela-eco-panel.jpg",
  "/modern-construction-site-with-eco-panels.jpg",
  "/sustainable-building-materials-manufacturing.jpg",
  "/modular-construction-assembly-process.jpg",
  "/completed-modern-sustainable-building.jpg",
]

export const milestones = [
  { value: 100, label: "Eco-Panels Manufactured", labelNe: "इको-प्यानलहरू उत्पादन", suffix: "K+" },
  { value: 10, label: "CSR Initiative Projects", labelNe: "सामाजिक उत्तरदायित्व पहल परियोजनाहरू", suffix: "+" },
  { value: 1, label: "Square Feet Built", labelNe: "वर्ग फिट निर्माण", suffix: "M+" },
  { value: 100, label: "Happy Clients Served", labelNe: "सन्तुष्ट ग्राहकहरू", suffix: "+" },
  { value: 40, label: "Years Experience in Construction", labelNe: "निर्माणमा वर्षौंको अनुभव", suffix: "+" },
]

export interface Feature {
  icon: string
  iconType: "png"
  title: string
  titleNe: string
  description: string
  descriptionNe: string
}

export const whyUsFeatures: Feature[] = [
  { iconType: "png", icon: "/icons/sustainable-eco-friendly.png", title: "Eco-Friendly Panels", titleNe: "पर्यावरण-मैत्री प्यानल", description: "Sustainable and durable", descriptionNe: "दिगो र टिकाउ।" },
  { iconType: "png", icon: "/icons/buildings-2.png", title: "Modular Homes", titleNe: "मोड्युलर घरहरू", description: "Quick to assemble", descriptionNe: "द्रुत निर्माण समयरेखा।" },
  { iconType: "png", icon: "/icons/fireproof.png", title: "Fire Resistant", titleNe: "आगो प्रतिरोधी", description: "Safety first", descriptionNe: "तपाईंको सुरक्षा, हाम्रो प्राथमिकता।" },
  { iconType: "png", icon: "/icons/earthquakeProof.png", title: "Earthquake Resistant", titleNe: "भूकम्प प्रतिरोधी", description: "Built for Nepal", descriptionNe: "नेपाल अनुकूल सुरक्षित निर्माण।" },
  { iconType: "png", icon: "/icons/energy-efficient.png", title: "Cost Effective", titleNe: "लागत प्रभाकारी", description: "High Efficiency at Low Cost", descriptionNe: "कम खर्चमा उच्च दक्षता।" },
  { iconType: "png", icon: "/icons/light-weight.png", title: "Lightweight Materials", titleNe: "प्रयोगमैत्री कम तौल सामग्री", description: "Low Weight, High Quality, Easy handling", descriptionNe: "कम तौल, उच्च गुणस्तर, सजिलो जडान।" },
  { iconType: "png", icon: "/icons/customizable-designs.png", title: "Customizable Designs", titleNe: "आफूअनुसार डिजाइन", description: "Tailored to your needs", descriptionNe: "प्रयोगकर्तालाई प्राथमिकता।" },
  { iconType: "png", icon: "/icons/strong-warranty.png", title: "Full Warranty", titleNe: "पूर्ण ग्यारेन्टी", description: "Your Trusted Companion", descriptionNe: "तपाईंको भरोसाको साथी।" },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Sustainable Construction in Nepal",
    titleNe: "नेपालमा दिगो निर्माणको भविष्य",
    excerpt: "Exploring how eco-friendly building materials are revolutionizing the construction industry.",
    excerptNe: "पर्यावरण-मैत्री निर्माण सामग्रीले निर्माण उद्योगमा कसरी क्रान्ति ल्याइरहेको छ भन्ने अन्वेषण।",
    content:
      "The construction industry in Nepal is undergoing a significant transformation with the adoption of sustainable building practices. Eco-friendly panels and modular construction techniques are not just trends but necessities for our environment. These innovations reduce carbon footprint, minimize waste, and provide superior building performance. At Bela Nepal Industries, we are committed to leading this change by manufacturing high-quality eco panels that meet international standards while being affordable for local markets.",
    contentNe:
      "नेपालको निर्माण उद्योग दिगो निर्माण अभ्यासहरूको अपनाउने साथ महत्त्वपूर्ण परिवर्तनबाट गुज्रिरहेको छ। पर्यावरण-मैत्री प्यानलहरू र मोड्युलर निर्माण प्रविधिहरू केवल प्रवृत्ति मात्र होइन तर हाम्रो वातावरणको लागि आवश्यकता हुन्। यी नवाचारहरूले कार्बन फुटप्रिन्ट घटाउँछन्, फोहोर न्यूनीकरण गर्छन्, र उत्कृष्ट भवन प्रदर्शन प्रदान गर्छन्।",
    image: "/sustainable-construction.png",
    date: "2025-01-15",
    author: "Rajesh Sharma",
    category: "Sustainability",
    likes: 45,
    comments: 12,
  },
  {
    id: "2",
    title: "Benefits of Modular Construction for Commercial Projects",
    titleNe: "व्यावसायिक परियोजनाहरूको लागि मोड्युलर निर्माणका फाइदाहरू",
    excerpt: "Why businesses are choosing modular construction for faster, cost-effective building solutions.",
    excerptNe: "किन व्यवसायहरूले छिटो, लागत-प्रभावी भवन समाधानको लागि मोड्युलर निर्माण छनौट गरिरहेका छन्।",
    content:
      "Modular construction is transforming how commercial buildings are developed. With construction times reduced by up to 50%, businesses can start operations faster. The controlled factory environment ensures consistent quality, and the reduced on-site work minimizes disruption to surrounding areas. Our modular solutions at Bela Nepal Industries offer flexibility in design while maintaining structural integrity and meeting all safety standards.",
    contentNe:
      "मोड्युलर निर्माणले व्यावसायिक भवनहरू कसरी विकसित हुन्छन् भन्ने परिवर्तन गरिरहेको छ। निर्माण समय ५०% सम्म घटाएर, व्यवसायहरूले छिटो सञ्चालन सुरु गर्न सक्छन्। नियन्त्रित कारखाना वातावरणले सुसंगत गुणस्तर सुनिश्चित गर्दछ।",
    image: "/modular-building-construction.png",
    date: "2025-01-10",
    author: "Sita Poudel",
    category: "Construction",
    likes: 38,
    comments: 8,
  },
  {
    id: "3",
    title: "Eco Panels: A Game Changer for Residential Buildings",
    titleNe: "इको प्यानल: आवासीय भवनहरूको लागि खेल परिवर्तक",
    excerpt: "How eco panels are making homes more energy-efficient and environmentally friendly.",
    excerptNe: "इको प्यानलहरूले घरहरूलाई कसरी अधिक ऊर्जा-कुशल र पर्यावरण-मैत्री बनाइरहेका छन्।",
    content:
      "Residential construction is embracing eco panels for their superior insulation properties and sustainability. These panels significantly reduce energy consumption for heating and cooling, leading to lower utility bills. Made from recycled and renewable materials, they contribute to a healthier living environment while reducing the carbon footprint of your home.",
    contentNe:
      "आवासीय निर्माणले तिनीहरूको उत्कृष्ट इन्सुलेशन गुणहरू र दिगोपनको लागि इको प्यानलहरू अपनाइरहेको छ। यी प्यानलहरूले तताउने र चिसो पार्नको लागि ऊर्जा खपत उल्लेखनीय रूपमा घटाउँछन्।",
    image: "/eco-friendly-home-construction.jpg",
    date: "2025-01-05",
    author: "Anil Thapa",
    category: "Residential",
    likes: 52,
    comments: 15,
  },
  {
    id: "4",
    title: "Quality Standards in Panel Manufacturing",
    titleNe: "प्यानल निर्माणमा गुणस्तर मापदण्डहरू",
    excerpt: "Understanding the rigorous quality control processes behind Bela Eco Panels.",
    excerptNe: "बेला इको प्यानलहरू पछाडिको कठोर गुणस्तर नियन्त्रण प्रक्रियाहरू बुझ्दै।",
    content:
      "Quality is at the heart of everything we do at Bela Nepal Industries. Our manufacturing process includes multiple quality checkpoints, from raw material selection to final product testing. We adhere to international standards and conduct regular third-party audits to ensure our panels meet the highest quality benchmarks.",
    contentNe:
      "गुणस्तर बेला नेपाल इन्डस्ट्रीजमा हामीले गर्ने सबै कुराको केन्द्रमा छ। हाम्रो निर्माण प्रक्रियामा कच्चा पदार्थ चयनदेखि अन्तिम उत्पादन परीक्षणसम्म धेरै गुणस्तर जाँच बिन्दुहरू समावेश छन्।",
    image: "/manufacturing-quality-control.png",
    date: "2024-12-28",
    author: "Binod Karki",
    category: "Manufacturing",
    likes: 29,
    comments: 6,
  },
  {
    id: "5",
    title: "Earthquake-Resistant Construction with Eco Panels",
    titleNe: "इको प्यानलहरूसँग भूकम्प-प्रतिरोधी निर्माण",
    excerpt: "How our eco panels provide superior structural integrity in seismic zones.",
    excerptNe: "हाम्रो इको प्यानलहरूले भूकम्पीय क्षेत्रहरूमा कसरी उत्कृष्ट संरचनात्मक अखण्डता प्रदान गर्छन्।",
    content:
      "Nepal's location in a seismically active zone demands construction materials that can withstand earthquakes. Our eco panels are engineered with advanced reinforcement techniques that provide exceptional structural stability. Combined with flexible modular design, they offer both safety and sustainability for earthquake-prone regions.",
    contentNe:
      "भूकम्पीय रूपमा सक्रिय क्षेत्रमा नेपालको स्थानले भूकम्प सहन सक्ने निर्माण सामग्रीको माग गर्दछ। हाम्रो इको प्यानलहरू उन्नत सुदृढीकरण प्रविधिहरूसँग इन्जिनियर गरिएका छन्।",
    image: "/earthquake-resistant-building.jpg",
    date: "2024-12-20",
    author: "Dr. Prakash Shrestha",
    category: "Safety",
    likes: 67,
    comments: 22,
  },
  {
    id: "6",
    title: "Cost Analysis: Traditional vs Modular Construction",
    titleNe: "लागत विश्लेषण: परम्परागत बनाम मोड्युलर निर्माण",
    excerpt: "A comprehensive comparison of costs between traditional and modular building methods.",
    excerptNe: "परम्परागत र मोड्युलर भवन विधिहरू बीच लागतको व्यापक तुलना।",
    content:
      "When comparing traditional construction to modular methods, the cost savings become evident. Modular construction reduces labor costs by 30-40%, minimizes material waste, and shortens project timelines significantly. Our analysis shows that businesses can save up to 25% on total project costs while achieving faster completion times.",
    contentNe:
      "परम्परागत निर्माणलाई मोड्युलर विधिहरूसँग तुलना गर्दा, लागत बचत स्पष्ट हुन्छ। मोड्युलर निर्माणले श्रम लागत ३०-४०% घटाउँछ, सामग्री फोहोर न्यूनीकरण गर्दछ।",
    image: "/construction-cost-analysis.jpg",
    date: "2024-12-15",
    author: "Maya Gurung",
    category: "Business",
    likes: 41,
    comments: 11,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ramesh Adhikari",
    nameNe: "रमेश अधिकारी",
    position: "Project Manager",
    positionNe: "परियोजना प्रबन्धक",
    company: "Himalayan Constructions",
    companyNe: "हिमालयन कन्स्ट्रक्सन",
    content:
      "Working with Bela Nepal Industries has been exceptional. Their eco panels are top quality and the installation process was seamless. Highly recommended!",
    contentNe:
      "बेला नेपाल इन्डस्ट्रीजसँग काम गर्नु असाधारण भएको छ। तिनीहरूका इको प्यानलहरू उच्च गुणस्तरका छन् र स्थापना प्रक्रिया सहज थियो। अत्यधिक सिफारिस गरिएको!",
    image: "/professional-man-portrait.png",
    rating: 5,
  },
  {
    id: "2",
    name: "Sunita Gurung",
    nameNe: "सुनिता गुरुङ",
    position: "Architect",
    positionNe: "वास्तुकार",
    company: "Modern Design Studio",
    companyNe: "आधुनिक डिजाइन स्टुडियो",
    content:
      "The modular construction solutions from Bela have transformed how we approach building projects. Fast, efficient, and sustainable!",
    contentNe: "बेलाबाट मोड्युलर निर्माण समाधानहरूले हामीले भवन परियोजनाहरूमा कसरी पुग्छौं भन्ने परिवर्तन गरेको छ। छिटो, कुशल, र दिगो!",
    image: "/professional-woman-portrait.png",
    rating: 5,
  },
  {
    id: "3",
    name: "Krishna Bahadur Shrestha",
    nameNe: "कृष्ण बहादुर श्रेष्ठ",
    position: "CEO",
    positionNe: "प्रमुख कार्यकारी अधिकारी",
    company: "Valley Developers",
    companyNe: "भ्याली डेभलपर्स",
    content:
      "Bela Nepal Industries delivers on their promises. Quality products, timely delivery, and excellent customer service.",
    contentNe: "बेला नेपाल इन्डस्ट्रीजले आफ्नो प्रतिज्ञाहरू पूरा गर्दछ। गुणस्तरीय उत्पादनहरू, समयमै डेलिभरी, र उत्कृष्ट ग्राहक सेवा।",
    image: "/business-executive-portrait.png",
    rating: 5,
  },
  {
    id: "4",
    name: "Deepak Rai",
    nameNe: "दीपक राई",
    position: "Construction Engineer",
    positionNe: "निर्माण इन्जिनियर",
    company: "BuildTech Solutions",
    companyNe: "बिल्डटेक सोलुसन्स",
    content:
      "The structural integrity and durability of Bela's eco panels exceeded our expectations. Perfect for Nepal's climate conditions.",
    contentNe:
      "बेलाको इको प्यानलहरूको संरचनात्मक अखण्डता र स्थायित्वले हाम्रो अपेक्षा भन्दा बढी पूरा गर्यो। नेपालको मौसम अवस्थाको लागि उत्तम।",
    image: "/engineer-portrait.png",
    rating: 5,
  },
  {
    id: "5",
    name: "Anjali Tamang",
    nameNe: "अञ्जली तामाङ",
    position: "Interior Designer",
    positionNe: "आन्तरिक डिजाइनर",
    company: "Creative Spaces",
    companyNe: "क्रिएटिभ स्पेसेस",
    content:
      "The versatility of Bela's modular systems allows for incredible design flexibility. Our clients love the modern aesthetic and eco-friendly approach.",
    contentNe:
      "बेलाको मोड्युलर प्रणालीहरूको बहुमुखी प्रतिभाले अविश्वसनीय डिजाइन लचिलोपनको लागि अनुमति दिन्छ। हाम्रा ग्राहकहरूले आधुनिक सौन्दर्य र पर्यावरण-मैत्री दृष्टिकोण मन पराउँछन्।",
    image: "/designer-portrait.png",
    rating: 5,
  },
  {
    id: "6",
    name: "Bikram Thapa",
    nameNe: "बिक्रम थापा",
    position: "Property Developer",
    positionNe: "सम्पत्ति विकासकर्ता",
    company: "Urban Living Pvt. Ltd.",
    companyNe: "अर्बन लिभिङ प्रा. लि.",
    content:
      "Partnering with Bela Nepal has been a game-changer for our residential projects. The cost savings and quality are unmatched.",
    contentNe: "बेला नेपालसँग साझेदारी हाम्रो आवासीय परियोजनाहरूको लागि खेल-परिवर्तक भएको छ। लागत बचत र गुणस्तर अतुलनीय छ।",
    image: "/developer-portrait.png",
    rating: 5,
  },
]

export const locations: Location[] = [
  {
    id: "1",
    name: "Kathmandu Head Office",
    nameNe: "काठमाडौं मुख्य कार्यालय",
    address: "Chhauni-15, Kathmandu, Nepal",
    addressNe: "छाउनी–१५, काठमाडौं, नेपाल",
    phone: "+977-9802375303, 01-5922974",
    email: "info@belanepal.com.np",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3207480341325!2d85.28325027511907!3d27.707381376182557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19004faf381b%3A0x56b81d3096a508d6!2sBela%20Nepal%20Industries!5e0!3m2!1sen!2snp!4v1760336025840!5m2!1sen!2snp",
    googleMapsLink: "https://maps.app.goo.gl/Xf17A64acw1wQ3NMA",
  },

  {
    id: "2",
    name: "Hetauda Manufacturing Plant",
    nameNe: "हेटौडा उत्पादन प्लान्ट",
    address: "Hetuada Industrial District, Hetauda-8, Makwanpur, Nepal",
    addressNe: "हेटौडा औद्योगिक क्षेत्र, हेटौडा-८, मकवानपुर, नेपाल",
    phone: "+977-9801949100",
    email: "info@belanepal.com.np",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28332.0122239119!2d84.99830271340905!3d27.422476536174734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb49001cb84987%3A0xe333d4acf014c3e9!2sBela%20Nepal%20Industry%20PVT.LTD%2C%20Hetuada%2C%20Nepal!5e0!3m2!1sen!2snp!4v1760339485150!5m2!1sen!2snp",
    googleMapsLink: "https://maps.app.goo.gl/4BJPbwtFJecLfdTz6",
  },
]

