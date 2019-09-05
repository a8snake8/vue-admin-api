const router = require('koa-router')()
const userService = require('../config/mysqlConfig')

router.prefix('/user')

//获取所有用户(GET请求)
router.post('/login', async (ctx, next) => {
  ctx.body = await userService.findUserData();
})

module.exports = router
