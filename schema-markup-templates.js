// Organization Schema - Add to ALL pages in <head>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "King Systems LLC",
  "alternateName": "King Systems",
  "url": "https://kingsystems-website.pages.dev",
  "logo": "https://kingsystems-website.pages.dev/images/logo/king-systems-logo.jpg",
  "description": "Colorado's premier luxury technology integration specialists since 2002. Crestron, Lutron, and Savant systems for residential and commercial clients.",
  "foundingDate": "2002",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-303-410-0924",
    "contactType": "sales",
    "areaServed": ["CO", "Denver", "Aspen", "Vail", "Crested Butte", "Steamboat Springs"],
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.linkedin.com/company/king-systems",
    "https://www.facebook.com/kingsystemsllc"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}
</script>

// LocalBusiness Schema - Add to homepage + contact page
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "King Systems LLC",
  "image": "https://kingsystems-website.pages.dev/images/logo/king-systems-logo.jpg",
  "@id": "https://kingsystems-website.pages.dev",
  "url": "https://kingsystems-website.pages.dev",
  "telephone": "+1-303-410-0924",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "postalCode": "",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7392,
    "longitude": -104.9903
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "16:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/king-systems",
    "https://www.facebook.com/kingsystemsllc"
  ]
}
</script>

// Service Schema - Add to EACH service page (conference-rooms.html, training-rooms.html, etc.)
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Commercial Conference Room AV Integration",
  "provider": {
    "@type": "Organization",
    "name": "King Systems LLC",
    "url": "https://kingsystems-website.pages.dev"
  },
  "areaServed": {
    "@type": "State",
    "name": "Colorado"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Conference Room Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Crestron Conference Room Systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zoom Rooms Integration"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wireless Presentation Systems"
        }
      }
    ]
  }
}
</script>

// FAQ Schema - Add to service-plans.html, assessment pages
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does commercial AV integration cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial conference room systems typically range from $15,000-$35,000 per room depending on size and features, including installation, programming, and training."
      }
    },
    {
      "@type": "Question",
      "name": "Do you serve areas outside Denver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, King Systems serves Denver Metro, Crested Butte, Aspen, Vail, Steamboat Springs, and nationwide for exclusive clientele."
      }
    },
    {
      "@type": "Question",
      "name": "What brands do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in Crestron, Lutron, Control4, Savant, and other premium commercial and residential AV brands."
      }
    }
  ]
}
</script>

// Product Schema - Add to specific technology pages
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Commercial Conference Room AV System",
  "description": "Complete Crestron-controlled conference room with wireless presentation, video conferencing, and integrated audio.",
  "brand": {
    "@type": "Brand",
    "name": "Crestron"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "15000",
    "highPrice": "35000",
    "offerCount": "4"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "48"
  }
}
</script>

// Case Study / Project Schema - Add to case study pages
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "U.S. Air Force Academy Falcon Stadium AV Integration",
  "description": "Complete audio-visual integration for a 46,000-seat military stadium including video displays, audio systems, and broadcast infrastructure.",
  "creator": {
    "@type": "Organization",
    "name": "King Systems LLC"
  },
  "datePublished": "2024-12-28",
  "about": {
    "@type": "Service",
    "serviceType": "Commercial AV Integration"
  }
}
</script>
