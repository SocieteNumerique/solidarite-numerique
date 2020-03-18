import React from 'react';

import { Page } from '../layouts';

const JoinUs = () => {
  if (typeof window !== 'undefined') {
    let js;
    let q;
    let doc = document;

    const id = 'typef_orm';
    const b = 'https://embed.typeform.com/';

    if (!doc.getElementById(id)) {
      js = doc.createElement('script');
      js.id = id;
      js.src = b + 'embed.js';
      q = doc.getElementsByTagName('script')[0];
      q.parentNode.insertBefore(js, q);
    }
  }

  return (
    <Page useFooter={false}>
      <div
        class="typeform-widget"
        data-url="https://startupdetat.typeform.com/to/YyiJzW"
        data-transparency="100"
        data-hide-headers="true"
        data-hide-footer="true"
        style={{ width: '100%', height: '500px' }}
      ></div>
      <div
        style={{
          fontSize: '12px',
          color: '#999',
          opacity: 0.5,
          paddingTop: '5px',
          textAlign: 'right',
        }}
      >
        {' '}
        powered by{' '}
        <a
          href="https://admin.typeform.com/signup?utm_campaign=YyiJzW&utm_source=typeform.com-01D8JTJAAA57FA6F2GTW5THHM4-professional&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN"
          style={{ color: '#999' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Typeform
        </a>{' '}
      </div>
      <div className="no-typeform layout-center">
        Cliquez sur "Je veux aider" pour commencer le questionnaire. Si le
        questionnaire ne s'affiche pas,
        <a
          href="https://startupdetat.typeform.com/to/YyiJzW"
          target="_blank"
          rel="noopener noreferrer"
        >
          ➞ c'est par ici
        </a>
      </div>
      <style jsx>{`
        .no-typeform {
          margin: 20px;
          font-size: 0.9rem;
          color: #666;
        }
        .no-typeform a {
          margin-left: 5px;
        }
      `}</style>
    </Page>
  );
};

export default JoinUs;
