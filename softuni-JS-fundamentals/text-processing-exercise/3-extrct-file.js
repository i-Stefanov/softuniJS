function extractFiles(path) {
  let pathArr = path.split(`\\`);
  let fullFileName = pathArr.pop();
  let file = fullFileName.split(`.`);
  let extension = file.pop();
  let fileName = file.join(`.`);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractFiles("C:\\Projects\\Data-Structures\\template.bak.pptx");
