import React from 'react';

import { ButtonLink } from '../../uiComponents';

import constants from '../../constants';

const BandeauMediateur = () => (
  <>
    <div className="bandeau-mediateur">
      <div className="container content-container">
        <div>
          <h3>J’accède aux services publics près de chez moi</h3>
          <div id="mapid" class="leaflet-container leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag" tabindex="0" style="position: relative;"><div id="sidebar" class="leaflet-sidebar leaflet-control leaflet-sidebar-left">
       <!-- nav tabs -->
       <div class="leaflet-sidebar-tabs">
           <!-- top aligned tabs -->
           <ul role="tablist">
               <li class="active"><a href="#home" role="tab">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home feather-icons"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </a>
               </li>
               <li><a href="#autopan" role="tab">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search feather-icons"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </a>
               </li>
              </ul>
              <!-- bottom aligned tabs -->
              <ul role="tablist">
                <li><a href="#a-propos" role="tab">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info feather-icons"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </a>
                </li>
               <li><a href="https://github.com/cget-carto/France-services" target="_blank">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github feather-icons"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
               </a></li>
           </ul>
       </div>

       <!-- panel content -->
       <div class="leaflet-sidebar-content">
           <div class="leaflet-sidebar-pane active" id="home">
               <h1 class="leaflet-sidebar-header">
                 Accueil
                 <span class="leaflet-sidebar-close">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-skip-back feather-icons"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                 </span>
               </h1>
               <h3><i>Carte interactive</i> <br>
                 <img src="img/logo_FranceServices-01.png" id="logo_fs">
              </h3>
              <div id="legende">
              </div>
               <p>
                 Piloté par le ministère de la Cohésion des territoires et des Relations avec les collectivités territoriales via l'ANCT,
                 ce réseau vise à faciliter l’accès des citoyens à un panier de services publics de qualité. Les usagers pourront effectuer
                 diverses démarches administratives dans un lieu unique et se renseigner auprès d’agents polyvalents, formés de manière pointue et efficace.
               </p>
               <button type="button" name="button" id="trouvez-moi">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search" id="trouvez-moi-feather"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                Trouver une France Services
               </button>
           </div>
           <div class="leaflet-sidebar-pane" id="autopan">
               <h2 class="leaflet-sidebar-header">
                   Recherche
                   <span class="leaflet-sidebar-close">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-skip-back feather-icons"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                   </span>
               </h2>
               <p>Rechercher une France Services</p>
               <div id="search-bar-container">
                 <input type="text" placeholder="Nom de commune ou code postal" id="searchField">
                 <button id="resetSearch">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x feather-icons"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                 </button>
               </div>
            </div>
            <div class="leaflet-sidebar-pane" id="a-propos">
                <h2 class="leaflet-sidebar-header">
                  À propos
                  <span class="leaflet-sidebar-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-skip-back feather-icons"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                  </span>
                </h2>
                <p>
                  <b>Sources :</b> ANCT 2020, Banque des territoires 2020</p>
                <p>
                  <b>Réalisation :</b>
                  <a href="https://cartotheque.cget.gouv.fr/cartes" target="_blank">
                    Service cartographie de l'ANCT</a>, 01/2020
                </p>
                <img src="img/logo_anct.png" width="80%">
                <p><i>En partenariat avec</i></p>
                <img src="img/logo_bdt.png" width="80%">
             </div>
           </div>
       </div><div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(195px, 0px, 0px);"><div class="leaflet-pane leaflet-tile-pane"><div class="leaflet-layer " style="z-index: 1; opacity: 1;"><div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 18; transform: translate3d(-285px, -427px, 0px) scale(1.41421);"></div><div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 19; transform: translate3d(-108px, -182px, 0px) scale(0.707107);"><img alt="" role="presentation" src="https://d.basemaps.cartocdn.com/light_all/7/62/45@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(570px, 284px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://a.basemaps.cartocdn.com/light_all/7/62/46@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(570px, 540px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.basemaps.cartocdn.com/light_all/7/61/45@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(314px, 284px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://a.basemaps.cartocdn.com/light_all/7/63/45@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(826px, 284px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://d.basemaps.cartocdn.com/light_all/7/61/46@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(314px, 540px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.basemaps.cartocdn.com/light_all/7/63/46@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(826px, 540px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.basemaps.cartocdn.com/light_all/7/62/44@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(570px, 28px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.basemaps.cartocdn.com/light_all/7/62/47@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(570px, 796px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.basemaps.cartocdn.com/light_all/7/61/44@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(314px, 28px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://d.basemaps.cartocdn.com/light_all/7/63/44@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(826px, 28px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://a.basemaps.cartocdn.com/light_all/7/61/47@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(314px, 796px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.basemaps.cartocdn.com/light_all/7/63/47@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(826px, 796px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.basemaps.cartocdn.com/light_all/7/60/45@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(58px, 284px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.basemaps.cartocdn.com/light_all/7/64/45@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1082px, 284px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.basemaps.cartocdn.com/light_all/7/60/46@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(58px, 540px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.basemaps.cartocdn.com/light_all/7/64/46@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1082px, 540px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://a.basemaps.cartocdn.com/light_all/7/60/44@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(58px, 28px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://a.basemaps.cartocdn.com/light_all/7/64/44@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1082px, 28px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://d.basemaps.cartocdn.com/light_all/7/60/47@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(58px, 796px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://d.basemaps.cartocdn.com/light_all/7/64/47@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1082px, 796px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://a.basemaps.cartocdn.com/light_all/7/59/45@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-198px, 284px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.basemaps.cartocdn.com/light_all/7/65/45@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1338px, 284px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.basemaps.cartocdn.com/light_all/7/59/46@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-198px, 540px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://d.basemaps.cartocdn.com/light_all/7/65/46@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1338px, 540px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://d.basemaps.cartocdn.com/light_all/7/59/44@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-198px, 28px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.basemaps.cartocdn.com/light_all/7/65/44@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1338px, 28px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.basemaps.cartocdn.com/light_all/7/59/47@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-198px, 796px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://a.basemaps.cartocdn.com/light_all/7/65/47@2x.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(1338px, 796px, 0px); opacity: 1;"></div></div></div><div class="leaflet-pane leaflet-shadow-pane"></div><div class="leaflet-pane leaflet-overlay-pane"></div><div class="leaflet-pane leaflet-marker-pane"></div><div class="leaflet-pane leaflet-tooltip-pane"></div><div class="leaflet-pane leaflet-popup-pane"></div><div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(11286px, 8375px, 0px) scale(45.2548);"></div></div><div class="leaflet-control-container"><div class="leaflet-top leaflet-left"></div><div class="leaflet-top leaflet-right"><div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in">+</a><a class="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out">-</a><a class="leaflet-control-zoom-min" href="#" title="Zoom min" role="button" aria-label="Zoom min">Zoom min</a></div></div><div class="leaflet-bottom leaflet-left"></div><div class="leaflet-bottom leaflet-right"><div class="info-legende leaflet-control"><strong>Type de structure</strong><br><img src="img/legende/France Services.png" class="picto_legende"> France Services<br><img src="img/legende/France Services itinérante.png" class="picto_legende"> France Services itinérante<br><img src="img/legende/Antenne.png" class="picto_legende"> Antenne<br><img src="img/legende/Antenne itinérante.png" class="picto_legende"> Antenne itinérante</div><div class="leaflet-control-scale leaflet-control"><div class="leaflet-control-scale-line" style="width: 81px;">100 km</div><div class="leaflet-control-scale-line" style="width: 65px;">50 mi</div></div><div class="leaflet-control-attribution leaflet-control"><a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> |  Fond cartographique © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/attributions">CARTO</a>, | <a href="https://cartotheque.cget.gouv.fr/" target="_blank">ANCT</a></div></div></div></div>
        </div>
        <div>
          <ButtonLink href="/nouvelle-ressource" alt large>
            Proposer une ressource&nbsp;➞
          </ButtonLink>
        </div>
      </div>
    </div>
    <style jsx>{`
      .bandeau-mediateur {
        color: #fff;
        background-color: ${constants.colors.blue};
        padding: 30px 0;
      }
      h3 {
        color: #fff;
        margin-top: 0;
      }
      p {
        margin: 0;
        padding: 0;
      }

      .container {
        display: flex;
        align-items: center;
      }

      .container > div:first-of-type {
        flex-grow: 1;
        margin-right: 10px;
      }
      .container > div:last-of-type {
        flex-shrink: 0;
      }

      @media only screen and (min-width: 1px) and (max-width: 600px) {
        .container {
          flex-direction: column;
        }
        .container > div:first-of-type {
          margin-right: 0;
        }

        .container > div:last-of-type {
          margin-top: 20px
        }
      }
    `}</style>
  </>
);
export default BandeauMediateur;
