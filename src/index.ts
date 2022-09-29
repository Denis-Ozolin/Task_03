const express = require('express');

const notesRouter = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/notes', notesRouter);
app.use((req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
  res.status(404).json({ message: 'Not Found' });
});
app.use((err: { status?: 500; message?: "Server error"; }, req: any, res: { status: (arg0: any) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }, next: any) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json(message);
});

app.listen(port, () => {
  console.log(`Server running. Use port: ${port}`);
});
