import chalk from 'chalk';
import server from 'server';
import { DateTime } from 'luxon';

const { get } = server.router;

function displayHour(city, hour) {
  console.log(chalk.bgBlue(`In ${city} it's ${hour}`));
}

server({ port: 8080 }, [
  get('/', (ctx) => 'Hello World!'),
  get('/roma', () => {
    const H = DateTime.local({ zone: 'Europe/Rome' }).toFormat('HH:mm:ss');
    displayHour('Rome', H);
    return H;
  }),
  get('/luanda', () => {
    const H = DateTime.local({ zone: 'Africa/Luanda' }).toFormat('HH:mm:ss');
    displayHour('Luanda', H);
    return H;
  }),
  get('/seoul', () => {
    const H = DateTime.local({ zone: 'Asia/Seoul' }).toFormat('HH:mm:ss');
    displayHour('Seoul', H);
    return H;
  }),
  get('/cuiaba', () => {
    const H = DateTime.local({ zone: 'America/Cuiaba' }).toFormat('HH:mm:ss');
    displayHour('Cuiaba', H);
    return H;
  }),
]);

// const blue = (text) => console.log(chalk.blue(text));
// const warning = (text) => {
//   console.log(chalk.bgYellow.bold(text));
// };

// const error = (text) => {
//   console.log(chalk.bgRed.bold.italic(text));
// };

// blue(`I'm a text`);
// warning(`warning`);
// error(`error`);
