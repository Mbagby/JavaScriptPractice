$.ajax({
  url: 'http://www.omdbapi.com/?t=Frozen&y=&plot=short&r=json',
  method: "GET",
  success: function(data, statusString, jqXHR) {
    console.log(data.Title + " " + jqXHR.status)
  }
}); 