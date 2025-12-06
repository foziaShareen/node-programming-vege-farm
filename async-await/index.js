const fs = require('fs');
const superagent = require('superagent');


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


const dogPic =async()=>{
    try{
          const data = await readFileData('dog.txt') 
          console.log(data);
          const res =await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
          console.log(res.body.message)
          await writeFileData('dog-images.txt',res.body.message)

    }
    catch(err){
        console.log(err)
        throw err; // rethrowing the error to be caught by the outer catch block

    }
  
}
dogPic()