export async function getStaticProps(context?: { locale?: string }) {
    try {
      const locale = context?.locale || 'en';

      const messages = await import(`../locales/${locale || 'en'}.json`);
  
      return {
        props: {
          // Pass the messages to the page component via props
          messages: messages.default,
        },
      };
    } catch (error) {
      console.error('Error loading translations:', error);
      return {
        props: {
          messages: {},
        },
      };
    }
  }
  