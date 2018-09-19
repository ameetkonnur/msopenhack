module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    documents = context.bindings.taskDocument;
    context.log(documents);
    if (documents.id != null) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: documents.id
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};