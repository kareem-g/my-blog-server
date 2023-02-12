export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', process.env.SUPABASE_PG_HOST),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'postgres'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', process.env.SUPABASE_PG_PASSWORD),
      ssl: env.bool(true),
    },
  },
});
