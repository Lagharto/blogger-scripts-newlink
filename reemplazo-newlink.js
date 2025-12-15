document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="https://shrinkme.site/"]').forEach(function(link) {
    link.href = link.href.replace(
      "https://shrinkme.site/",
      "https://link-redirect.pages.dev/"
    );
  });
});
