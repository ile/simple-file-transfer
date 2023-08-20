# simple-file-transfer

A simple way to transfer content through HTTP into a file at the receiving end.

Usage:


Run it at http://localhost:3000/:

```
$ npx simple-file-transfer
Server is running on port 3000
```

Send "Some content" to http://localhost:3000/:

```
curl -X POST -H "Content-Type: text/plain" --data-binary "Some content" http://localhost:3000/
```

Or send a file `path/to/your/file.txt` to http://localhost:3000/:

```
curl -X POST -H "Content-Type: text/plain" --data-binary @path/to/your/file.txt http://localhost:3000/
```

The content will be writen to `output.txt`.
