jQuery(function() {
window.data = $.getJSON('/assets/json/search-posts.json');
window.data.then(function(loaded_data) {
  window.idx = lunr(function () {
    this.field('id');
    this.field('title');
    this.field('content', { boost: 10 });
    this.field('author');
    this.field('categories');
    loaded_data.forEach(function (doc, id) {
        this.add($.extend({ "id": id }, doc))
    }, this);
  });
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        var results = window.idx.search(term);
        if(results.length>0){
            window.data.then(function(loaded_data) {
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = loaded_data[ref]['url'];
                var title = loaded_data[ref]['title'];
                var body = loaded_data[ref]['content'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
            })
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}
});
