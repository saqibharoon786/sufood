import { useEffect } from 'react';

type JsonLdEntry = {
  id: string;
  data: Record<string, unknown>;
};

export default function useJsonLd(entries: JsonLdEntry[]) {
  useEffect(() => {
    const createdIds: string[] = [];

    entries.forEach(({ id, data }) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
      createdIds.push(id);
    });

    return () => {
      createdIds.forEach(id => {
        const node = document.getElementById(id);
        if (node) node.remove();
      });
    };
  }, [entries]);
}
