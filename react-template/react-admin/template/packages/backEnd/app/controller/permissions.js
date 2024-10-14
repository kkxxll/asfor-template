const { Controller } = require('egg');
const fs = require('fs');
const path = require('path');
const { getJWTPayload } = require('../../module/jwt');


class PermissionsController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.body = {
      status: 1,
      code: '200',
      data: {
        name: 'permissions',
      },
    };
  }
  async getPermissions() {
    const { ctx } = this;

    const payload = getJWTPayload(ctx.headers.authorization);

    const { name } = payload;
    const dataStr = await fs.promises.readFile(path.resolve('db/', `${name}_permissions.json`));
    ctx.response.body = {
      status: 1,
      code: '200',
      data: JSON.parse(dataStr.toString()),
    };
  }
  async updatePermissions() {
    const { ctx } = this;
    const payload = getJWTPayload(ctx.headers.authorization);
    const { name } = payload;
    const permissions = JSON.stringify(ctx.request.body); // 获取post提交的数据
    await fs.promises.writeFile(path.resolve('db/', `${name}_permissions.json`), permissions);

    ctx.response.body = {
      status: 1,
      code: '200',
      data: {},
    };
  }
}

module.exports = PermissionsController;
