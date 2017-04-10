This is the zine version of the program for the Getty Digital Share taking place April 12, 2017. The Digital Share is an on-site retreat for staff working on digital projects to meet one another and to exchange work and ideas. This is its second year.

The zine here uses [**Booklet**](https://github.com/geealbers/booklet), a css/js package that is an in-progress weekend project. The idea with Booklet is to format sixteen individual pages into a double-sided signature that could be printed, folded and trimmed into a booklet, and also to animate that process online. At this stage, the folding animation is complete and working in modern browsers, and you can switch between five common paper sizes. Printing the resulting booklet though, only works reliably in Chrome so far, and even then you must be careful to print without margins, and double-sided along the short edge. For the online sequence, the next step is to incorporate [**Turn.js**](http://www.turnjs.com/) so that once the booklet folds, you can then page through it on the screen regularly, as you would the printed version.

One additional thing to note is that the individual pages are marked up in the html in order, one through sixteen, not in the order they appear in the animated signature or in the print out. In this way, even without the css and js, the booklet remains readable.

```html
  <div class="page-wrapper front" id="p_1"><div class="page">
    Page 1 content …
  </div></div>
  <div class="page-wrapper back flipped" id="p_2"><div class="page">
    Page 2 content …
  </div></div>
  <div class="page-wrapper back flipped" id="p_3"><div class="page">
    Page 3 content …
  </div></div>
  <div class="page-wrapper front" id="p_4"><div class="page">
    Page 4 content …
  </div></div>
``````

Ultimately, this could be used in conjunction with a static-site generator like [**Jekyll**](https://jekyllrb.com/), where the booklet pages were created from the headings and summaries of longer pages in the site and could then link to those pages. Offering a booklet version of a blog or digital publication.
