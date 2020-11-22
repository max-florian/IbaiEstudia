
const videoURL = chrome.runtime.getURL("images/quemirasamigo.mp4");

chrome.storage.sync.get('modoestudio', function(data) {
    if(data.modoestudio){
        newHTML =   `<html>
                        <head>
                            <title>A estudiar crack!</title>
                        </head>
                        <body>
                            <video id="ibaivideo" width="100%" height="auto" controls autoplay>
                                <source src="${videoURL}" type="video/mp4">
                            </video>
                            <script> document.getElementById('ibaivideo').play();  </script>
                        </body>
                    </html>`

        document.open()
        document.write(newHTML)
        document.close()
    }
});
