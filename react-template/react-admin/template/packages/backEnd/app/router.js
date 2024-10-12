/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.home.login);
  router.get('/getPermissions', controller.permissions.getPermissions);
  router.post('/updatePermissions', controller.permissions.updatePermissions);
};
