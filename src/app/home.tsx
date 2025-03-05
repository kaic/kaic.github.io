import Articles from '@app/Articles/Articles';
import { Main } from '@app//Main/Main';
import { About } from '@app/About/About';
import { Contact } from '@app/Contact/contact';
import { Footer } from '@app/Footer/footer';

import { SectionSeparator } from '@app/components/SectionSeparator';

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <SectionSeparator />
      <Articles />
      <SectionSeparator />
      <Contact />
      <SectionSeparator />
      <Footer />
    </div>
  );
}
