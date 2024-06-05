const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 8000;

// Routes
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
  res.send(html);
});

//dynamic routes
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

//create new user
app.post("/api/users", (req, res) => {
  return res.json({ status: "pending" });
});

//update user
app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

//delete user
app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

//you can also group the routes
// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//   })
//   .patch((req, res) => {
//     //edit user
//     return res.json({ status: "pending" });
//   })
//   .delete((req, res) => {
//     //delet user
//     return res.json({ status: "pending" });
//   });

//server
app.listen(port, () => {
  console.log(`server started at Port 8000`);
});
