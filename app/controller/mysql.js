'use strict';

const Controller = require('egg').Controller;

class MysqlController extends Controller {
  * index() {
    yield this.ctx.render('mysql/index.tpl');
  }

  // 新增 同理构建基于router对应的控制器
  * add() {
    const ctx = this.ctx;
    const data = ctx.params.data;
    const result = yield ctx.service.mysql.add(data);
    this.ctx.body = result;
  }

  * del() {
    const data = this.ctx.params.data;
    const result = yield this.service.mysql.del(data);
    this.ctx.body = result;
  }

  // 查询
  * reach() {
    const data = this.ctx.params.data;
    const result = yield this.service.mysql.reach(data);
    this.ctx.body = result;
  }

  * update() {
    const data = this.ctx.params.data;
    const result = yield this.service.mysql.update(data);
    this.ctx.body = result;
  }

}

module.exports = MysqlController;
