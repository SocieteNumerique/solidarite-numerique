/*

	@ File : app.js
	@ Author : HC, service cartographie de l'ANCT
	@ Created : 24/12/2019

	@ Project : Carte interactive des structures France Services
	@ Main file : index.html

	@ Description : script de fonctionnement principal

*/


/* -------------------------------------------------------------------------- */
/*                                INIT MAP                                    */
/* -------------------------------------------------------------------------- */

// initialisation de la carte
let map = L.map('mapid', {
  zoomSnap: 0.25,
  zoomControl: false,
  renderer: L.canvas(),
}).setView([46.5, 2.55], 5.5555,{animation: true});

let carto_db = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: ' Fond cartographique &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19,
  minZoom:5.55
}).addTo(map);

// attribution
map.attributionControl
   .addAttribution("| <a href = 'https://cartotheque.cget.gouv.fr/' target = '_blank'>ANCT</a>");

// échelle
L.control.scale({ position: 'bottomright' }).addTo(map);

// position du conteneur
map.addControl(new L.Control.ZoomMin({position:'topright'}));

let zoomMin = document.querySelectorAll('.leaflet-control-zoom-min');

zoomMin[0].addEventListener('click', () => {
  resetView();
})


/* -------------------------------------------------------------------------- */
/*                                ZOOM DROM                                   */
/* -------------------------------------------------------------------------- */

let liste_drom = document.getElementById("goTo");


liste_drom.addEventListener('change', (e) => {
  option = e.target.selectedOptions[0];
  switch (option.value) {
    case "met":
      return map.flyTo([46.5, -3.55], 5.5555, { animation: true, duration: 1 });     
      // break;
    case "glp":
      return map.setView([16.25, -61.706], 10, { animation: true });
    case "mtq":
      return map.setView([14.68, -61.2], 10, { animation: true });
    case "guf":
      return map.setView([3.92, -54.5], 7.855, { animation: true });
    case "reu":
      return map.setView([-21.11, 55.28], 10, { animation: true });
    case "myt":
      return map.setView([-12.81, 45.06], 11, { animation: true });
    default:
      return map.setView([46.5, 0], 5.5555, { animation: true })
  }
});



/* -------------------------------------------------------------------------- */
/*                                SIDEBAR                                     */
/* -------------------------------------------------------------------------- */

let sidebar = L.control.sidebar({
    autopan: false,       // whether to maintain the centered map point when opening the sidebar
    closeButton: true,    // whether t add a close button to the panes
    container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    position: 'left',     // left or right
}).addTo(map);

window.addEventListener('DOMContentLoaded', () => {
  sidebar.open('home');
})

// be notified when a panel is opened
sidebar.on('content', function (ev) {
    switch (ev.id) {
        case 'autopan':
        sidebar.options.autopan = true;
        searchField.focus();
        break;
        default:
          searchField.value = ''
          ficheInfo.innerHTML = '';
          sidebar.options.autopan = true;
    }
});

var userid = 0

function addUser() {
  sidebar.addPanel({
    id: 'user' + userid++,
    tab: '<i data-feather="info" class="feather-icons"></i>',
    title: 'User Profile ' + userid,
    pane: '<p>user ipsum dolor sit amet</p>',
  });
};

let trouvezMoiBtn = document.getElementById('trouvez-moi');

let searchField = document.getElementById('searchField');

searchField.addEventListener('keydown', field => {
  if (field.value != '') {
    resetSearchBtn.style.display = 'block'
  } else {
    resetSearchBtn.style.display = 'none'    
  }
});

trouvezMoiBtn.addEventListener('click', () => {
  // ouvre le panneau latéral
  sidebar.open('autopan');
  // place le curseur sur la zone de texte 
  searchField.focus();
});

/* -------------------------------------------------------------------------- */
/*                          MARQUEURS PONCTUELS                               */
/* -------------------------------------------------------------------------- */

let sizeOff = [12,12]
let sizeOver = [30,30]

/* marker init */
/* Structure principale */
let markerOff = L.icon({
  iconUrl: './img/picto_off.png',
  iconSize: sizeOff
});

