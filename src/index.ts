// THIS FILE TO BE DELETED BECAUSE WE ARE USING NESTJS INSTEAD

import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app: Express = express();
const prisma = new PrismaClient();

const HTTP_PORT: string = '8000';
// Start server
app.listen(HTTP_PORT, () => {
  console.log('Server running on port %PORT%'.replace('%PORT%', HTTP_PORT));
});

app.get('/', (req: Request, res: Response, next) => {
  res.json({ message: 'Ok' });
});

app.get('/api/users', async (req: Request, res: Response, next) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/api/users/:id', async (req: Request, res: Response, next) => {
  const { id }: { id?: string } = req.params;
  const users = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(users);
});

/*
app.get('/api/effects', (req: Request, res: Response, next) => {
  const sql = 'SELECT * from tblEffect';
  var params: never[] = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

app.get('/api/skills', (req: Request, res: Response, next) => {
  const sql =
    'SELECT tblSkill.effectId, name, slot, cond, value, stat FROM tblSkill INNER JOIN tblEffect ON tblSkill.effectId = tblEffect.id; ORDER BY tblSkill.name DESC';
  var params: never[] = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows,
    });
  });
});

app.use(function (req: Request, res: Response) {
  res.status(404);
});
*/
