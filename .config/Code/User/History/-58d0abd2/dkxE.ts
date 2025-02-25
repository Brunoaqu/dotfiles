import Redis from 'ioredis';
import express from 'express';

const redis = new Redis(6379, 'cache');
const app = express();

let visits = 0;
const requests: any = [];

app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(express.json({ limit: '200mb' }));
app.use(async (req, res, next) => {
  visits += 1;
  next();
});

app.get('/visits', async (req, res) => {
  res.send({ msg: `Number of visits is ${visits}` });
});

app.post('/', async (req, res) => {
  const { data } = req.body;
  requests.push(data);
  res.send({ msg: 'Data saved' });
});

app.get('/', async (req, res) => {
  res.send(requests);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