let markerOver = L.icon({
  iconUrl: './img/picto_over.png',
  iconSize: sizeOver
});

let markerClicked = L.icon({
  iconUrl: './img/picto_clicked.png',
  iconSize: [35,35]
});

/* structure itinérante */
let markerItineranteOff = L.icon({
  iconUrl: './img/picto_off_itinerante.png',
  iconSize: sizeOff
});

let markerItineranteOver = L.icon({
  iconUrl: './img/picto_over_itinerante.png',
  iconSize: sizeOver
});

/* antenne */
let markerAntenneOff = L.icon({
  iconUrl: './img/picto_off_antenne.png',
  iconSize: sizeOff
});

let markerAntenneOver = L.icon({
  iconUrl: './img/picto_over_antenne.png',
  iconSize: sizeOver
});

let markerAntenneClicked = L.icon({
  iconUrl: './img/picto_clicked_antenne.png',
  iconSize: [35, 35]
});

/* structure itinérante */
let markerAntenneItineranteOff = L.icon({
  iconUrl: './img/picto_off_antenne_itinerante.png',
  iconSize: sizeOff
});

let markerAntenneItineranteOver = L.icon({
  iconUrl: './img/picto_over_antenne_itinerante.png',
  iconSize: sizeOver
});

/* au click, ajouter un marqueur sur la carte */
function addClickedMarker(lat,long,lib_com,typeMarker) {
  removeClickedMarker();
  marker = L.marker([lat, long], { icon: typeMarker })
            .bindTooltip(lib_com,{
              direction:'center',
              permanent:true,
              className:'leaflet-tooltip-clicked'})
            .addTo(map);
  zoomTo([lat, long])
}

// au click suivant, enlever supprimer le marqueur de la carte  
function removeClickedMarker() {
  if (marker != undefined) {
    map.removeLayer(marker)
  };
};

// change l'apparence du picto en fonction du type de fs
function getCategory(format_fs, itinerance) {
  switch (format_fs + '-' + itinerance) {
    case 'Espace labellisé-Non':
      return 'FS';
    case 'Espace labellisé-Oui':
      return 'FS itinerante';
    case 'Antenne-Non':
      return 'Antenne';
    case 'Antenne-Oui':
      return 'Antenne itinerante';
  }
}


// Changer de marqueur en fonction de la catégorie et de l'évènement souris
function switchMarker(categorie,event) {
  switch (categorie+"-"+event) {
    /* Catégorie 1 : FS principale */
    case "FS-default":
      return markerOff;
      break;
    case "FS-mouseover":
      return markerOver;
      break;
    case "FS-clicked":
      return markerClicked;
      break;
    /* Catégorie 2 : antenne */      
    case "Antenne-default":
      return markerAntenneOff;
      break;
    case "Antenne-mouseover":
      return markerAntenneOver;
      break; 
    case "Antenne-clicked":
      return markerAntenneClicked;
      break;
  
    /* Catégorie 3 : Itinérante */      
    case "FS itinerante-default":
      return markerItineranteOff;
      break;
    case "FS itinerante-mouseover":
      return markerItineranteOver;
      break;
    case "FS itinerante-clicked":
      return markerClicked;
      break;

    /* Catégorie 4 : itinérante + antenne */
    case "Antenne itinerante-default":
      return markerAntenneItineranteOff;
      break;
    case "Antenne itinerante-mouseover":
      return markerAntenneItineranteOver;
      break;
    case "Antenne itinerante-clicked":
      return markerAntenneClicked;
      break;
  }
};


/* -------------------------------------------------------------------------- */
/*                          AFFICHAGE DES POINTS                              */
/* -------------------------------------------------------------------------- */

let france_services; 
let polyline;

// chargement google sheet 
let publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/1_i0-v9EOrFhEiHQSk6wdBFpsfaAU0oxjm-pEhviJdxM/edit?usp=sharing"

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: addData,
    simpleSheet: true
  })
};

tabDrive = [];

window.addEventListener('DOMContentLoaded', init);

