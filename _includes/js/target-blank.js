$(document).ready(function(){
  $('a[href^="http://"]').not('a[href*="{{ site.baseurl }}"]').attr('target','_blank');
  $('a[href^="https://"]').not('a[href*="{{ site.baseurl }}"]').attr('target','_blank');
  $('a[href$=".pdf"]').attr('target', '_blank');
});
