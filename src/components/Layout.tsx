import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

interface Props {
  title: string
}

const Layout: React.FC<Props> = ({ children, title }) => (
  <div>
    <Helmet>
      <title>{`${title} | Ariel Villarreal`}</title>
      <meta name="description" content="Ariel Villarreal JavaScript Full-Stack Developer" />
      <meta name="theme-color" content="#E6E6FA" />
    </Helmet>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
