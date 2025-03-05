//TODO:
//- [ ] Add a Fix imports
import Articles from './Articles/articles';
import { Main } from './Main/Main';
import { About } from './About/about';
import { Contact } from './Contact/contact';
import { Footer } from './Footer/footer';

import { SectionSeparator } from './components/SectionSeparator';

export default function Home() {
  return (
    <div>
      <Main />
      <SectionSeparator />
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
