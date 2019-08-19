import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import render from './render';

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());
app.use(cors());

app.get('/*', async (req: Request, res: Response) => {
  console.log('REQUEST');
  // const reactDom = render(mock);
  const reactDom = await render(req);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(reactDom);
});

app.listen(PORT, () => {
  console.log('Listening on ' + PORT);
});

