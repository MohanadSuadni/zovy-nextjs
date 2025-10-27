const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Middleware za React Admin da dodamo Content-Range
server.use((req, res, next) => {
  if (req.method === "GET" && req.url.startsWith("/images")) {
    const images = router.db.get("images").value();
    const total = images.length;
    res.setHeader("Access-Control-Expose-Headers", "Content-Range");
    res.setHeader("Content-Range", `images 0-${total - 1}/${total}`);
  }
  next();
});

server.use(router);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`JSON Server running at http://localhost:${PORT}`);
});