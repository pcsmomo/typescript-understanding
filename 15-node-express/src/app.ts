import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

import todoRoutes from './routes/todos';

const app = express();

// body parser Middleware : parse body of all incoming requests to json type
app.use(express.json());

app.use(morgan('combined'));

app.use('/todos', todoRoutes);

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
