import { save, deleted, getData, persistValues } from './bank.js';
import {
  ends,
  menu,
  read,
  blueText,
  greenText,
  userSelectionMenu,
} from './interface.js';

const menuItems = [
  ' Add ',
  ' Edit ',
  ' Delete ',
  ' See all ',
  ' Persist ',
  ' Exit ',
];

let name, id;

while (1) {
  const selected = await menu(menuItems);
  switch (selected.trim().toLocaleLowerCase()) {
    case 'add':
      name = await read('Enter username: ');
      save(name);
      greenText('Done!');
      break;
    case 'edit':
      id = await userSelectionMenu(getData());
      name = await read('Updated name: ');
      save(name, id);
      greenText('Done!');
      break;
    case 'delete':
      id = await userSelectionMenu(getData());
      deleted(id);
      greenText('Done!');
      break;
    case 'see all':
      const data = getData();
      blueText(data);
      break;
    case 'persist':
      persistValues();
      greenText('Done!');
      break;
    case 'exit':
      ends();
      greenText('See you soon! ');
    default:
      console.log(`${selected.trim().toLocaleLowerCase()} is not valid`);
  }
}
