
chrome.storage.sync.get('modoestudio', function(data) {
    if(data.modoestudio){
        newHTML =   `<html>
                    <head>
                        <title>A estudiar crack!</title>
                    </head>
                    <body>
                        <p>Ibai te manda a estudiar</p>
                    </body>
                    </html>`

        document.open()
        document.write(newHTML)
        document.close()
    }
});
