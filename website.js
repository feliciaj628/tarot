fetch('reviews1.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("reviews");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
    div.innerHTML = data[i].reviewer + ': ' + data[i].message;
    mainContainer.appendChild(div);}}
