// ─────────────────────────────────────────────
//  SEO — Head metadata component
// ─────────────────────────────────────────────
import { useEffect } from 'react';
import type { SiteSEO } from '@/config/site';

interface SEOProps extends Partial<SiteSEO> {
  suffix?: string;
}

export default function SEO({ title, description, ogImage, canonicalUrl, twitterHandle, keywords, suffix = '' }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = suffix ? `${title} | ${suffix}` : title;
    }

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, true);
      setMeta('twitter:description', description);
    }

    if (title) {
      setMeta('og:title', document.title, true);
      setMeta('twitter:title', document.title);
    }

    if (ogImage) {
      setMeta('og:image', ogImage, true);
      setMeta('twitter:image', ogImage);
    }

    if (canonicalUrl) {
      setMeta('og:url', canonicalUrl, true);
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;
    }

    if (twitterHandle) setMeta('twitter:site', twitterHandle);
    if (keywords?.length) setMeta('keywords', keywords.join(', '));

    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
  }, [title, description, ogImage, canonicalUrl, twitterHandle, keywords, suffix]);

  return null;
}
