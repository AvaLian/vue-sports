/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 *
 */
let iclienturl;
let ifeng3gurl;
let routerMode;
if (process.env.NODE_ENV == 'development') {
  iclienturl = 'iclient/'
  ifeng3gurl = 'ifeng3g/'
  routerMode = 'hash'
}else{
  iclienturl = 'https://api.iclient.ifeng.com/';
  ifeng3gurl = 'https://api.3g.ifeng.com/';
  routerMode = 'hash';
}

export {
	iclienturl,
  ifeng3gurl,
	routerMode,
}