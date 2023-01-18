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
        imgHash["https://convertbase64.web.app/"+file.webkitRelativePath] = file;
       // imgHash["http://localhost:63342/Convert/untitled/public/"+file.webkitRelativePath] = file;

        console.log("https://convertbase64.web.app/"+file.webkitRelativePath)
    }

    for (let contentChild of images){

        await asycronouseProcess();

         async function asycronouseProcess() {
            var reader = new FileReader();
             console.log("Image.src paths from original html" + contentChild.src)
            console.log(imgHash[contentChild.src])
                await reader.readAsDataURL(imgHash[contentChild.src])

                var baseString;
                reader.onloadend = await function () {
                    baseString = reader.result;
                    doneCount++
                    console.log(doneCount + " image done");
                    contentChild.src = baseString
                    reader.abort()
                };


         }


    }
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

