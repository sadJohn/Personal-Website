const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));


app.use(express.json());

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  if (req.method == "OPTIONS") res.sendStatus(200);
  else next();
});

app.get("/api/users", (req, res) => {
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.parse(data.toString()));
    }
  });
});

app.post("/api/users", (req, res) => {
  const user = {
    username: req.body.username,
    pwd: req.body.pwd
  };
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const users = JSON.parse(data.toString());
      users.push(user);
      fs.writeFile("users.json", JSON.stringify(users), err => {
        console.log(err);
      });
      res.send({ status: "success" });
    }
  });
});

app.get("/api/comments", (req, res) => {
  fs.readFile("comments.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.parse(data.toString()));
    }
  });
});

app.post("/api/comments", (req, res) => {
  const comment = {
    username: req.body.username,
    message: req.body.message
  };
  fs.readFile("comments.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const comments = JSON.parse(data.toString());
      comments.push(comment);
      fs.writeFile("comments.json", JSON.stringify(comments), err => {
        console.log(err);
      });
      res.send({ status: "success" });
    }
  });
});

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at ${port}...`);
});
