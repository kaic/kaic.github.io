//TODO:
//- [ ] Add a Fix imports
import Articles from './Articles/Articles';
import { Main } from './Main/Main';
import { About } from './About/About';
import { Contact } from './Contact/contact';
import { Footer } from './Footer/footer';

import { SectionSeparator } from './components/SectionSeparator';

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
