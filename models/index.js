import Sequelize from 'sequelize';

const sequelize = new Sequelize('express-graphql', 'root', 'd4ftstar', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {
  User: sequelize.import('./user')
};

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;
