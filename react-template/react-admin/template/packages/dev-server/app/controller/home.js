const { Controller } = require('egg');
const { getToken } = require('../../module/jwt');


class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.body = {
      status: 1,
      code: '200',
      data: {
        name: 'admin',
      },
    };
  }
  async login() {
    const { ctx } = this;

    const { name = 'admin' } = ctx.request.body;
    const payload = { name }; // 加密的数据
    ctx.body = {
      status: 1,
      code: '200',
      data: { token: getToken(payload) },
    };
  }
}

module.exports = HomeController;
