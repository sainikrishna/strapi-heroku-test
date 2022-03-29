module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b802c13b9c8b28208f75fe0cfd445d0'),
  },
});
