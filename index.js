const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

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
  fs.readFile("data/users.json", (err, data) => {
    if (err) {
      res.send(err);
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

  fs.readFile("data/users.json", (err, data) => {
    if (err) {
      res.send({ status: "Failed" });
    } else {
      const users = JSON.parse(data.toString());
      users.push(user);
      fs.writeFile("data/users.json", JSON.stringify(users), err => {
        console.log(err);
      });
      res.send({ status: "Succeed" });
    }
  });
});

app.get("/api/learnPhase", (req, res) => {
  fs.readFile("data/learnPhase.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.parse(data.toString()));
    }
  });
});

app.post("/api/learnPhase", (req, res) => {
  const id = req.body.id;
  const phase = req.body.phase;
  fs.readFile("data/learnPhase.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const learnPhase = JSON.parse(data.toString());
      const index = learnPhase.findIndex(item => item.id === id);
      learnPhase[index].phase = phase;
      fs.writeFile("data/learnPhase.json", JSON.stringify(learnPhase), err => {
        console.log(err);
      });
      res.send({ status: "success" });
    }
  });
});

app.get("/api/counts", (req, res) => {
  fs.readFile("data/counts.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.parse(data.toString()));
    }
  });
});

app.post("/api/counts", (req, res) => {
  const count = req.body.count;
  const username = req.body.username;
  const type = req.body.type;
  console.log(count, username, type);
  fs.readFile("data/counts.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const counts = JSON.parse(data.toString());
      counts[type].counts += count;
      counts[type].users.push(username);
      fs.writeFile("data/counts.json", JSON.stringify(counts), err => {
        console.log(err);
      });
      res.send({ status: "success" });
    }
  });
});

app.get("/api/vote", (req, res) => {
  fs.readFile("data/counts.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.parse(data.toString()));
    }
  });
});

function vote(length, comments, route, type, username) {
  if (length === route.length) {
    comments.voteCount[type].counts += 1;
    comments.voteCount[type].users.push(username);
  } else {
    if (length === route.length - 1)
      vote(length + 1, comments[route[length]], route, type, username);
    else vote(length + 1, comments[route[length]].reply, route, type, username);
  }
}

app.post("/api/vote", (req, res) => {
  const route = req.body.route;
  const type = req.body.type;
  const username = req.body.username;
  fs.readFile("data/comments.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const comments = JSON.parse(data.toString());
      vote(0, comments, route, type, username);
      fs.writeFile("data/comments.json", JSON.stringify(comments), err => {
        console.log(err);
      });
      res.send({ status: "success" });
    }
  });
});

app.get("/api/comments", (req, res) => {
  fs.readFile("data/comments.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.parse(data.toString()));
    }
  });
});

function pushReply(length, comments, route, comment) {
  if (length === route.length) {
    route.push(comments.length);
    comment.route = route;
    comments.push(comment);
  } else {
    pushReply(length + 1, comments[route[length]].reply, route, comment);
  }
}

app.post("/api/comments", (req, res) => {
  const comment = {
    username: req.body.username,
    message: req.body.message,
    reply: [],
    voteCount: {
      voteup: { counts: 0, users: [] },
      votedown: { counts: 0, users: [] }
    }
  };
  const route = req.body.route;
  fs.readFile("data/comments.json", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const comments = JSON.parse(data.toString());
      if (route === undefined) {
        comment.route = [comments.length];
        comments.push(comment);
      } else {
        pushReply(0, comments, route, comment);
      }

      fs.writeFile("data/comments.json", JSON.stringify(comments), err => {
        console.log(err);
      });
      res.send({ status: "success" });
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening at ${port}...`);
});
