import express from 'express';
import { users } from './model';

const app = express();


app.get('/users', (req, res) => {
    const user = users[req.query.id as string];
    if (user) {
        return res.send(JSON.stringify(user));
    }
    res.sendStatus(404);
});

app.post('/users', (req, res) => {
    const id = req.query.id as string;
    const name = req.query.id as string;
    const email = req.query.email as string;
    if (id && name && email) {
        users[id] = {
            name,
            email
        };
        res.end();
        return;
    }
    res.sendStatus(400);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`start: http:localhost:${port}`);
});
