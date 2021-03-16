# Authenticating requests

To authenticate requests, include an **`Authorization`** header with the value **`"Bearer {YOUR_AUTH_KEY}"`**.

All authenticated endpoints are marked with a `requires authentication` badge in the documentation below.

<strong>Bearer tokens are not required if calling the API from an SPA frontend, you must use the /sanctum/csrf-cookie & /api/login endpoints to authenticate SPA frontend apps. Token authentication is only used for mobile apps and testing the backend locally.</strong><br>
        You can retrieve your token by calling the /api/sanctum/token endpoint.
