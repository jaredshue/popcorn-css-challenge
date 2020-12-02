document.addEventListener("DOMContentLoaded", function() {
    function hide(element) {
        element.style.display = "none";
    }

    function show(element) {
        element.style.display = "block";
    }

    var learnMoreButton = document.getElementById("btn-learn-more");
    learnMoreButton.addEventListener("click", function() {
        hide(learnMoreButton);
        alert("We all have 10 fingers and 10 toes");
        show(learnMoreButton);
    });

    var groupRatesButton = document.getElementById("btn-group-rates");
    groupRatesButton.addEventListener("click", function() {
        var groupRatesCard = document.getElementById("card-group-rates");

        if (groupRatesCard == null) {
            var newCard = document.createElement("div");
            newCard.setAttribute("id", "card-group-rates");
            newCard.setAttribute("class", "card");

            var cardHeader = document.createElement("h3");
            cardHeader.innerText = "Group Rates";

            var rateList = document.createElement("ul");

            var rates = [
                "4 for $40 per person",
                "5+ family discount of $50 per ticket",
                "Buy 2 get one free"
            ];

            for (var rate of rates) {
                var listItem = document.createElement("li");
                listItem.innerText = rate;
                rateList.append(listItem);
            }

            newCard.append(cardHeader);
            newCard.append(rateList);

            var aboutUsCard = document.getElementById("card-about-us");
            aboutUsCard.parentNode.insertBefore(newCard, aboutUsCard);
        }
        else {
            groupRatesCard.remove();
        }
    });

    var letsGoButton = document.getElementById("btn-lets-go");
    letsGoButton.addEventListener("click", function() {
        var newCard = document.createElement("div");
        newCard.setAttribute("class", "card");

        var form = document.createElement("form");
        form.setAttribute("id", "form-booking-info");

        var fields = [
            {
                id: "form-booking-info-first-name",
                type: "text",
                placeholder: "First Name"
            },
            {
                id: "form-booking-info-last-name",
                type: "text",
                placeholder: "Last Name"
            },
            {
                id: "form-booking-info-city",
                type: "combo",
                options: [
                    "San Juan",
                    "Bayamon",
                    "Carolina",
                    "Ponce",
                    "Caguas"
                ]
            },
            {
                id: "form-booking-info-submit",
                type: "submit"
            }
        ];

        for (var field of fields) {
            var e;

            if (field.type == "text") {
                e = document.createElement("input");
                e.setAttribute("id", field.id);
                e.setAttribute("type", field.type);
                e.setAttribute("placeholder", field.placeholder);
            }
            else if (field.type == "combo") {
                e = document.createElement("select");
                e.setAttribute("id", field.id);
                e.setAttribute("type", field.type);

                for (var option of field.options) {
                    o = document.createElement("option");
                    o.setAttribute("value", option);
                    o.innerText = option;
                    e.append(o);
                }
            }
            else if  (field.type == "submit") {
                e = document.createElement("input");
                e.setAttribute("id", field.id);
                e.setAttribute("type", field.type);
                e.setAttribute("value", "Book it");
                e.addEventListener("click", function() {
                    alert(`${document.getElementById("form-booking-info-first-name").value} ${document.getElementById("form-booking-info-last-name").value} has been booked for a flight to ${document.getElementById("form-booking-info-city").value}!`);
                });
            }

            form.append(e);
        }

        newCard.append(form);

        var aboutUsCard = document.getElementById("card-about-us");
        aboutUsCard.parentNode.insertBefore(newCard, aboutUsCard);
    });
});
