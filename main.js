$(function() {
  $('#site_form').submit(addSiteToList);
  $('.stories').on('click', 'i', changeStar);
});

function addSiteToList(e) {
  e.preventDefault();
  let siteTitle = $(e.target.site_title).val();
  let siteUrl = $(e.target.site_url).val();
  // http://   https://
  let shortUrl = siteUrl.slice(siteUrl.indexOf(':') + 3, siteUrl.length);
  $('.stories').append(
    `<li><i class="far fa-star"></i><a href="${siteUrl}">${siteTitle}</a><small>(${shortUrl})</small></li>`
  );
  e.target.reset();
}

function changeStar(e) {
  $(e.target).toggleClass('fas fa-star far fa-star');
}
