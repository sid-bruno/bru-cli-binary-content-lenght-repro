const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const responseHeaders = {};
      for (const [key, value] of Object.entries(req.headers)) {
        responseHeaders[key] = value;
      }

      res.writeHead(200, responseHeaders);
      res.end(body);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
