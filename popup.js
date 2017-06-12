var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        var randomNumber = Math.floor(Math.random() * (myObj.listOfQuotes.length));
        document.getElementById("displayQuote").innerHTML = myObj.listOfQuotes[randomNumber].quote;
        document.getElementById("displayAuthor").innerHTML = myObj.listOfQuotes[randomNumber].author;
    }
};
xmlhttp.open("GET", "quotes.json", true);
xmlhttp.send();
