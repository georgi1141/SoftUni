function refactor(sentance) {
  let indexStart = sentance.lastIndexOf("\\");
  let indexEnd = sentance.lastIndexOf(".");

  console.log("File name: " + sentance.slice(indexStart + 1, indexEnd));
  console.log("File extension: " + sentance.slice(indexEnd + 1));
}

refactor("C:\\Projects\\Data-Structures\\LinkedList.cs");

// 3. Extract File
// Write a function that receives a single string - the path to a file(the '\' character is escaped)

// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).
