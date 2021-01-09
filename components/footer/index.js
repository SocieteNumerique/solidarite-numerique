import React from 'react';

import constants from '../../constants';

const Footer = () => {
  return (
    <>
      <footer class="rf-footer" role="contentinfo" id="footer">
          <div class="rf-container">
              <div class="rf-footer__body">
                  <div class="rf-footer__brand">
                      <a class="rf-logo" href="#" title="république française">
                          <span class="rf-logo__title">république
                              <br>française</span>
                      </a>
                  </div>
                  <div class="rf-footer__content">
                      <p class="rf-footer__content-desc"></p>
                      <ul class="rf-footer__content-list">
                          <li>
                              <a class="rf-footer__content-link" href="http://legifrance.gouv.fr">legifrance.gouv.fr</a>
                          </li>
                          <li >
                              <a class="rf-footer__content-link" href="http://gouvernement.fr">gouvernement.fr</a>
                          </li>
                          <li >
                              <a class="rf-footer__content-link" href="http://service-public.fr">service-public.fr</a>
                          </li>
                          <li >
                              <a class="rf-footer__content-link" href="http://data.gouv.fr">data.gouv.fr</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="rf-footer__bottom">
                  <ul class="rf-footer__bottom-list">
                      <li class="rf-footer__bottom-item">
                          <a class="rf-footer__bottom-link" href="#">Plan du site</a>
                      </li>
                      <li class="rf-footer__bottom-item">
                          <a class="rf-footer__bottom-link" href="#">Accessibilité: non/partiellement/totalement conforme</a>
                      </li>
                      <li class="rf-footer__bottom-item">
                          <a class="rf-footer__bottom-link" href="#">Mentions légales</a>
                      </li>
                      <li class="rf-footer__bottom-item">
                          <a class="rf-footer__bottom-link" href="#">Données personnelles</a>
                      </li>
                      <li class="rf-footer__bottom-item">
                          <a class="rf-footer__bottom-link" href="#">Gestion des cookies</a>
                      </li>
                  </ul>
                  <div class="rf-footer__bottom-copy">
                      © République Française 2020
                  </div>
              </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
