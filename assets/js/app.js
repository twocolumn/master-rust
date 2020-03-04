---
---
{% include js/cookie-consent.js %}

{% include js/target-blank.js %}

{% include js/url-param.js %}

$(document).ready(function(){
  if(!$.urlParam("speed")) {
    $(document).ready(function() {
      $.getScript("{{ site.baseurl }}/assets/js/jquery.disqusloader.js", function( data, textStatus, jqxhr ) {
         console.log( textStatus );
         $.disqusLoader( '.disqus', { scriptUrl: '//{{ site.disqus.shortname }}.disqus.com/embed.js' });
      });
    });
  };
});
