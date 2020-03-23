import React from 'react';

import { Footer, Header, Meta, BandeauGouv } from '../components';

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
      <Header headerKey={headerKey || 'home'} />
      <BandeauGouv />
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
        background-color: #f9f9f9;
      }
    `}</style>
  </>
);

export default Page;
