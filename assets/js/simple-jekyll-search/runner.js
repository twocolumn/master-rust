---
---
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '{{ site.baseurl }}/assets/json/{{ site.json-search }}.json',
  searchResultTemplate: `
         <dt class="result">
          <a class="posts-nav-item"  href="{url}">
            <span class="posts-nav-item-date">
              <time datetime="{date}" class="date">
                {date}
              </time>
            </span>
            {title}
          </a>
        </dt>
        <dd>
          <p>{description}</p>
        </dd>`,
  noResultsText: '{{ site.data.ui-text[site.locale].no-results-found }}'
});
