$(document).ready(function() {
  $(".course-weekday").text("Monday")
  $(".course-time").text("7-9pm")
  $(".quarter-year").text("Fall 2022")
  // $(".academic-year").text("2021-2022")
  $(".course-location").html("Old Union 3rd floor, room 301")
  $(".course-duration").text("1-year")
  $(".student-officers").html(`
    <br>Irena Gao (igao &lt;at&gt; stanford.edu)
    <br>Fletcher Passow (passow &lt;at&gt; stanford.edu)
    <br>Claire Muscat (cnmuscat &lt;at&gt; stanford.edu)
  `)

  var nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
  var rounddown = function(x, k) {
    return Math.floor(x/k)*k;
  }
  var d = new Date()
  var t1 = new Date('1974-09-15')
  var ministry_years = d.getFullYear() - t1.getFullYear()
  var academic_year = d.getFullYear()
  if(d.setFullYear(t1.getFullYear()) < t1) {
    ministry_years -= 1
    academic_year -= 1
  }
  $(".academic-year").text(academic_year + '-' + (academic_year+1))
  $(".ministry-years").text(ministry_years)
  $(".ministry-years.ordinal").text(ministry_years + nth(ministry_years))
  $(".ministry-years.fives").text(rounddown(ministry_years, 5))

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
