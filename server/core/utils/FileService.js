const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

class FileService{
  
  saveFile(file){
    try{
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve('server/static', fileName);
      file.mv(filePath);
      return fileName;
    }catch(e){
      console.log(e);
    }
  };

  removeFile({image}){
    try{
      fs.rm('server/static/' + image, (e) => {
        return e;
      });
    }catch(e){
      console.log(e);
    }
  }
}

module.exports = new FileService();
