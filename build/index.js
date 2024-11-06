"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create an instance of the express application
const app = (0, express_1.default)();
// Define a port
const port = 3000;
// Middleware (optional)
app.use(express_1.default.json());
// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Define another route
app.get('/greet', (req, res) => {
    res.send('Hello from Express and TypeScript!');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
