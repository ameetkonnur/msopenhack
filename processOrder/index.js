module.exports = async function (context, myBlob) {
    //context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    var file_name = context.bindingData.name;
    var file_prefix = file_name.substring(0,14);
    var no_of_files = 0;
    context.log ('prefix : ' + file_prefix);

    const azure = require('azure-storage');
    var connection = context.log(process.env.msopenhackchallenge6_STORAGE);
    context.log(connection);
    const blobService = azure.createBlobService(connection);
    blobService.listBlobsSegmentedWithPrefix('challenge6blob',file_prefix,null,(err,data)=>{
        if (err) {
            context.log(err);
        }
        else {
            var no_of_files = data.entries.length;
            context.log ('Blobs in container with prefix ' + file_prefix + ' ' + no_of_files);
        }    
    })

    if (no_of_files === 3)
    {
        context.log('Processing Files');
    }
};