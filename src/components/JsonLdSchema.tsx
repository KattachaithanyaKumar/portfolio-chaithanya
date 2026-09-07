import React, { useEffect } from 'react';
import { getPersonJsonLd } from '../utils/seo';

/**
 * Component that safely injects JSON-LD Structured Data Schema into the page
 */
export const JsonLdSchema: React.FC = () => {
  const schemaData = getPersonJsonLd();

  useEffect(() => {
    const existingScript = document.getElementById('person-jsonld-schema');
    const scriptContent = JSON.stringify(schemaData, null, 2);

    if (existingScript) {
      existingScript.textContent = scriptContent;
    } else {
      const script = document.createElement('script');
      script.id = 'person-jsonld-schema';
      script.type = 'application/ld+json';
      script.textContent = scriptContent;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <script
      id="person-jsonld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
};
