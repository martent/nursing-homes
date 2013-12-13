jQuery(document).ready(function($) {

  // Create slideshow if there's more than one images for a nursing home
  var $slideshow = $('#slideshow');
  if ($slideshow.length && $slideshow.find('.images > img').length > 1) {

    var $count = $slideshow.find('.controls .count');
    var total = $slideshow.find('.images > img').length;
    var $slider = $slideshow.find('.images');
    $slideshow.find('.controls').show();

    $slider.cycle({
      fx: 'fade',
      timeout: 0,
      speed: 200,
      next: '#slideshow .controls .next, #slideshow img',
      prev: '#slideshow .controls .prev',
      swipe: true
    }).on('cycle-update-view', function(event, opts) {
      $count.text('Bild ' + (opts.currSlide + 1) + ' av ' + total);
      $slideshow.css('z-index', '0');
    });

    $(document).keyup(function (event) {
      if (event.keyCode == 37) {
        $slider.cycle('prev');
      } else if (event.keyCode == 39) {
        $slider.cycle('next')
      }
    });
  }
});
