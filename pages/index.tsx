import Home from '../src/app/home';

export default Home;

// Add getStaticProps to load translations
export async function getStaticProps({ locale }: { locale: string }) {
  try {
    // Load messages for the current locale
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
