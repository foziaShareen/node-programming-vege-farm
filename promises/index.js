const superagent = require('superagent');

const fs = require('fs');

const readFileData = file=>{
    return new Promise((resolve, reject)=>{
     fs.readFile(file,(err,data)=>{
        if(err) reject('I could not find that file 😢');
        resolve(data);

     })
            
        });
}

const writeFileData=(file, data)=>{
    return new Promise((resolve, reject)=>{
     fs.writeFile(file,data,err=>{
        if(err) reject('Could not save the file');
        resolve('success');
     })
            
        });
}
readFileData('our-dog.txt').then(data=>{
   return superagent
  .get(`https://dog.ceo/api/breed/${data}/images/random`)
})
  .then(res=>{
      console.log(res.body.message)
      return writeFileData('dog-image.txt', res.body.message);

  })
 
  .then(()=>{
      console.log('Random dog image saved to file');
  })
  .catch(err=>{
      console.log(err);
  })
// every return for example  .get(`https://dog.ceo/api/breed/${data}/images/random`)return a promise so whatever
//we receive , chain to .then()
 