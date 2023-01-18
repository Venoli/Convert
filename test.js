 function loadHTML() {
    fetch(URL.createObjectURL(document.getElementById("html_file").files[0]))
        .then(response=> response.text())
        .then(text => convert(text));
}

async  function convert(text){
    document.getElementById('homePage').innerHTML = text

    var images = document.querySelectorAll("img")
    var doneCount = 0;
    for (let contentChild of images){
        await asycronouseProcess();
        //  function asycronouseProcess(){
        //     var reader = new FileReader();
        //
        //     fetch(contentChild.src).then(function(response) {
        //         return response.blob();
        //     }).then( async function(myBlob) {
        //         await reader.readAsDataURL(myBlob);
        //         var baseString;
        //         reader.onloadend = await function () {
        //             baseString = reader.result;
        //             doneCount++
        //             console.log("image " + doneCount + " done");
        //             contentChild.src = baseString
        //             reader.abort()
        //         }});
        // }


    }
console.log(document.getElementById("html_file").value)
}

function save(){
    text = document.getElementById('homePage').innerHTML
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
            encodeURIComponent(text));
        element.setAttribute('download', "output.html");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

}
