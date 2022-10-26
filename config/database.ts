export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'cosbiome.online'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'finanzapp_backend'),
      user: env('DATABASE_USERNAME', 'penguin'),
      password: env('DATABASE_PASSWORD', 'Ac03901582.'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
