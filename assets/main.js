var list = document.querySelectorAll(".item a");

for (var i = 0; i < list.length; i++) {
	var url = list[i].children[0].getAttribute("src");
  list[i].style.backgroundImage="url('" + url + "')";
}

//Sponsors Clickable Video
function showVideo() {
    var htmlShow = document.getElementById("show");
    var videoIframe = document.getElementById("videoIframe");
    
    if (htmlShow.style.display === "none" || htmlShow.style.display === "") {
        htmlShow.style.display = "block";
        videoIframe.src = videoIframe.getAttribute('data-src'); // Restore original src
    } else {
        htmlShow.style.display = "none";
        videoIframe.setAttribute('data-src', videoIframe.src); // Store original src
        videoIframe.src = ''; // Remove src to stop the video
    }
}

// Store the initial src value in a data attribute on page load
document.addEventListener("DOMContentLoaded", function() {
    var videoIframe = document.getElementById("videoIframe");
    videoIframe.setAttribute('data-src', videoIframe.src);
});


$(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });