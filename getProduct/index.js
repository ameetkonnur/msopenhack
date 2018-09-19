module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.id) {
        id = req.query.id;
        // status: 200, /* Defaults to 200 */
        if (id === '123')
        {
            context.res = {
            body: "StartFruit_Explosion"
            };
        }
        else
        {
            context.res = {
            body: "Invalid ID passed"
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a id on the query string or in the request body"
        };
    }
};