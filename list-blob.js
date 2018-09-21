const azure = require('azure-storage');
const blobService = azure.createBlobService('DefaultEndpointsProtocol=https;AccountName=msopenhackchallenge6;AccountKey=LvQkWmyoJZXCQOf4Vh5j+jnNUHuy4NgnBZiJEpLAWQ45sNQlJMofsRitrxxvOCXfuaPdXrSISS4vRssOjYNG3w==');
//console.log(blobService);
blobService.listBlobsSegmentedWithPrefix('challenge6blob','20180920093900',null,(err,data)=>{
    if (err) {
        console.log(err);
    }
    else {
        //console.log ('Blobs in container with prefix ' + '20180920093900' + ' ' + data.entries.length);
    }    
})

blobService.getBlobToText('challenge6blob','20180920093900-OrderHeaderDetails.csv',(err,text)=>{
    if (err) {
        console.log(err);
    }
    else {
        console.log (text);
        var lines = text.split('\n')

        var OrderHeader = lines[0].split(',');
        var OrderDetails;
        var OrderJSON = '['
        for (i=1;i<lines.length;i++)
        {
            OrderDetails = lines[i].split(',');
            OrderJSON = OrderJSON + '{'
            for (j=0;j<OrderHeader.length;j++)
            {
                OrderJSON = OrderJSON + '"' + OrderHeader[j] + '":"' + OrderDetails[j] + '"';
            }
            OrderJSON = OrderJSON + '}'
        }
        OrderJSON = OrderJSON + ']'
        console.log(OrderJSON);
    }    
})