
const videoURL = chrome.runtime.getURL("images/quemirasamigo.mp4");

document.body.addEventListener('mouseover',function() { reproducirVideo(); },false);

function reproducirVideo(){
    chrome.storage.sync.get('modoestudio', function(data) {
    
        if(data.modoestudio){
            newHTML =   `<html>
                            <head>
                                <title>A estudiar crack!</title>
                            </head>
                            <body>
                                <video id="ibaivideo" width="100%" height="auto" controls autoplay loop>
                                    <source src="${videoURL}" type="video/mp4">
                                </video>
                            </body>
                        </html>`
    
            document.open()
            document.write(newHTML)
            document.close()
        }
    });
}


