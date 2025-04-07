
# Discord Bot (TypeScript)

A simple and modular Discord bot built with TypeScript and discord.js v14.

## Features

- Slash and prefix command support
- Modular command and event system
- Easy to extend and maintain

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zxhenrii/botbase.git
cd botbase
```

### 2. Install dependencies

```bash
npm install
or
yarn install
or
pnpm install
```

### 3. Configure the environment

Create a `.env` file and add your bot token and prefix:

```
TOKEN=your-bot-token
PREFIX=!
```

### 4. Run the bot

For development (TypeScript directly):

```bash
npm run dev
```

For production (compiled JavaScript):

```bash
npm start
```
# FAQ
How do I add new commands?
Create a new file inside the src/commands directory that extends the Command base class. The bot will automatically load it on startup.

Can I use only slash or only prefix commands?
Yes! Each command can support either one or both types. You can modify the structure to disable one if needed.

The bot doesn't start. What should I check?
Make sure your .env file contains a valid TOKEN.

Run npm install to ensure all dependencies are installed.

If using production mode, run npm run build before starting with npm start.

How can I deploy the bot?
First, run npm run build to compile the TypeScript code. Then deploy the dist folder to your server or hosting platform that supports Node.js 18+.

FAQ - Discord Bot (TypeScript)

1. How do I add new commands?
   - Create a new file inside the `src/commands` directory that extends the `Command` base class.
   - The bot will automatically load it on startup.

2. Can I use only slash or only prefix commands?
   - Yes! Each command can support either one or both types.
   - You can also modify the structure to disable one type if desired.

3. The bot doesn't start. What should I check?
   - Ensure your `.env` file contains a valid TOKEN.
   - Run `npm install` to make sure all dependencies are installed.
   - If using production mode, run `npm run build` before `npm start`.

4. How can I deploy the bot?
   - Run `npm run build` to compile the TypeScript code.
   - Then deploy the `dist` folder to your server or hosting platform that supports Node.js 18+.


## License

MIT
