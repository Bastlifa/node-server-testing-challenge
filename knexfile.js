// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/spells.db3'
    },
    useNullAsDefault: true,
    migrations:
    {
      directory: './database/migrations'
    },
    
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3'
    },
    useNullAsDefault: true,
    migrations:
    {
      directory: './database/migrations'
    },
  },
};
