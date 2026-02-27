export type Language = "en" | "ne"

export interface Translations {
  nav: {
    home: string
    services: string
    WhyUs: string
    contact: string
    blog: string
  }
  hero: {
    title: string
    flipWords?: string[]
    subtitle: string
    cta: string
  }
  services: {
    title: string
    learnMore: string
    ecoPanels: {
      learnMore: string
      title: string
      description: string
      features: string[]
    }
    modularConstruction: {
      title: string
      learnMore: string
      description: string
      features: string[]
    }
  }
  milestones: {
    title: string
    items: {
      label: string
      suffix: string
    }[]
  }
  blog: {
    title: string
    readMore: string
    viewMore: string
    viewLess: string
    like: string
    comment: string
    share: string
    comments: string
    addComment: string
    next: string
    name: string
    email: string
    phone: string
    noComments: string
  }
  testimonials: {
    title: string
  }
  location: {
    title: string
  }
  footer: {
    description: string
    quickLinks: string
    contact: string
    followUs: string
    copyright: string
    officeHoursLabel: string
    officeHoursValue: string
    status: {
      open: string
      closed: string
      closingSoon: string
      saturdayClosed: string
    }
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      WhyUs: "Why Us",
      contact: "Contact",
      blog: "Blog",
    },
    hero: {
      title: "Sustainable Living",
      flipWords: ["Redefined", "Reimagined", "Revolutionized"],
      subtitle: "Leading manufacturer of eco-friendly, sustainable and modular construction solutions in Nepal",
      cta: "Explore Our Solutions",
    },
    services: {
      title: "Our Services",
      learnMore: "Learn More", // top-level
      ecoPanels: {
        title: "Bela Eco Panels",
        learnMore: "Learn More", // ✅ sub-service
        description: "Revolutionary eco-friendly building panels...",
        features: [
          "Environmentally sustainable materials",
          "Superior thermal insulation",
          "Fire-resistant properties",
          "Quick installation process",
          "Cost-effective solution",
        ],
      },
      modularConstruction: {
        title: "Bela Modular Homes",
        learnMore: "Learn More", // ✅ sub-service
        description: "Complete modular building solutions...",
        features: [
            "Earthquake-resistant structure",
            "Fast construction timeline",
            "Customizable designs",
            "High-quality materials",
            "Climate-adaptive building style",
        ],
      },
    },
    milestones: {
      title: "Our Achievements",
      items: [
        { label: "CSR Initiatives Projects", suffix: "+" },
        { label: "Square Feet Built", suffix: "M+" },
        { label: "Happy Clients Served", suffix: "+" },
        { label: "Experience You Can Count On", suffix: "+" },
        { label: "Partnerships Formed", suffix: "M+" }
      ],
    },
    blog: {
      title: "Latest Insights",
      readMore: "Read More",
      viewMore: "View More Articles",
      viewLess: "View Less",
      like: "Like",
      comment: "Comment",
      share: "Share",
      comments: "Comments",
      addComment: "Add Comment",
      next: "Next",
      name: "Name",
      email: "Email",
      phone: "Phone",
      noComments: "No comments yet.",
    },
    testimonials: {
      title: "What Our Clients Say",
    },
    location: {
      title: "Our Locations",
    },
    footer: {
      description: "Leading the way in sustainable construction and eco-friendly building solutions across Nepal.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      followUs: "Follow Us",
      copyright: "© 2025 Bela Nepal Industries PVT. LTD. All rights reserved.",
      officeHoursLabel: "Office Hours",
      officeHoursValue: "Sun - Fri: 10:00 AM - 5:00 PM",
      status: {
        open: "Open Now",
        closed: "Closed Now",
        closingSoon: "Closing Soon",
        saturdayClosed: "Saturday: Closed",
      },
    },
  },
  ne: {
    nav: {
      home: "गृहपृष्ठ",
      services: "सेवाहरू",
      WhyUs: "बेलानै किन?",
      contact: "सम्पर्क",
      blog: "ब्लग",
    },
    hero: {
      title: "दिगो जीवनशैलीको",
      flipWords: ["पुनःपरिभाषा", "पुनःकल्पना", "पुनःनिर्माण"],
      subtitle: "नेपालमा पर्यावरण-मैत्री प्यानल र मोड्युलर निर्माण समाधानको अग्रणी निर्माता",
      cta: "हाम्रा उत्पादनहरू र सेवाहरू",
    },
    services: {
      title: "हाम्रा सेवाहरू",
      learnMore: "थप जानकारी", // top-level
      ecoPanels: {
        title: "बेला इको प्यानल",
        learnMore: "थप जानकारी", // sub-service
        description: "दिगोपन र उत्कृष्ट प्रदर्शनलाई संयोजन गर्ने...",
        features: [
          "पर्यावरणीय दिगो सामग्री",
          "उत्कृष्ट थर्मल इन्सुलेशन",
          "आगो प्रतिरोधी गुणहरू",
          "छिटो स्थापना प्रक्रिया",
          "लागत-प्रभावी समाधान",
        ],
      },
      modularConstruction: {
        title: "बेला घर निर्माण",
        learnMore: "थप जानकारी", // sub-service
        description: "गति, दक्षता र गुणस्तरको लागि डिजाइन गरिएको...",
        features: [
          "भूकम्प प्रतिरोधी संरचना",
          "द्रुत निर्माण समयरेखा",
          "अनुकूलन योग्य डिजाइनहरू",
          "उच्च गुणस्तरको सामग्री",
          "स्थानीय वातावरणअनुकूल निर्माण शैली",
          "पुन: प्रयोग गर्न मिल्ने र पुन: स्थानान्तरण योग्य संरचना",
          "ग्राहक आवश्यकताअनुसार चरणबद्ध विस्तार सम्भव",
        ],
      },
    },
    milestones: {
      title: "हाम्रा उपलब्धिहरू",
      items: [
        { label: "पर्यावरण-मैत्री घरहरू निर्माण", suffix: "+" },
        { label: "वर्ग फिट निर्माण", suffix: "M+" },
        { label: "सन्तुष्ट ग्राहकहरू", suffix: "+" },
        { label: "वर्षौंको विश्वसनीय अनुभव", suffix: "+" },
        { label: "सफल साझेदारीहरू", suffix: "+" },
      ],
    },
    blog: {
      title: "नवीनतम अन्तर्दृष्टि",
      readMore: "थप पढ्नुहोस्",
      viewMore: "थप लेखहरू हेर्नुहोस्",
      viewLess: "कम हेर्नुहोस्",
      like: "मन पराउनुहोस्",
      comment: "टिप्पणी",
      share: "साझेदारी",
      comments: "Comments",
      addComment: "Add Comment",
      next: "Next",
      name: "Name",
      email: "Email",
      phone: "Phone",
      noComments: "No comments yet.",
    },
    testimonials: {
      title: "हाम्रा ग्राहकहरू के भन्छन्",
    },
    location: {
      title: "हाम्रा स्थानहरू",
    },
    footer: {
      description: "नेपालभरि दिगो निर्माण र पर्यावरण-मैत्री भवन समाधानमा अग्रणी।",
      quickLinks: "द्रुत लिङ्कहरू",
      contact: "हामीलाई सम्पर्क गर्नुहोस्",
      followUs: "हामीलाई फलो गर्नुहोस्",
      copyright: "© २०२५ बेला नेपाल इन्डस्ट्रीज प्रा. लि. सर्वाधिकार सुरक्षित।",
      officeHoursLabel: "कार्यालय समय",
      officeHoursValue: "आइतबार - शुक्रबार: बिहान १०:०० - बेलुका ५:००",
      status: {
        open: "अहिले खुला छ",
        closed: "अहिले बन्द छ",
        closingSoon: "चाँडै बन्द हुँदैछ",
        saturdayClosed: "शनिबार: बन्द",
      },
    },
  },
}
