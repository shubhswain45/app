import express, { Request, Response } from 'express';

// Create an instance of the express application
const app = express()

// Define a port
const port = 3000;

// Middleware (optional)
app.use(express.json())

// Define a basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Define another route
app.get('/greet', (req: Request, res: Response) => {
  res.send('Hello from Express and TypeScript!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
