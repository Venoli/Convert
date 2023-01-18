 function loadHTML() {
    fetch(URL.createObjectURL(document.getElementById("html_file").files[0]))
        .then(response=> response.text())
        .then(text => convert(text));
}

async  function convert(text){
    setUpImages();
    document.getElementById('homePage').innerHTML = text

    var images = document.querySelectorAll("img")
    var doneCount = 0;
    var imageFiles = document.getElementById("img_directory").files;

    const imgHash = {};
    for (const file of imageFiles) {
        imgHash[file.webkitRelativePath] = file;
    }

    for (let contentChild of images){

        await asycronouseProcess();

         async function asycronouseProcess() {
            var reader = new FileReader();
            console.log(contentChild.src)
            console.log(imgHash[contentChild.src])
                await reader.readAsDataURL(imgHash[contentChild.src])

                var baseString;
                reader.onloadend = await function () {
                    baseString = reader.result;
                    doneCount++
                    console.log("image " + doneCount + " done");
                    contentChild.src = baseString
                    reader.abort()
                };


         }


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
function setUpImages(){
    console.log("hi")
    console.log(document.getElementById("img_directory").files[0]);
    console.log(URL.createObjectURL(document.getElementById("img_directory").files[0]));

}
