
// Funciona como um event handler inverso ao onClick, isto é, executa sempre que houver um clique fora do elemento.
$.fn.trt3OnClickOutside = function (handler) {
  var $document = $(document);

  return this.each(function() {
    var container = this;
    var $container = $(container);

    $document.click(function(document_click_event) {
      if ($container.has(document_click_event.target).length <= 0) {
        handler.bind(container)(document_click_event);
      }
    });
  });
}

$(document).ready(function() {
	
	// Fecha Menu Horizontal Mobile se o usuário clica fora do menu
    $(".navbar").each(function() {
      let $menu_container = $(this);
	  let $menu_dropdown = $menu_container.find("[id^='navbarNavDropdown']");
	  let $menu_toggler = $menu_container.find("button[class*='navbar-toggler']");
     
      $menu_container.trt3OnClickOutside(function() {
        if (!$menu_toggler.hasClass("collapsed")) {
          $menu_toggler.click();
          event.preventDefault();
        }
      });
    });
});