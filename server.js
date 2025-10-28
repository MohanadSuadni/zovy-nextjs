const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// ✅ CORS konfiguracija (da React Admin vidi header)
server.use(cors({
  origin: "*",
  exposedHeaders: ["Content-Range"], // <--- VAŽNO
}));

server.use(middlewares);

// ✅ Middleware da uvek doda Content-Range (ne samo za /images)
server.use((req, res, next) => {
  if (req.method === "GET") {
    const resource = req.url.split("?")[0].replace("/", ""); // npr. 'images'
    if (router.db.has(resource).value()) {
      const data = router.db.get(resource).value();
      const total = data.length;
      res.header("Access-Control-Expose-Headers", "Content-Range");
      res.header("Content-Range", `${resource} 0-${total - 1}/${total}`);
    }
  }
  next();
});

server.use(router);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`✅ JSON Server running at http://localhost:${PORT}`);
});