function addData(res) {
    let tableau_fs = res;

    tableau_fs = tableau_fs.filter(feature => {
      return feature.latitude != '' && feature.longitude != ''
    });

    tableau_fs.forEach(fs => {

      // déclaration des variables du tableau;
      let lat = fs.latitude;
      let long = fs.longitude;

      let coords = [lat,long];

      //let categorie = fs.categorie;
      // determination du type de FS : siège, siège itinérant, antenne, antenne itinérante
      let categorie = getCategory(fs.format_fs, fs.itinerance);

      let matricule = fs.matricule;

      marker = new L.marker(coords,{
        icon: switchMarker(categorie,"default")} 
      ).bindTooltip(fs.lib_com, {
        direction: 'center',
        className: 'leaflet-tooltip'
      }).on('mouseover', e => {   
        if (e.target.className != 'clicked') {
          e.target.setIcon(switchMarker(categorie,"mouseover"))
        } else {
          e.target.setIcon(switchMarker(categorie, "clicked"), { className: 'clicked' })
        };
        drawNetwork(res, coords, matricule, "Antenne")
      }).on('mouseout', e => {
        removeNetwork();
        if (e.target.className != 'clicked') {
          e.target.setIcon(switchMarker(categorie, "default"))
        } else {
          e.target.setIcon(switchMarker(categorie, "clicked"), { className: 'clicked' })
        };
      }).on('click', e => { 
        onClick(tableau_fs, fs)
        map.zoomTo(coords)
        // drawNetwork(res, coords, matricule, "Antenne")
      }).addTo(map)
    });

    /* Création d'une liste vide pour accueillir les attributs des entités */
    let listFeatures = [];
    
    for (let i in tableau_fs)  {
      let france_services = tableau_fs[i];

      /* Remplacement des champs vides par l'attribut 'non communiqué' */
      for (let j in france_services) {
        
        if (france_services[j] == "") {
          france_services[j] = 'Non communiqué'
        }
      };
      /* Remplissage de la liste par les propriétés des entités */
      listFeatures.push(france_services)
    };

  /* -------------------------------------------------------------------------- */
  /*                          CHAMP de RECHERCHE                                */
  /* -------------------------------------------------------------------------- */
    
    let listNouns = tableau_fs.map((e) => {
      return e.lib_com + ' (' + e.code_postal + ')';
    });

    new Awesomplete(searchField,{ //
      minChars: 2,
      list: listNouns
    });
    
    searchField.addEventListener('awesomplete-selectcomplete', e => {  
      let value = searchField.value; 
      listNouns.forEach(com => {
        if (com.toLowerCase() === value.toLowerCase()) {            
          let libCom = value.toString();
          listFeatures.forEach(feature => {
            result = feature.lib_com + ' (' + feature.code_postal + ')';         
            if (libCom === result) {    
              for (let i in feature) {
                /* affichage de la fiche info */                             
                showFiche(res,feature);
              }
            }
          })
        }
      })
    });
}
//);


// au clic, faire apparaitre la fiche info et les structures annexes
function onClick(liste,feature) {
  showFiche(liste, feature);
  createListe(liste, feature);
}


// dessiner les liaisons entre les structures surla carte
function drawNetwork(points, coords, matricule, categorie_fs) {
  let liste_markers = [];
  let liste_points = points;

  liste_points.forEach(e => {
    let id_responsable = e.goupe_france_services_responsable, 
        categorie = e.format_fs,
        lat = e.latitude, 
        long = e.longitude;

    if (id_responsable == matricule && categorie == categorie_fs) {
      liste_markers.push([lat, long])
    }
  });

  for (let i in liste_markers) {
    polyline = new L.polyline([coords, liste_markers[i]], {
      color: '#FF1819',
      className: 'polyLine',
      weight: 1.5
    }).addTo(map);
  };
};

/* au mouseout, enlever supprimer la carte   */
function removeNetwork() {
  layers = map._layers;
  for (let i in layers) {
    if (layers[i].options.className == "polyLine") {
      map.removeLayer(layers[i])
    }
  }
};


/* -------------------------------------------------------------------------- */
/*                                FICHE INFO                                  */
/* -------------------------------------------------------------------------- */

// bouton réinitialiser la recherche
let resetSearchBtn = document.getElementById('resetSearch');

