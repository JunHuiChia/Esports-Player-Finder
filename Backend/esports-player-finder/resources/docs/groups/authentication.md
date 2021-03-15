# Authentication


## Return an empty response simply to trigger the storage of the CSRF cookie in the browser.




> Example request:

```bash
curl -X GET \
    -G "http://backend.setap.local/api/sanctum/csrf-cookie" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://backend.setap.local/api/sanctum/csrf-cookie"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


<div id="execution-results-GETapi-sanctum-csrf-cookie" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-sanctum-csrf-cookie"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-sanctum-csrf-cookie"></code></pre>
</div>
<div id="execution-error-GETapi-sanctum-csrf-cookie" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-sanctum-csrf-cookie"></code></pre>
</div>
<form id="form-GETapi-sanctum-csrf-cookie" data-method="GET" data-path="api/sanctum/csrf-cookie" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-sanctum-csrf-cookie', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-sanctum-csrf-cookie" onclick="tryItOut('GETapi-sanctum-csrf-cookie');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-sanctum-csrf-cookie" onclick="cancelTryOut('GETapi-sanctum-csrf-cookie');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-sanctum-csrf-cookie" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/sanctum/csrf-cookie</code></b>
</p>
</form>


## Attempt to login as a user (SPA Only)




> Example request:

```bash
curl -X POST \
    "http://backend.setap.local/api/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://backend.setap.local/api/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers,
}).then(response => response.json());
```


<div id="execution-results-POSTapi-login" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-login"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-login"></code></pre>
</div>
<div id="execution-error-POSTapi-login" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-login"></code></pre>
</div>
<form id="form-POSTapi-login" data-method="POST" data-path="api/login" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-login', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POSTapi-login" onclick="tryItOut('POSTapi-login');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POSTapi-login" onclick="cancelTryOut('POSTapi-login');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POSTapi-login" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/login</code></b>
</p>
</form>


## Logout from a user account (SPA Only)




> Example request:

```bash
curl -X GET \
    -G "http://backend.setap.local/api/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://backend.setap.local/api/logout"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
{
    "message": "Logged Out"
}
```
<div id="execution-results-GETapi-logout" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-logout"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-logout"></code></pre>
</div>
<div id="execution-error-GETapi-logout" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-logout"></code></pre>
</div>
<form id="form-GETapi-logout" data-method="GET" data-path="api/logout" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-logout', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-logout" onclick="tryItOut('GETapi-logout');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-logout" onclick="cancelTryOut('GETapi-logout');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-logout" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/logout</code></b>
</p>
</form>


## Attempt to create an API token for a user (Non SPA Login)




> Example request:

```bash
curl -X POST \
    "http://backend.setap.local/api/sanctum/token?email=dolorum&password=porro&device_name=autem" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://backend.setap.local/api/sanctum/token"
);

let params = {
    "email": "dolorum",
    "password": "porro",
    "device_name": "autem",
};
Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "POST",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json

1|TOKEN_RESPONSE_EXAMPLE
```
<div id="execution-results-POSTapi-sanctum-token" hidden>
    <blockquote>Received response<span id="execution-response-status-POSTapi-sanctum-token"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-POSTapi-sanctum-token"></code></pre>
</div>
<div id="execution-error-POSTapi-sanctum-token" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-POSTapi-sanctum-token"></code></pre>
</div>
<form id="form-POSTapi-sanctum-token" data-method="POST" data-path="api/sanctum/token" data-authed="0" data-hasfiles="0" data-headers='{"Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('POSTapi-sanctum-token', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-POSTapi-sanctum-token" onclick="tryItOut('POSTapi-sanctum-token');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-POSTapi-sanctum-token" onclick="cancelTryOut('POSTapi-sanctum-token');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-POSTapi-sanctum-token" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-black">POST</small>
 <b><code>api/sanctum/token</code></b>
</p>
<h4 class="fancy-heading-panel"><b>Query Parameters</b></h4>
<p>
<b><code>email</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="email" data-endpoint="POSTapi-sanctum-token" data-component="query" required  hidden>
<br>
The email address of the user</p>
<p>
<b><code>password</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="password" data-endpoint="POSTapi-sanctum-token" data-component="query" required  hidden>
<br>
The password of the user</p>
<p>
<b><code>device_name</code></b>&nbsp;&nbsp;<small>string</small>  &nbsp;
<input type="text" name="device_name" data-endpoint="POSTapi-sanctum-token" data-component="query" required  hidden>
<br>
The device name for this token</p>
</form>



