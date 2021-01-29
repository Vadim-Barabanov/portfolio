$(document).ready(function() {
  $("a.scroll").click(function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px"
      },
      {
        duration: 550,
        easing: "swing"
      }
    );
    return false;
  });
});
