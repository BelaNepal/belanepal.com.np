/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Bela Nepal Industries Pvt. Ltd.",
  titleTemplate: "%s | Bela Nepal",
  defaultTitle: "Bela Nepal Industries",
  description: "Leading manufacturer of eco-friendly panels and modular construction solutions in Nepal",
  canonical: "https://www.belanepal.com.np/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.belanepal.com.np/",
    site_name: "Bela Nepal Industries",
    title: "Bela Nepal Industries Pvt. Ltd.",
    description: "Leading manufacturer of eco-friendly panels and modular construction solutions in Nepal",
    images: [
      {
        url: "https://www.belanepal.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bela Nepal Industries",
      },
    ],
  },
  twitter: {
    handle: "@BelaNepal",
    site: "@BelaNepal",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
