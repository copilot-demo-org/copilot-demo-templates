const express = require('express');
const fs = require('fs');
const app = express();

// Set the view engine to Pug
app.set('view engine', 'pug');

// Set the directory where your Pug templates are located
app.set('views', './views');

// add rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5 // limit each IP to 5 requests per windowMs
});

// apply to all requests
app.use(limiter);

function getAvatarLink(username) {
  return `https://avatars.githubusercontent.com/${username}`;
}

function pickRandomThree(arr) {
  const shuffledArr = arr.sort(() => Math.random() - 0.5);
  const randomMembers = shuffledArr.slice(0, 3);
  return randomMembers.map(member => ({
    name: member.name,
    avatar: getAvatarLink(member.github_login)
  }));
}

app.get('/', (req, res) => {
  fs.readFile('members.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading file');
    }

    const d = JSON.parse(data);
    // convert an object to an array
    const members = Object.values(d);

    // pick 3 random members
    const randomMembers = pickRandomThree(members);

    // pick one random member from the three cal this variable who
    const who = randomMembers[Math.floor(Math.random() * randomMembers.length)];

    res.render('index', { who, randomMembers });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});