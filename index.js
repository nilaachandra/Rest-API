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
})

//server
app.listen(port, () => {
  console.log(`server started at Port 8000`);
});