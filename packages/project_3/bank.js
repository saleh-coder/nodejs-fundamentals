import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

let manipulableData = loadValues();

export function loadValues() {
  const jsonData = fs.readFileSync('bank.json', 'utf8');
  return JSON.parse(jsonData);
}

export function persistValues() {
  const jsonData = JSON.stringify(manipulableData, null, 4);
  fs.writeFileSync('bank.json', jsonData, 'utf8');
}

export function generateNextId() {
  const maxId = manipulableData.reduce((max, obj) => Math.max(max, obj.id), -1);
  return maxId + 1;
}

export function save(name, id) {
  const index = manipulableData.findIndex((obj) => obj.id === id);
  if (index >= 0) {
    manipulableData[index].name = name;
  } else {
    const uniqueId = uuidv4();
    manipulableData.push({ name, id: uniqueId });
  }
}

export function deleted(id) {
  manipulableData = manipulableData.filter(
    (data) => String(data.id) !== String(id)
  );
  persistValues();
}

export function getData() {
  return manipulableData.map((data) => `${data.name} -> ${data.id}`);
}
