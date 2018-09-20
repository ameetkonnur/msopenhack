const azure = require('azure-storage');
const blobService = azure.createBlobService(process.env.msopenhackchallenge6_STORAGE);
context.log(blobService);
blobService.listBlobsSegmentedWithPrefix('challenge6blob',file_prefix,null,(err,data)=>{
    if (err) {
        context.log(err);
    }
    else {
        context.log ('Blobs in container with prefix ' + file_prefix + ' ' + data.entries);
    }    
})