module.exports = async function (context, req) {
    function getObj(object, key) {
        const keys = key.split('/');
        let obj = object;
        for (let key of keys) {
            for (let [objKey, value] of Object.entries(obj)) {
                if (!keys.includes(objKey)) {
                    continue;
                }
                obj = value;
            }
        }
        return obj;
    }
    context.log('API Started');
    const robject = (req.query.robject || (req.body && req.body.robject));
    const rkey = (req.query.rkey || (req.body && req.body.rkey));
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: getObj(robject, rkey)
    };
}