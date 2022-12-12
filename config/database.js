// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      defaultConnection: "default",
      connection: {
        client: "postgres",
        connection: {
          host: env("DATABASE_HOST", "localhost"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "myProject"),
          user: env("DATABASE_USERNAME", "postgres"),
          password: env("DATABASE_PASSWORD", "event"),
          schema: env("DATABASE_SCHEMA", "public")
        },
      }
    });
