const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");

module.exports = async function (context, req) {

    async function getAVirtualMachine() {
        const subscriptionId = "";
        const resourceGroupName = "";
        const vmName = "";
        const credential = new DefaultAzureCredential();
        const client = new ComputeManagementClient(credential, subscriptionId);
        const result = await client.virtualMachines.get(resourceGroupName, vmName);
        return result;
    }

    context.log('API Started');

    const json = await getAVirtualMachine().catch(console.error);
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    console.log(json);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: json
    };
}