const secret = require('./secret/keys')

module.exports = {
  "development": {
    "username": "postgres",
    "password": secret.DATABASE_PASSWORD,
    "database": "rpg_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "rpg_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "rpg_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
