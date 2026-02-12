When working with a server where the content-lenght can be wrong when the response is returned,
the CLI fails to send the request.

The same works on the GUI and with `curl`

```
curl --request POST \
  --url http://localhost:8000/ \
  --header 'content-type: application/octet-stream' \
  --data-binary @bruno.png --output -
```
