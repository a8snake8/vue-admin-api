const router = require('koa-router')()
const userService = require('../config/mysqlConfig')

router.prefix('/admin')

//获取所有用户(GET请求)
router.get('/login', async (ctx, next) => {
  ctx.body = await userService.findUserData();
})

module.exports = router
