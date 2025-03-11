import Articles from '@app/Articles/Articles';
import { Main } from '@app//Main/Main';
import { About } from '@app/About/About';
import { Contact } from '@app/Contact/contact';
import { Footer } from '@src/app/Footer/Footer';

import { SectionSeparator } from '@app/Components/SectionSeparator';

export default function Home() {
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
