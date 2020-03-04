---
---
new jekyllSearch(
  '{{ site.baseurl }}/assets/json/{{ site.json-search }}.json',
  '#search-input',
  '#results-container',
  '{{ site.baseurl }}'
).init();
