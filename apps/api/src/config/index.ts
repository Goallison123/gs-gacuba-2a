export const serverConfig = {
  port: Number(process.env.API_PORT || process.env.PORT || 3001),
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  schoolName: 'Groupe Scolaire Gacuba II A',
  schoolLocation: 'Rubavu District, Western Province, Rwanda',
  contactEmail: 'info@gsgacuba2a.rw',
  contactPhone: '+250 788 000 000',
};
