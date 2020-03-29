// wx8970d3f52f52fd9e test
// wx8d637592aba622cc dev
const appid = process.env.NODE_ENV === 'development' ? 'wx8970d3f52f52fd9e' : 'wxd4ecbd0d8c319f8e';
const api = process.env.NODE_ENV === 'development' ? '//newy.vipgz2.idcfengye.com/api' : '';

export default {
  title: '扫码抽大奖',
  subtitle: '企业价值观互动',
  weixin: {
    appid,
    authWithInfoUrl: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`,
    authUrl: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`,
  },
  api,
  rewardText: {
    big: '恭喜获得千元大奖/小确幸奖',
    small: '恭喜获得小确幸奖，详情请咨询人力资源部行政组谢小洁',
    null: '新年快乐，把福气送你带回家',
  },
  videos: [
    'https://www.baidu.com',
    'https://h5.ele.me',
  ],
}
