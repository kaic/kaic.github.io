import Home from '../src/app/home';

export const metadata = {
  title: 'Kaic Bento | Software Developer',
  description: 'Portfólio de Kaic Bento, desenvolvedor de software',
  authors: { name: 'Kaic Bento' },
  keywords: 'software, developer',
  themeColor: '#f87171',
};

export default Home;

export async function getStaticProps() {
  try {
    const messages = await import(`../locales/en.json`);

    return {
      props: {
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