resetSearchBtn.addEventListener('click', event => {
  event.preventDefault();
  resetSearchBtn.style = { display: 'none' }
  searchField.value = ''
  ficheInfo.innerHTML = '';
  resetView();
  removeClickedMarker()
});

/* 1. Création du conteneur accueillant les infos */
let contentPanel = document.getElementById('autopan');
let ficheInfo = document.createElement('div')

ficheInfo.setAttribute('id','ficheInfo');


// Création de la fiche info
function showFiche(liste,point) {
  /* dictionnaire des variables
  liste: tableau des entités
  point: entité sélectionnée ou trouvée */

  /* variables utilisées : lattitude et longitude pour ajouter le marqueur, 
  lib_com, categorie et matricule pour jouer le controle de la liste */  
  let lat = point.latitude,
      lon = point.longitude,
      lib_com = point.lib_com,
      categorie = getCategory(point.format_fs, point.itinerance), /* catégorie de marqueur à appeler */
      matricule = point.matricule;

  let coords = [lat,lon];
  
  /* ajout des marqueurs */
  addClickedMarker(lat, lon, lib_com, switchMarker(categorie,"clicked"));
  
  
  /* initialisation de la fiche */
  ficheInfo.innerHTML = '';

  /* création du séparateur */
  let hr = document.createElement('hr');

  /* Nom de l'espace France services */
  let nomEspace = document.createElement('h2');
  
  // changer la couleur du nom en fonction du type de FS
  if (point.format_fs == "Espace labellisé") {
    nomEspace.style.color = '#19A007'    
  } else {
    nomEspace.style.color = '#273375'
  };

  nomEspace.innerText = point.lib_fs;

  let itinerante = document.createElement('i');
  itinerante.setAttribute('id','text_itinerance');

  /* Ligne adresse */
  let adresse = writeInfo('p', point.adresse + ' - ' + isNotEmpty(point.complement_adresse) + ' ' + point.code_postal + ' ' + point.lib_com, 'map-pin');

  /* Création de la table des horaires */
  let ficheHoraire = document.createElement('table');

  /* Header de la table 'Horaires' */
  let thead = writeInfo('thead','Horaires','clock');
  thead.style.fontWeight = 'bold';
  
  /* corps de la table */
  let tbody = document.createElement('tbody');
  
  for (let i in point) {
    
    if (i[0] == "h") {
      let tr = document.createElement('tr');
      
      let tdJour = document.createElement('td');
      let tdHoraire = document.createElement('td');
      
      let jour = i[2].toUpperCase() + i.substring(3, i.length);
      
      tdJour.innerText = jour;
      tdHoraire.innerText = point[i];
      
      tr.appendChild(tdJour);
      tr.appendChild(tdHoraire);
      tbody.appendChild(tr);
    }
  };

  // Ajout de l'entête et des lignes
  ficheHoraire.appendChild(thead);
  ficheHoraire.appendChild(tbody);

  // mel
  let mail = writeInfo('p', point.mail, 'mail');
  // telephone
  let tel = writeInfo('p', point.telephone, 'phone')
  
  let elementsFiche;

  if (point.itinerance == "Oui") {
    itinerante.innerText = '(Structure itinérante)';
    elementsFiche = [hr, nomEspace, itinerante, adresse, ficheHoraire, mail, tel];
  } else {
    elementsFiche = [hr, nomEspace, adresse, ficheHoraire, mail, tel];
  }


  let commentaire_horaires = point["commentaire_horaires"];

  if (commentaire_horaires != 'Non communiqué') {
    commentaire_horaires = writeInfo('p',commentaire_horaires,'info')        
    elementsFiche.push(commentaire_horaires);
  };
  
  if (point.groupe != 'Non communiqué') {
    // phrase d'intro
    let text = document.createElement('p');
    text.setAttribute('id','text_reseau_fs');
    text.innerText = 'Cette structure fait partie du réseau "' + point.groupe + '"';

    // creation de la liste des antennes
    createListe(liste, point);

    // ajout du texte
    elementsFiche.push(text);

    // ajout des éléments
    liste_boutons.forEach(button => {
      elementsFiche.push(button);
    })
  };
  
  /* Ajout au conteneur ficheInfo */
  elementsFiche.forEach(e => {
    ficheInfo.appendChild(e)
  });

  /* 3. Ajout des infos */
  if (sidebar.open('autopan') == true) {  
      contentPanel.appendChild(ficheInfo);
  } else {
    sidebar.open('autopan');
    contentPanel.appendChild(ficheInfo);
  };
};



