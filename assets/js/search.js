(function() {
    function displaySearchResults(results, store) {
      var searchResults = document.getElementById('search-results');

      if (results.length) {
        var appendString = '';
  
        for (var i = 0; i < results.length; i++) {
          var item = store[results[i].ref];
          appendString += '<a href="' + item.url + '"><h3>' + item.title + '</h3></a><!-- Score: ' + results[i].score + ' -->';
          appendString += '<p>' + item.content.substring(0, 300) + '...</p>';
        }
  
        searchResults.innerHTML = appendString;
      } else {
        searchResults.innerHTML = '<h3>No results found</h3>';
      }
    }
  
    function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split('&');
  
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
  
        if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
      }
    }
  
    var searchTerm = getQueryVariable('query');
    
    if (searchTerm) {
      //alert("searchTerm: " + searchTerm);
      document.getElementById('search-box').setAttribute("value", searchTerm);
  
      $.getJSON( "https://docs.garagehive.co.uk/docs/search.json", function( data ) {
        
        var idx = lunr(function () {
            this.field('title', { boost: 10 });
            this.field('content');
        
            for (var key in data) {
                this.add({
                'id': key,
                'title': data[key].title,
                'content': data[key].content
                });
            }
        });
        var results = idx.search(searchTerm);
        //alert("results.length: " + results.length);
        displaySearchResults(results, data);
      });
    }
  })();