# Game


## Get all games

<small class="badge badge-darkred">requires authentication</small>



> Example request:

```bash
curl -X GET \
    -G "http://backend.setap.local/api/games" \
    -H "Authorization: Bearer {YOUR_AUTH_KEY}" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://backend.setap.local/api/games"
);

let headers = {
    "Authorization": "Bearer {YOUR_AUTH_KEY}",
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
    "games": [
        {
            "id": 1,
            "name": "test",
            "created_at": "2021-03-20T18:55:52.000000Z",
            "updated_at": "2021-03-20T18:55:53.000000Z"
        },
        {
            "id": 2,
            "name": "league",
            "created_at": "2021-03-20T18:55:57.000000Z",
            "updated_at": "2021-03-20T18:55:58.000000Z"
        }
    ]
}
```
<div id="execution-results-GETapi-games" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-games"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-games"></code></pre>
</div>
<div id="execution-error-GETapi-games" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-games"></code></pre>
</div>
<form id="form-GETapi-games" data-method="GET" data-path="api/games" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer {YOUR_AUTH_KEY}","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-games', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
        <button type="button" style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-tryout-GETapi-games" onclick="tryItOut('GETapi-games');">Try it out ⚡</button>
    <button type="button" style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-canceltryout-GETapi-games" onclick="cancelTryOut('GETapi-games');" hidden>Cancel</button>&nbsp;&nbsp;
    <button type="submit" style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;" id="btn-executetryout-GETapi-games" hidden>Send Request 💥</button>
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/games</code></b>
</p>
<p>
<label id="auth-GETapi-games" hidden>Authorization header: <b><code>Bearer </code></b><input type="text" name="Authorization" data-prefix="Bearer " data-endpoint="GETapi-games" data-component="header"></label>
</p>
</form>



