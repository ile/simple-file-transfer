# simple-file-transfer

A simple way to transfer content through HTTP into a file at the receiving end.

Usage:


Run it at http://localhost:3000/:

```
npx simple-file-transfer
```

Send content to http://localhost:3000/:

```
curl -X POST -H "Content-Type: text/plain" --data-binary ./app.js http://localhost:3000/
```