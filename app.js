const express = require("express");
const app = express();

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJjYmZlYmUzMy0zMmFiLTQ3MmYtOGFkNi03ZWU0NmNjN2RlYjciLCJ1c2VyX2lkIjoiY2JmZWJlMzMtMzJhYi00NzJmLThhZDYtN2VlNDZjYzdkZWI3IiwidXNlcl90eXBlIjoiQkVORUZJQ0lBUlkiLCJtb2JpbGVfbnVtYmVyIjo4OTUzNDMxODc0LCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjM4ODIzODQ1MjE1MjIwLCJzZWNyZXRfa2V5IjoiYjVjYWIxNjctNzk3Ny00ZGYxLTgwMjctYTYzYWExNDRmMDRlIiwidWEiOiJNb3ppbGxhLzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuNzIgU2FmYXJpLzUzNy4zNiIsImRhdGVfbW9kaWZpZWQiOiIyMDIxLTA1LTIwVDA1OjI0OjEyLjMyMVoiLCJpYXQiOjE2MjE0ODgyNTIsImV4cCI6MTYyMTQ4OTE1Mn0.gUdPQDskes3miSpkSSTBI3RbBraBXUuutk77YJ3S1eU";
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

app.post("/settoken", (req, res) => {
    console.log(req.body);
    token = req.body.token;
    res.send("Set");
})

app.get("/gettoken", (req, res) => {
    res.send(token);
})

app.get("/test", (req, res) => {
    console.log(req.headers)
    res.send("done");
})

app.listen(3233, () => {
    console.log("server start.")
})