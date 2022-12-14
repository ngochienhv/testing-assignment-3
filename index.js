import dotenv from 'dotenv';
import path from 'path';
import addToPath from 'add-to-path';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getCurrentDirectoryBase, directoryExists } from './lib/files.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
path.basename(path.dirname(fs.realpathSync(__filename)));



addToPath([__dirname + '\\drivers']);

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Testing Assignment 3', { horizontalLayout: 'full' })
  )
);

export const browser = process.env.MOCHA_BROWSER || 'chrome';

export const base_url = process.env.TEST_BASE_URL || 'https://google.com';
