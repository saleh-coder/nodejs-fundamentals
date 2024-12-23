import kit from 'terminal-kit';
const term = kit.terminal;

export async function menu(items) {
  let options = {
    style: term.inverse,
    selectedStyle: term.white.bgCyan,
  };

  const selectedOption = await term.singleLineMenu(items, options).promise;
  return selectedOption.selectedText;
}

export async function userSelectionMenu(items) {
  let options = {
    style: term.inverse,
    selectedStyle: term.white.bgGray,
  };
  const selected = await term.singleColumnMenu(items, options).promise;
  const id = selected.selectedText.split('->')[1].trim();
  return id;
}

export async function read(statement) {
  term(`${statement}\n\n`);
  const wasRead = await term.inputField().promise;
  return wasRead;
}

export function greenText(text) {
  term.green(`\n\n${text}`);
}

export function blueText(text) {
  term.blue(`\n\n${text}`);
}

export function ends() {
  process.exit();
}
