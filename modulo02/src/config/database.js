module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'gobarber',
  username: 'postgres',
  password: 'docker',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
