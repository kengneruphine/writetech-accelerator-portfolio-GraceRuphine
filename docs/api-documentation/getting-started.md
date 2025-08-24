# Getting Started

Chimoney is a platform that enables seamless, secure, and scalable payment operations. This guide will walk you through setting up the Chimoney API from authentication to making your first API call.

## API User Requirements

To use this API, you need the following:

- A **SandBox developer account** where you will get your API Key.
- An **API key** to access to the endpoints

## API Base URL

You need to know the base URL for the different environment to start making your request:

**Sandbox Environment (For testing)**: ```json https://api-v2-sandbox.chimoney.io/v0.2.4```

**Production Environment (For live transactions)**: ```json https://api-v2.chimoney.io/v0.2.4```

:::tip Note
Remember to always test your requests in the Sandbox environment before moving to production
:::

## Authentication

The Chimoney API can be called using an API Key, which can be obtained from the [Chimoney developer dashboard](https://dash.chimoney.io/auth/signin?next=/developers)

### Generate API Key

The Chimoney API can be used for Business and developer for testing purpose, and you need an API key for both.

1. **For Business Integrating with the API**

   - Create an account at **[dash.chimoney.io](https://dash.chimoney.io/auth/signin?next=/developers)**
   - Email **support@chimoney.io** to request "Verification and API Access". Include links to your website and tell us a little more about your use case. Alternatively **[book-a-demo](https://chimoney.io/book-a-demo/)**
   - Pick an API plan and pay the **[subscription fee](https://chimoney.io/pricing/)**

2. **For Developers Tesing the API**
    
    You need to set up your Sandbox Environment

   - Sign up for your sandbox environment **[here](https://sandbox.chimoney.io/auth/signin?next=/)**
  ```json Account is funded with $1000(10000 Chimoney) of test amount ```
   - Click on the **Organizations tab** on the dashboard
   - Create an **Organization/Team**
   - Finally, click on the **Developers tab** to create an app and use the API key generated to access the sandbox endpoints.

<img src="/img/chimoney/chimoney-1.png" alt="sandbox" />


### Required Headers for a Request

To make an API request, you need to set the following headers:

| Header Name | Name | Purpose |
|----------|----------|----------|
| ```json Content-Type ```   | ```json application/json ```   | Specifies the format for the request   |
| ```json X-API-KEY ```    | ```json your_api_key```   | API key to make request   |


## Testing API

To test the API endpoints directly on the docs, follow these steps:
- Copy your **API-Key** from the Developers tab and paste it on the **Authorization Header**
  
  <img src="/img/chimoney/chimoney-2.png" alt="test" />
- Switch the Base URL to the sandbox version and click the **Try it!** button
  
  <img src="/img/chimoney/chimoney-3.png" alt="run endpoint" />

You can also make a sample request using CURL command. For example,

- Request to get beneficiaries for an account

```json
curl --request GET \
     --url https://api-v2-sandbox.chimoney.io/v0.2.4/beneficiary \
     --header 'X-API-KEY: your_api_key' \
     --header 'accept: application/json'
```

Here's the response, but the data field is empty because the system doesnot have any beneficiaries yet:

```json
{
  "status": "success",
  "message": "Beneficiaries retrieved successfully",
  "data": []
}
```

Congratulations! 🥳 You just made your first successful request. You can go ahead and explore other endpoints.
