module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    var file_name = context.bindingData.name;
    var file_prefix = file_name.substring(0,14);
    context.log ('prefix : ' + file_prefix);

    const azure = require('azure-storage');
    const blobService = azure.createBlobService(process.env.msopenhackchallenge6_STORAGE);
    
    blobService.listBlobsSegmentedWithPrefix('challenge6blob',file_prefix,null,(err,data)=>{
        if (err) {
            context.log(err);
        }
        else {
            context.log ('Blobs in container with prefix ' + file_prefix + ' ' + data);
        }    
    })
};