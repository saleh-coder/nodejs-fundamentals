import pensador from 'pensador-scrap';
import fs from 'fs';

const author = 'Alan Turing';
const { error, success } = await pensador.search({
  query: 'Alan Turing',
  limit: 12,
});

// console.log(error);
// console.log(success);
let thoughtToSave;
try {
  const thoughts = success.thought;
  const randomIndex = Math.floor(Math.random() * thoughts.length);
  const selectedThoughts = thoughts[randomIndex].content;
  // console.log(selectedThoughts);
  thoughtToSave = `${author}'s thought -> ${selectedThoughts}\n`;
  // console.log(thoughtToSave);
} catch (e) {
  thoughtToSave = `${author} no thoughts`;
} finally {
  // fs.writeFileSync('phrases.txt', thoughtToSave, 'utf8');
  fs.appendFileSync('phrases.txt', thoughtToSave, 'utf8');
  const text = fs.readFileSync('phrases.txt', 'utf8');
  console.log(text);
}
