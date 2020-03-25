import React from 'react';

import { Footer, Header, Meta, BandeauGouv, BandeauPhone } from '../components';

const Page = ({
  title,
  description,
  headerKey,
  children,
  useFooter = true,
}) => (
  <>
    <div id="page-layout">
      <Meta title={title} description={description} />
      <BandeauGouv />
      <Header headerKey={headerKey || 'home'} />
      <BandeauPhone />
      <main>{children}</main>
      {useFooter && <Footer />}
    </div>
    <style jsx>{`
      #page-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        background-color: #fff;
      }

      main {
        flex-grow: 1;
        background-color: #ecedf3;
      }
    `}</style>
  </>
);

export default Page;
