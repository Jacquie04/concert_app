$(document).ready(function () {

    // $('.dropdown-toggle').dropdown();



    function searchConcert(event) {
        var country = $(this).attr("data-value");
        var inputDate = $(".Start").val();
        //converting user input date to match API date format
        var outputDate = inputDate.replace(/(..).(..).(....)/, "$3-$1-$2");
        var city = $(".City").val();
        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&size=15&sort=date,asc&countryCode=" + country + "&localStartDateTime=" + outputDate + "T14:00:00" + "&city=" + city + "&apikey=YzjL2FipsWpZaCGJsxsgHHFXHhkhaekt";
        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function (response) {
            console.log(response)
            $("#concert-list").empty();
            var concert = response._embedded.events;
            console.log(concert);
            for (var i = 14; i < concert.length; i--) {
                var stringName = JSON.stringify(concert[i].name);
                var stringDate = JSON.stringify(convertedDate);
                console.log(typeof (stringName))
                console.log(typeof (stringDate))
                console.log(typeof (stringTime))
                console.log(typeof (stringCity))
                console.log(typeof (stringCountry))
                console.log(typeof (stringVenue))
                var stringTime = JSON.stringify(standardConcertTime);
                var stringCity = JSON.stringify(concert[i]._embedded.venues[0].city.name);
                var stringCountry = JSON.stringify(concert[i]._embedded.venues[0].country.name);
                var stringVenue = JSON.stringify(concert[i]._embedded.venues[0].name);
                var space = $("<br>");
                var concertDiv = $("<div class='concert'>");
                var concertName = $("<p class='concert-name' name='concert_name'>").text("Artist/Band Name/Event: " + stringName);
                var convertDate = concert[i].dates.start.localDate;
                // Converting API date format to standard date format used in USA
                var convertedDate = convertDate.replace(/(....).(..).(..)/, "$2/$3/$1");
                var concertDate = $("<p class='concert-date' name='concert_date'>").text("Concert Date: " + stringDate);
                var responseTime = concert[i].dates.start.localTime;
                //converting API military time to standard time
                function convertMilitary(time) {
                    // Check correct time format and split into components
                    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

                    if (time.length > 1) { // If time format correct
                        time = time.slice(1);  // Remove full string match value
                        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
                        time[0] = +time[0] % 12 || 12; // Adjust hours
                    }
                    return time.join(''); // return adjusted time or original string
                }
                console.log(concert[i].url)
                var standardConcertTime = convertMilitary(responseTime);
                var concertTime = $("<p class='concert-time' name='concert_time'>").text("Concert Time: " + stringTime);
                var concertVenue = $("<p class='concert-venue' name='concert_venue'>").text("Venue Name: " + stringVenue);
                var concertCity = $("<p class='concert-city' name='concert_city'>").text("City: " + stringCity + " ------- Country: " + stringCountry);
                var purchaseTicket = $("<a class='purchase-ticket' target='_blank'>").attr("href", concert[i].url).text("Purchase Tickets Here!");
                var concertImage = $("<img class='concert-image'>").attr("src", concert[i].images[0].url);

                concertDiv.append(space);
                concertDiv.append(concertName);
                concertDiv.append(concertImage);
                concertDiv.append(concertDate);
                concertDiv.append(concertCity);
                concertDiv.append(concertTime);
                concertDiv.append(concertVenue);
                concertDiv.append(purchaseTicket);



                console.log(concertName)
                console.log(concertDate)
                console.log(concertTime)
                console.log(concertCity)
                console.log(concertVenue)





                $("#concert-list").prepend(concertDiv);
            }



        });

    }
    $("li").click(searchConcert);



    //Used to deploy error message if no date is entered into the date input
    $('.NA').on('click', function (event) {
        $("#concert-list").show();
        if ($('.text').val() === '') {
            $('.no-result').toggle();
        } else {
            $('.no-result').hide();
        };
    });

});

