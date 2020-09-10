$(document).ready(function() {
  $(".course-weekday").text("Monday")
  $(".course-time").text("7-9pm")
  $(".quarter-year").text("Fall 2020")
  $(".academic-year").text("2020-2021")
  $(".course-location").html("this <a style='color:#0085a1' target='_blank' href='https://us02web.zoom.us/j/9598309206'>Zoom Link</a>")
  $(".course-duration").text("1-year")
  $(".student-officers").html(`
    <br>Gloria Yi (gloria.j.yi &lt;at&gt; stanford.edu)
    <br>Allan Jiang (jiangts &lt;at&gt; stanford.edu)
    <br>Jesse Doan (jdoan21 &lt;at&gt; stanford.edu)
  `)

  switch (location.pathname) {
      /*
    case '/index.html':
      $.get("/announcements/fall-2019.html", function(html) {
        $(".index.announcements").html(html)
      })
      break;
      */
    default:
      break;
  }
});
