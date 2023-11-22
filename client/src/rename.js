// import { readdir, rename } from 'fs';

// const processFilename = (filename, specificWord) => {
//   // Check if the filename contains the specific word
//   if (filename.includes(specificWord)) {
//     // Remove the specific word from the filename
//     const modifiedFilename = filename.replace(specificWord, '');

//     return modifiedFilename;
//   } else {
//     // If the specific word is not present, return the original filename
//     return filename;
//   }
// };

// // Replace this with the actual path to your directory
// const directoryPath = './assets/icons';

// // Replace this with the specific word you want to remove
// const specificWord = '-doctr-x-webflow-template';

// // Read the list of filenames in the directory
// readdir(directoryPath, (err, filenames) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // Process and rename each file in the directory
//   filenames.forEach((filename) => {
//     const oldFilePath = `${directoryPath}/${filename}`;
//     const newFilename = processFilename(filename, specificWord);
//     const newFilePath = `${directoryPath}/${newFilename}`;

//     // Check if the filename was modified
//     if (newFilename !== filename) {
//       // Rename the file
//       rename(oldFilePath, newFilePath, (renameErr) => {
//         if (renameErr) {
//           console.error(`Error renaming ${filename}: ${renameErr}`);
//         } else {
//           console.log(`Renamed: ${filename} to ${newFilename}`);
//         }
//       });
//     }
//   });
// });


import {readdir, rename} from 'fs';

const removePrefixBeforeUnderscore = (filename) => {
  // Find the index of the first underscore in the filename
  const underscoreIndex = filename.indexOf('_');

  // Check if there is an underscore in the filename
  if (underscoreIndex !== -1) {
    // Take the part after the first underscore
    const modifiedFilename = filename.slice(underscoreIndex + 1);
    return modifiedFilename;
  } else {
    // If there is no underscore, return the original filename
    return filename;
  }
};

// Replace this with the actual path to your directory
const directoryPath = './assets/icons';

// Read the list of filenames in the directory
readdir(directoryPath, (err, filenames) => {
  if (err) {
    console.error(err);
    return;
  }

  // Process and rename each file in the directory
  filenames.forEach((filename) => {
    const oldFilePath = `${directoryPath}/${filename}`;
    const newFilename = removePrefixBeforeUnderscore(filename);
    const newFilePath = `${directoryPath}/${newFilename}`;

    // Rename the file
    rename(oldFilePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error(`Error renaming ${filename}: ${renameErr}`);
      } else {
        console.log(`Renamed: ${filename} to ${newFilename}`);
      }
    });
  });
});
