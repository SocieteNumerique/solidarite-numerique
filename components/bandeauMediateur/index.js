import React from 'react';

import { ButtonLink } from '../../uiComponents';

import constants from '../../constants';

const BandeauMediateur = () => (
  <>
    <div className="bandeau-mediateur">
      <div className="container content-container">
        <div>
              <img className="fs-align"
                src="/images/logo/FS.png"
                alt="France Services"
              />
              <h3>J’accède aux services publics près de chez moi</h3>
  
  
  
    <div>
    <link rel="stylesheet" href="/public/france-services/lib/leaflet.css">
    <link rel="stylesheet" href="/public/france-services/lib/leaflet-sidebar.min.css">
    <link rel="stylesheet" href="/public/france-services/lib/awesomplete.css">
    <link rel="stylesheet" href="/public/france-services/lib/L.Control.ZoomMin.css">
    <link rel="stylesheet" href="/public/france-services/css/font.css">
    <link rel="stylesheet" href="/public/france-services/css/style.css">
    <script src="/public/france-services/lib/tabletop.min.js"></script>
    <script src="/public/france-services/lib/leaflet.js"></script>
    <script src="/public/france-services/lib/leaflet-sidebar.min.js"></script>
    <script src="/public/france-services/lib/L.Control.ZoomMin.js"></script>
    <script src="/public/france-services/lib/awesomplete.min.js"></script>
    <script src="/public/france-services/lib/feather.min.js"></script>
  <select type="menu" id = "goTo">
    <option value="">-- Zoomer sur un territoire</option>
    <option value="met">Métropole</option>
    <option value="reu">La Réunion</option>
    <option value="glp">Guadeloupe</option>
    <option value="mtq">Martinique</option>
    <option value="guf">Guyane</option>
    <option value="myt">Mayotte</option>
  </select> 
   <div id="sidebar" class="leaflet-sidebar collapsed">
       <!-- nav tabs -->
       <div class="leaflet-sidebar-tabs">
           <!-- top aligned tabs -->
           <ul role="tablist">
               <li><a href="#home" role="tab">
                  <i data-feather="home" class = "feather-icons"></i>
                </a>
               </li>
               <li><a href="#autopan" role="tab">
                 <i data-feather="search" class = "feather-icons"></i>
                </a>
               </li>
              </ul>
              <!-- bottom aligned tabs -->
              <ul role="tablist">
                <li><a href="#a-propos" role="tab">
                  <i data-feather="info" class = "feather-icons"></i>
                </a>
                </li>
               <li><a href="https://github.com/cget-carto/France-services" target="_blank">
                 <i data-feather="github" class = "feather-icons"></i>
               </a></li>
           </ul>
       </div>

       <!-- panel content -->
       <div class="leaflet-sidebar-content">
           <div class="leaflet-sidebar-pane" id="home">
               <h1 class="leaflet-sidebar-header">
                 Accueil
                 <span class="leaflet-sidebar-close">
                   <i data-feather="skip-back" class="feather-icons"></i>
                 </span>
               </h1>
               <h3><i>Carte interactive</i> <br>
                 <img src="/public/france-services/img/logo_FranceServices-01.png" id = "logo_fs">
              </h3>
              <div id = "legende">
              </div>
               <p>
                 Piloté par le ministère de la Cohésion des territoires et des Relations avec les collectivités territoriales via l'ANCT,
                 ce réseau vise à faciliter l’accès des citoyens à un panier de services publics de qualité. Les usagers pourront effectuer
                 diverses démarches administratives dans un lieu unique et se renseigner auprès d’agents polyvalents, formés de manière pointue et efficace.
               </p>
               <button type="button" name="button" id = "trouvez-moi">
                <i data-feather="search" id = 'trouvez-moi-feather'></i>
                Trouver une France Services
               </button>
           </div>
           <div class="leaflet-sidebar-pane" id="autopan">
               <h2 class="leaflet-sidebar-header">
                   Recherche
                   <span class="leaflet-sidebar-close">
                     <i data-feather="skip-back" class="feather-icons"></i>
                   </span>
               </h2>
               <p>Rechercher une France Services</p>
               <div id = 'search-bar-container'>
                 <input type="text" placeholder="Nom de commune ou code postal" id = "searchField">
                 <button id = "resetSearch">
                  <i data-feather="x" class="feather-icons"></i>
                 </button>
               </div>
            </div>
            <div class="leaflet-sidebar-pane" id="a-propos">
                <h2 class="leaflet-sidebar-header">
                  À propos
                  <span class="leaflet-sidebar-close">
                    <i data-feather="skip-back" class="feather-icons"></i>
                  </span>
                </h2>
                <p>
                  <b>Sources :</b> ANCT 2020, Banque des territoires 2020</p>
                <p>
                  <b>Réalisation :</b>
                  <a href = 'https://cartotheque.cget.gouv.fr/cartes' target="_blank">
                    Service cartographie de l'ANCT</a>, 01/2020
                </p>
                <img src="/public/france-services/img/logo_anct.png" width="80%">
                <p><i>En partenariat avec</i></p>
                <img src="/public/france-services/img/logo_bdt.png" width="80%">
             </div>
           </div>
       </div>
    </div>
    <div id="mapid"></div>
    <!-- chargement script js -->
    <!-- <script src= "js/app_spreadsheet.js"></script> -->
    <script src="/public/france-services/js/app.js"></script>
    <script src= "/public/france-services/js/legend.js"></script>
    <script type="/public/france-services/javascript">feather.replace()</script>
    </div>
  
  
  
        </div>
      </div> 
      <div className="container content-container">
        <div>
          <a
              href="https://www.conseiller-numerique.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="fs1-align"
                src="/images/logo/CN.png"
                alt="Conseiller Numérique "
              />
              <p>Vous aimez le contact humain, cherchez un métier qui a du sens dans un secteur d’avenir ? Rejoignez le mouvement national des conseillers numériques !</p>
            </a>  
        </div>
      </div>
    </div>


    <style jsx>{`
      .bandeau-mediateur {
        color: #fff;
        background-color: ${constants.colors.blue};
        padding: 30px 0;
        max-height: 350px;
      }
      h3 {
        color: #fff;
        margin-top: 0;
        padding: 20px 0px 0px 0px;
      }
      p {
        color: #fff;
        margin: 0;
        padding: 0;
      }

      .container {
        display: flex;
        align-items: center;
      }
  
      .fs-align{
        vertical-align: middle;
        padding: 10px 20px 0px 20px;
        height: 100px;
        float: right;
      }
  
      .fs1-align{
        vertical-align: middle;
        padding: 10px 10px 0px 20px;
        height: 100px;
        float: right;
      }
  
      .container > div:first-of-type {
        flex-grow: 1;
        margin-right: 10px;
        width: inherit;
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
          margin-top: 20px;
        }
      }
    `}</style>
  </>
);
export default BandeauMediateur;
