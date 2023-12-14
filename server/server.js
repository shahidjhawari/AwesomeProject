import express from "express";

//rest object
const app = express();


//route
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome To Ngfdode server </h1>");
});

//port
const PORT = 8080;

//listen
app.listen(PORT, () => {
  console.log("Server Running");
});
