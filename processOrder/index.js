module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    var file_name = context.bindingData.name;
    var file_prefix = file_name.substring(0,14);
    context.log ('prefix' + file_prefix);
};