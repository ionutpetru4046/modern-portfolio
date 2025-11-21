// event loop/async

console.log("start");

setTimeout(() => {
    console.log("timeout");
}), 2000;

console.log("end");

// file system async
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
        console.log(data);
});

// HTTP server
const http = require('http');

http.createServer((req, res) => {
    res.end('Hello world');
}).listen(3000);

// express js quick example
const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => res.json({ message: 'Hello from express' }));
app.post('/users', (req, res) => res.status(201).json(req.body));

app.listen(4000, () => console.log("express server running on port 4000"));

// setp express + mongoDB database
const { Schema, model } = require('mongoose');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// connet to mongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase',) 
    .then(() => console.log("connected to mongoDB"))
    .catch(err => console.error(err));

// define a schema and model
const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true },
    age: Number,
    createdAt: { type: Date, default: Date.now }
});

const User = model('User', userSchema);

// Basic CRUD API

//Get All users
app.get("users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET user by id
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create a new user
app.post("users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//PUT update a user
app.put("/user/:id", async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a user
app.delete("/users/:id", async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

// Pagination Example
app.get("users-paginated", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    try {
        const users = await User.find()
        .skip((page - 1) * limit)
        .limit(limit);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

// simple async awit
async function getAdultUsers() {
    const adults = await User.find({ age: { $gte: 18} });
    return adults;
}

getAdultUsers().then(users => console.log(users));

// error handling middleware
app.get("/safe-users", async (req, res, next) => {
    try {
        const users = await User.find();
        if (!users.length) throw new Error("no users found");
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

// JWT authentication example
const jwt = require('jsonwebtoken');

app.post("/login", (req, res) => {
    const { email } = req.body;
    const token = jwt.sign({ email}, "secret_Key", { expiresIn: '1hr' });
    res.json({ token });
});

// protected route
function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "no token provided"});
    try {
        req.user = jwt.verify(token, "secret_Key");
        next();
    } catch (error) {
        res.status(401).json({ message: "invalid token"})
    }
}

app.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: `Hello ${req.user.email}, you are authorized`});
});