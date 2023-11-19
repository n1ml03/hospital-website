import { existsSync, mkdirSync, readdir, rename } from 'fs';
import { join } from 'path';

// Replace this with the actual path to your directory
const sourceDirectory = './assets/images';

// Create directories if they do not exist
const iconsDirectory = join(sourceDirectory, 'icons');
const imagesDirectory = join(sourceDirectory, 'images');

if (!existsSync(iconsDirectory)) {
  mkdirSync(iconsDirectory);
}

if (!existsSync(imagesDirectory)) {
  mkdirSync(imagesDirectory);
}

// Read the list of filenames in the source directory
readdir(sourceDirectory, (err, filenames) => {
  if (err) {
    console.error(err);
    return;
  }

  // Process each file in the source directory
  filenames.forEach((filename) => {
    const sourceFilePath = join(sourceDirectory, filename);

    // Check if the file is a .svg or .jpg file
    if (filename.endsWith('.svg')) {
      // Move .svg files to the icons directory
      const destinationFilePath = join(iconsDirectory, filename);
      rename(sourceFilePath, destinationFilePath, (renameErr) => {
        if (renameErr) {
          console.error(`Error moving ${filename} to icons directory: ${renameErr}`);
        } else {
          console.log(`Moved ${filename} to icons directory`);
        }
      });
    } else if (filename.endsWith('.jpg')) {
      // Move .jpg files to the images directory
      const destinationFilePath = join(imagesDirectory, filename);
      rename(sourceFilePath, destinationFilePath, (renameErr) => {
        if (renameErr) {
          console.error(`Error moving ${filename} to images directory: ${renameErr}`);
        } else {
          console.log(`Moved ${filename} to images directory`);
        }
      });
    }
  });
});
