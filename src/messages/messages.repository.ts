import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const message = JSON.parse(contents);

    return message[id];
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const message = JSON.parse(contents);

    return message;
  }
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const message = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    message[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(message));

    return message[id];
  }
}
