const { execute } = require('@getvim/execute');
const {exec, spawn} = require('child_process');
const { writeFile,readFile } = require('fs');
const efe = require('../models/index');
const db = require('../models');
require('dotenv').config();
//const backup = require('../backups');
const username = process.env.DB_USER;
const database = process.env.DB_NAME;
const host = "localhost";
const port = process.env.DB_PORT;
const password = process.env.DB_PASSWORD;
const date = new Date();
 
//const currentDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.${date.getHours()}.${date.getMinutes()}`;
//const fileName = 'C:\Users\yo\Desktop\SQLITE3-DATABASES\bdpostres\pruebaDescarga'+currentDate+'.sql';

module.exports = {
  
  async fileJsonData(req, res) {
    let fileusers = await db.user.findAll({
        include: [ 'role' ]
    });
    let files = await db.role.findAll({ 
      include: ['user']
  });
  let obj = {getUsers:fileusers, getRoles:files}
  /*const file = writeFile(fileusers, 'utf-8');
  const json = JSON.parse(file)*/
  //Genera un archivo json con un array de la consulta

   /*
   //Genera un archivo json con un array de la consulta
   const file = writeFile('./filedata-getUsers.json', JSON.stringify(obj),'utf8',(err) => { 
      if (err) throw err; 
      console.log('The file has been saved!'); 
    }); */
  
  /*
  const jsonData = JSON.parse(JSON.stringify(fileusers));
  console.log("jsonData", jsonData);
  */    
  res.json(obj) 

  },

  async respaldar(req,res){
    
      //const ejecutar1 = exec(`C:/programFiles/postgreSQL/14/bin/pg_dump.exe`);
      const ejec = exec(`pg_dump -U ${username} ${database}>generasql.sql`);
        console.log("finito");
        res.json(ejec);
  },
  async newMetodo(req, res){

  },

  async exportar(req,res){
    
    const ejecutar1 = exec(`C:/programFiles/postgreSQL/14/bin/pg_dump.exe`);
    const ejec = exec(`pg_dump -U ${username} ${database}>bd2.sql`);
      console.log("finito");
      res.json(ejec);
},

}
/*
     async respaldo(req, res){
      const ejecutar1 = execute(`C:/programFiles/postgreSQL/14/pg_dump.exe --file`)
      const ejec = execute(`C:/Users/yo/Desktop/SQLITE3-DATABASES/bdpostres/backups2.sql --host ${host} --port ${port} --username ${username} --no-password --verbose --format=c --blobs ${database}`).then(database => {
        console.log("Finito");
    }).catch(err => {
      res.statusCode.json(err);
    })
}
    

      //const ejecutar3 = exec('C:/Users/yo/Desktop/SQLITE~1/BDPOST~1/backupDelServerRaiwail.sql" PGPASSWORD=MAjdS8GFWnOyp4ROThfS psql -h containers-us-west-94.railway.app -U postgres -p 7024 -d railway --verbose --format=c --blobs "prueba"');
      //const ejecutar = exec(pg_dump --dbname=postgresql:// ${username }:${ password }@${ host }:${ port }/${ database } -f> decarga.sql`);
      //const ejecutar = exec(`pg_dump postgresql://postgres:MAjdS8GFWnOyp4ROThfS@containers-us-west-94.railway.app:7024/railway -f> backup.sql`);
      //exec(`pg_dump -U ${username} -d ${database} -f`).then(respaldar => {
        //res.json(ejecutar1);
      //}).catch(err => {
        //console.log(err);
    //}
    //)
    //}
        //res.json({ msg: "El usuario ha sido eliminado "});
      //execute(`pg_dump -U ${username} -d ${database} -f ${fileName} -F t`,).then(async () => {
          //console.log("Finito");
       //   res.json(respaldo," create succesfull");
      
    

module.exports = {

async downlandDatabase(req, res) {
     
   // const ws = 
     //try {
     
        function backup() {
            execute(`pg_dump -U ${username} -d ${database} -f ${fileName} -F t`,).then(async () => {
                console.log("export");
            }).catch(err => {
                console.log(err);
            })
        }
         
        backup();
    //pg_dump database.development.username, database.development.database> dbexport.pgsql


        //return res.json({database});

     //} catch (error) {
       // console.log(error);
        //return res.status(500).json({error: "error de descarga"});
     //}
}
}
*/