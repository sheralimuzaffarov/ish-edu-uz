import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

/**
 * Component for dynamically updating SEO meta tags
 * Can be used for future enhancements like per-vacancy pages
 */
export function SEOHead({ title, description, image, url }: SEOHeadProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const baseUrl = 'https://ish.uzedu.uz';

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }

      // Update Open Graph description
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }

      // Update Twitter description
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }
    }

    // Update Open Graph title
    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
      }
    }

    // Update Open Graph image
    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', image);
      }

      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute('content', image);
      }
    }

    // Update canonical URL
    if (url) {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', url);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', url);
      }

      const twitterUrl = document.querySelector('meta[name="twitter:url"]');
      if (twitterUrl) {
        twitterUrl.setAttribute('content', url);
      }
    }

    // Update HTML lang attribute based on current language
    document.documentElement.lang = currentLang;
  }, [title, description, image, url, currentLang]);

  return null; // This component doesn't render anything
}