// vérifier si le champ est rempli ou non 
function isNotEmpty(field) {
  if (field != "Non communiqué") {
    return field;
  } else {
    return ''
  }
};



// créer la liste des structures et antennes appartenant au même réseau
function createListe(liste,point) {
  /* dictionnaires des variables :
  liste: le tableau des éléments à requêter (ici, le résultat du fetch)
  point: l'élément sélectionné (ici, le point sur la carte ou l'adresse) */
  
  let tab = [];

  liste.forEach(e => {    // pour chaque entité parcourue ... 
    // besoin d'interroger la colonne "groupe"
    let groupe = isNotEmpty(e.groupe);
    // si le groupe de l'entité correspond au groupe de l'entité sélectionné ...
    if (groupe != 'Non communiqué' && groupe == point.groupe) {
      tab.push(e); // fait rentrer cette élément dans le tableau vide
    }
  });

  let matricule_point = point.matricule;  
  
  // filtre pour retirer la structure déjà sélectionnée;
  tab = tab.filter(e => {     
    return e.matricule != matricule_point;
  });
  
  // liste de boutons
  liste_boutons = [];

  tab.forEach(antenne => {  // pour chaque élément de même groupe du tableau "tab" ...
    // nom et catégorie des structures
    let lib_antenne = antenne.lib_com;
    let categorie = antenne.format_fs;

    // création des boutons de renvoi vers les structures appartenant le même groupe
    let button = document.createElement('button');
    if (categorie == "Espace labellisé") {
      button.setAttributes({
        class: "reseau_principale"
      })
    } else {
        button.setAttributes({
          class: "reseau_antenne"
        })
    };
    // le bouton porte le nom de la structure
    button.innerText = lib_antenne;

    liste_boutons.push(button);
  
    // au click, faire la même chose que sur la carte leaflet
    button.addEventListener('click', () => {
      onClick(liste, antenne);
    });

    button.addEventListener("mouseover",() => {
      layers = map._layers;     
      for (let i in layers) {
        if (layers[i]._latlng) {
          lat = layers[i]._latlng.lat;
          lon = layers[i]._latlng.lng;
          lib_com = layers[i]._content
          coords = [lat, lon]
        }
      }
    })

  })
};



/* Concaténer information (exemple : adresse) avec picto associé (pin) */
function writeInfo(tag_html,text,svgPic) {
  /* dictionnaire des variables :
   1. tag_html = élément html à créer (exemple : 'p' pour balise <p></p>) 
   2. text = texte (en format texte) à afficher dans le texte 
   3. svgPic = nom du fichier .svg à importer */
   
  // 1. Génération du texte
  p = document.createElement(tag_html);
  text = document.createTextNode(text);

  // 2. import du pictogramme
  picto = document.createElement('img');
  picto.setAttributes({
    'src': 'img/' + svgPic + '.svg',
    'class': 'picto-fiche'
  });

  // 3. Fusion texte et picto
  [picto, text].forEach(e => {
    p.appendChild(e);
  });

  return p;
};


// Fonction permettant de mettre plusieurs attributs en une fois
Element.prototype.setAttributes = function (attrs) {
  for (var idx in attrs) {
    if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
      for (var prop in attrs[idx]) { this.style[prop] = attrs[idx][prop]; }
    } else if (idx === 'html') {
      this.innerHTML = attrs[idx];
    } else {
      this.setAttribute(idx, attrs[idx]);
    }
  }
};

// réinitialiser la vue de la carte
function resetView() {
  map.setView([46.5, 0], 5.5555, { animation: true });
};

// faire l'animation de zoom sur la carte
function zoomTo(latlng) {
  let maxZoom = 13;
  map.panTo(latlng, maxZoom, { animate: true, duration: .2 });
};

// affichage des pictogrammes 
feather.replace();
