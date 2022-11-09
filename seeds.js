//const umzug = new Umzug({ /* ... options ... */ });
const { Umzug, memoryStorage} = require('umzug');
//const conect = require('/models/index');
//const sequelize = new Sequelize({ dialect: 'postgres', storage: './db.postgres' });
const umzug = new Umzug({
    migrations: { glob:  ' ./app/database/seeders/*' },
    //context: sequelize.getQueryInterface(),
    storage: memoryStorage(),
    logger: console,
  });
  
  (async () => {
    await umzug.up();
  })();
module.exports = umzug;
if (require.main === module) {
  umzug.runAsCLI()
}