## Azurefunctions 
I have used the Azure function with JavaScript codebase, it supports serverless computing and provides many features inbuild.
For task 2 and task 3, APIs have been created


### Instance Metadata

Instance metadata API is fetched Azure VM metadata, for the Azure app authentication I have used the System defined managed identity and the API hosted on the Azure function app and enabled the function app authentication.

The application requires subscription id, resource group name, and VM name but for the POC it’s inbuild in code.

##### Dependency  
This packages need to install 
```sh
npm install @azure/arm-compute
npm install @azure/identity
```
You can call the API with the help of this URL, it's in the live state
```
Call URL: https://nodeappcode.azurewebsites.net/api/InstanceMetadata
Header: x-functions-key: Azure_function_key
OR 
https://nodeappcode.azurewebsites.net/api/InstanceMetadata?code= Azure_function_key
```

After the API call, you will get the Azure VM metadata in JSON format



### key value from object
Objfind API is an Azure function API that is based on JavaScript, Post method will be required to call this API, The robject and rkey value need to pass from the body to call this API

##### Example:
```
Call URL: https://nodeappcode.azurewebsites.net/api/InstanceMetadata
Headers: Content-Type=application/json, x-functions-key= Azure_function_key
Body: {"robject":{"
            a":{
                "b":{"c":"d"}
                    }
                },
"rkey":"a/b/c"
}```

After the call, you will get the value 


