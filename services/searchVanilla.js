export default allRessources => `
  // Vanilla Debounce implementation
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  function setResultClass(className) {
    var c = className;
    if (!className) {
      c= '';
    }
    document.getElementById('results-wrapper').className = c;
  }

  function cleanResults() {
    var resultContainer = document.getElementById('results');
    var child = resultContainer.lastElementChild;  
    while (child) { 
      resultContainer.removeChild(child); 
      child = resultContainer.lastElementChild; 
    }
  }

  function removeAccents(s){
    var r=s.toLowerCase();
    r = r.replace(new RegExp(/\s/g),"");
    r = r.replace(new RegExp(/[àáâãäå]/g),"a");
    r = r.replace(new RegExp(/æ/g),"ae");
    r = r.replace(new RegExp(/ç/g),"c");
    r = r.replace(new RegExp(/[èéêë]/g),"e");
    r = r.replace(new RegExp(/[ìíîï]/g),"i");
    r = r.replace(new RegExp(/ñ/g),"n");                
    r = r.replace(new RegExp(/[òóôõö]/g),"o");
    r = r.replace(new RegExp(/œ/g),"oe");
    r = r.replace(new RegExp(/[ùúûü]/g),"u");
    r = r.replace(new RegExp(/[ýÿ]/g),"y");
    r = r.replace(new RegExp(/\W/g),"");
    return r;
  };

  function isPresent(str, term) {
    return removeAccents(str).indexOf(term) !== -1
  }


  function searchInRessources() {
    cleanResults();
    
    var allRessources = ${JSON.stringify(allRessources)};
    var searchInput = document.getElementById('search-input');
    
    if (!searchInput || !searchInput.value) {
      setResultClass('empty-search');
      return;
    }
    setResultClass('loading');
    var searchTerm = removeAccents(searchInput.value).toLowerCase();

    var results = [];
    for (var i = 0; i < allRessources.length; i++) {
      var item =allRessources[i];
      var score = 0;
      if (isPresent(item.title,searchTerm)) {
        score += 0.2;
      }
      if (
        isPresent(item.desc,searchTerm)
      ) {
        score += 0.1;
      }
      if (
        isPresent(item.url,searchTerm)
      ) {
        score += 0.1;
      }
      if (score > 0) {
        results.push({ item:item, score:score})
      }
    }


    if (results.length === 0) {
      window.setTimeout(function() {setResultClass('no-results');}, 600);
      return;
    }
  
    // sort

    var resultContainer = document.getElementById('results');

    for (var i=0; i<results.length; i++) {
      var res = results[i].item;
      var title =  document.createElement('h3');
      title.innerHTML = res.title;
      var body = document.createElement('p');
      body.innerHTML = res.desc;

      var link = document.createElement('a');
      link.appendChild(title); 
      link.appendChild(body); 
      link.rel="noopener noreferrer";
      link.title=res.title;
      link.href=res.url;
      link.target="_blank";
      link.className="search-result dont-apply-link-style";

      resultContainer.appendChild(link);
    }

    window.setTimeout(setResultClass, 900);
  }

  window.searchInRessources = searchInRessources;
  debouncedSearch = debounce(searchInRessources, 300);

  (function() {
    var resultInput = document.getElementById('search-input');
    resultInput.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
      searchInRessources();
    }

    debouncedSearch();
  })})();
`;
