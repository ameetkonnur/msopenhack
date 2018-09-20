module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    var file_name = context.bindingData.name;
    var file_prefix = file_name.substring(0,14);
    context.log ('prefix : ' + file_prefix);

    const azure = require('azure-storage');
    const blobService = azure.createBlobService(CONFIG.msopenhackchallenge6_STORAGE);
    
    const list = () => {
        return new Promise((resolve,reject)=>{
            blobService.listBlobsSegmentedWithPrefix('challenge6blob',file_prefix,null,(err,data)=>{
                if (err) {
                    reject(err);
                }
                else {
                    context.log ('Blobs in container with prefix ' + file_prefix + ' ' + data);
                }    

            })
        })
    }
};