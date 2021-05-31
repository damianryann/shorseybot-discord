const token = process.env['TOKEN'];
const Discord = require('discord.js');
const client = new Discord.Client();
const runServer = require('./server');

client.login(token);

runServer();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

client.on('message', msg => {
  const fuckResponses = shuffle([
    `Fuck you ${msg.author} your mom keeps tryin' to slip a finger in my bum but I keep telling her that I only let <@!665683939410706442>'s mom do that ya fuckin loser`,
    `Fuck you, ${msg.author}, your mom molested me two Halloweens ago, shut the fuck up or I’m taking it to Twitter.`,
    `Fuck you ${msg.author}, I made your mom cum so hard that they made a canadian heritage moment out of it and Don Mckellar played my dick`,
    `Fuck you ${msg.author} your mom shot cum straight across the room and killed my siamese fighting fish, threw off the PH levels in my aquarium`,
    `Fuck you, ${msg.author}. Tell your mom to top up the cell phone she bought me so I can FaceTime her late night.`,
    `Fuck you ${msg.author}. Your breath's so bad it gave me an existential crisis it made me question my whole life`,
    `Fuck you ${msg.author}. Your mom loves butt play the way I love Haagen daz. Let's go get some fucking ice cream`,
    `Fuck you ${msg.author}, fight me see what happens`,
    `Fuck you ${msg.author}, tell your mom I drained the bank account she set up for me. Top it up so I can get some fucking KFC`
  ]);

  const responses = shuffle([
    ...shuffle(fuckResponses),
    `${msg.author} Give your balls a tug, titfucker`,
    `${msg.author} Your mom liked my Instagram post from two years ago from Puerto Vallarta. Tell her I'll put my swim trunks on anytime she likes`,
    `${msg.author} Shoulda heard your mom last night she sounded like a window closing on a Tonkinese cats tail like, mmmrrrooowwwwwowowwww`,
    `${msg.author} Shoulda heard your mom last night she sounded like my great aunt when I pop in for a surprise visit like, ooooooooooohhhhhhhhhhhhh`,
    `${msg.author} I made an oopsies, can you tell your mom to pick up <@!665683939410706442>'s mom on the way over to my place I double booked them by mistake you fuckin loser`,
    `${msg.author} I made your mom so wet Trudeau had to deploy a 24 hour national guard unit to stack sandbags around my bed`,
    `${msg.author} Your life's so sad I get a charity tax break just for hanging out with you. Let's get some fuckin' gyozas`,
    `${msg.author} Your life's so sad I get a charity tax break just for hanging out with you`,
    `${msg.author} Nice sweep. No sweep. Give your balls a tug`
  ]);

  const comingResponse = shuffle([
    `${msg.author} Heard the same thing, bud, from your mom seven times, and that’s not even my record, ya fucking loser.`
  ]);

  const whatHappens = shuffle([
    'Three things: I hit you, you hit the pavement, ambulance hits 60.',
    'Three things: I hit you, you hit the pavement, and I j*rk off on your driver’s side door handle.'
  ]);

  const response = msg.content.toLowerCase().includes('fuck you')
    ? fuckResponses[Math.floor(Math.random() * fuckResponses.length)]
    : responses[Math.floor(Math.random() * responses.length)];

  if (msg.author.bot) {
    return false;
  }

  if (msg.content.includes('@here') || msg.content.includes('@everyone')) {
    return false;
  }

  if (msg.mentions.has(client.user.id)) {
    msg.channel.send(response);
  }

  if (msg.content === `I'm coming`) {
    msg.channel.send(comingResponse);
  }

  if (msg.content === `What's going to happen?`) {
    msg.channel.send(whatHappens);
  }
});
