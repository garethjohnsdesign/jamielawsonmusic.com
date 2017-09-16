$(document).foundation();

// 1. Light Gallery
// --------------------

$('#video-gallery').lightGallery({
    selector: '.excerpt',
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
    },
    vimeoPlayerParams: {
        autoplay: 0,
        title : 0,
        byline : 0,
        portrait : 0,
        color : 'FFFFFF'     
    }
});

$('#featured-video-gallery').lightGallery({
    selector: '.excerpt',
    counter: false,
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
    },
    vimeoPlayerParams: {
        autoplay: 0,
        title : 0,
        byline : 0,
        portrait : 0,
        color : 'FFFFFF'     
    }
});


// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});