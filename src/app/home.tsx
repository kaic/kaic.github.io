import Articles from '@app/Articles/Articles';
import { Main } from '@app//Main/Main';
import { About } from '@app/About/About';
import { Contact } from '@app/Contact/contact';
import { Footer } from '@src/app/Footer/Footer';
import { useLocale } from 'next-intl';

import { SectionSeparator } from '@app/Components/SectionSeparator';
import { getStaticProps } from '@src/LanguagueSwitcher';	

export default function Home() {
  const locale = useLocale();
  getStaticProps({ locale });
  return (
    <div>
      <Main />
      <Articles />
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <Contact />
      <SectionSeparator />
      <Footer />
    </div>
  );
}
