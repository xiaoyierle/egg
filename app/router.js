'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/mysql', controller.mysql.index);
  router.get('/mysql/add/:data', controller.mysql.add);
  router.get('/mysql/del/:data', controller.mysql.del);
  router.get('/mysql/get/:data', controller.mysql.reach);
  router.get('/mysql/update/:data', controller.mysql.update);
};
