const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Runnning PORT 3000!");
});

// Topic 3: RESTful Comments Overview ============
// Note: Made-up, shows lot of flexibility|, one of ways to do it.
// GET /comments - list all comments
// POST / comments - Create a new comment
// GET /comments/:id - Get one comments (Using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Remove one comment

// Topic 3.1: RESTful Comments Index ============
const path = require("path");
// Topic 3.5: The UUID Package ============
const { v4: createUniqueid } = require("uuid");
// Topic 3.7: Express Method-Override ============
const methodOverride = require("method-override");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(methodOverride("_method")); // override with POST having ?_method=DELETE
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//- Create a sample comments, since no DB
let comments = [
  {
    id: createUniqueid(),
    username: "Mico",
    comment: "lol, that is so funny",
  },
  {
    id: createUniqueid(),
    username: "Rezimae",
    comment: "I like to go birdwatching w/ my dog",
  },
  {
    id: createUniqueid(),
    username: "John",
    comment: "Plz delete your account, Todd",
  },
  {
    id: createUniqueid(),
    username: "Marco",
    comment: "Hahahahahahaa.",
  },
];

//- The base route - [CRUD: Read]
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments }); // Pass all comments
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new"); // Pass all comments
});

// Topic 3.2: RESTful Comments NEW ============
// Post Route: - [CRUD: Create]
app.post("/comments", (req, res) => {
  // console.log(req.body); // for debugging purposes
  // res.send("POST: It Worked"); // for debugging purposes

  const { username, comment } = req.body; // extract new items submitted
  comments.push({ username, comment, id: createUniqueid() }); // add items(username,comment) in comments
  // Topic 3.3: Express Redirects ============
  res.redirect("/comments");
});

// Topic 3.4: RESTful Comments Show ============
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  // const comment = comments.find((c) => c.id === parseInt(id)); //Before UUID,  //find comment using 'ID'
  const comment = comments.find((c) => c.id === id); //No longer need parsingInt
  res.render("comments/show", { comment }); // pass found comment
});

// Topic 3.6: RESTful Comments Update ============
// app.patch("/comments/:id", (req, res) => {
app.post("/comments/:id", (req, res) => {
  //- Mico Rayen Code
  const { id } = req.params;
  const newCommentText = req.body.comment; // Manipulate body in PostMan
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText; // its '.comment' property whatever payload in 'req.body.comments',

  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

// Topic 3.7: Express Method-Override ============
app.get("/comments/:id/edit2", (req, res) => {
  //- Colt Code
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit2", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;

  res.redirect("/comments");
});

// Topic 3.8: Express Method-Override ============

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id); //filter, returns a new array, not update the curr-array

  res.redirect("/comments");
});
