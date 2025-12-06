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
          const res1 = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
          const res2 = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
          const res3 = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)

          const all =await Promise.all([res1,res2,res3])
          const imgs = all.map(el=>el.body.message)
          console.log(imgs)
          await writeFileData('dog-images.txt',imgs.join('\n'))

    }
    catch(err){
        console.log(err)
       // throw err; // rethrowing the error to be caught by the outer catch block

    }
  
}
dogPic()