$(document).ready(function () {
  var itemsPerPage = 3; // Numero di elementi per pagina
  var $items = $(".item");
  var $pagination = $(".pagination ul");
  var totalItems = $items.length;
  var totalPages = Math.ceil(totalItems / itemsPerPage);
  var currentPage = 1;

  // Funzione per mostrare gli elementi della pagina corrente
  function showPage(page) {
    $items.hide();
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    $items.slice(startIndex, endIndex).show();
  }

  // Genera i link di navigazione della pagination
  for (var i = 1; i <= totalPages; i++) {
    var $li = $("<li><a href='#'>" + i + "</a></li>");
    $pagination.append($li);
  }

  // Imposta la pagina corrente come attiva
  $pagination.find("li:first").addClass("active-gallery");

  // Mostra la prima pagina all'avvio
  showPage(currentPage);

  // Gestisci il click su un link di pagina
  $pagination.on("click", "a", function (e) {
    e.preventDefault();
    var newPage = parseInt($(this).text());
    if (newPage !== currentPage) {
      currentPage = newPage;
      $pagination.find("li").removeClass("active-gallery");
      $(this).parent().addClass("active-gallery");
      showPage(currentPage);
    }
  });
});