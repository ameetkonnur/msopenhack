const azure = require('azure-storage');
const blobService = azure.createBlobService('DefaultEndpointsProtocol=https;AccountName=msopenhackchallenge6;AccountKey=LvQkWmyoJZXCQOf4Vh5j+jnNUHuy4NgnBZiJEpLAWQ45sNQlJMofsRitrxxvOCXfuaPdXrSISS4vRssOjYNG3w==');
console.log(blobService);
blobService.listBlobsSegmentedWithPrefix('challenge6blob','20180920093900',null,(err,data)=>{
    if (err) {
        console.log(err);
    }
    else {
        console.log ('Blobs in container with prefix ' + '20180920093900' + ' ' + data.entries);
    }    
})