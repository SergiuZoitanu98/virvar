$(document).ready(function() {
    var itemsPerPage = 4; // Numero di elementi per pagina
    var $itemContainer = $('.container.clearfix'); // Seleziona il contenitore degli elementi
    var $paginationControls = $('#pagination-controls');
  
    var numItems = $itemContainer.find('.item').length;
    var numPages = Math.ceil(numItems / itemsPerPage);
  
    // Crea i pulsanti di paginazione
    for (var i = 1; i <= numPages; i++) {
      $paginationControls.append('<button class="pageBtn">' + i + '</button>');
    }
  
    // Mostra la prima pagina all'inizio
    showPage(1);
  
    // Gestisci il click sui pulsanti di paginazione
    $paginationControls.on('click', '.pageBtn', function() {
      var pageNum = $(this).text();
      showPage(pageNum);
    });
  
    // Funzione per mostrare una pagina specifica
    function showPage(pageNum) {
      var startIndex = (pageNum - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage - 1;
      $itemContainer.find('.item').hide().slice(startIndex, endIndex + 1).show();
    }
  });