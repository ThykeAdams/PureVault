export async function getFaviconUrl(websiteUrl: string): Promise<string | null> {
    try {
      const response = await fetch(websiteUrl);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const iconLink = doc.querySelector("link[rel~='icon']");
  
      if (iconLink) {
        return iconLink.getAttribute('href');
      } else {
        // Fallback: Assume favicon at /favicon.ico
        const url = new URL(websiteUrl);
        return url.origin + '/favicon.ico';
      }
    } catch (error) {
      console.error('Error fetching favicon:', error);
      return null;
    }
  }
  