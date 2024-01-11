import { IGroup } from '../../../types'

export const MyFavorites: IGroup = {
  icon: 'icon-rengongzhinengdanao',
  name: '我的常用',
  en_name: 'My Websites',
  order: 1,
  children: [
    {
      icon: '',
      name: '秀米',
      en_name: 'xiumi',
      description:
        '微信公众号编辑',
      en_description:
        "wechat public editor",

      site_url: 'https://xiumi.us/#/studio/papers',
      order: 2,
      tags: [
        'Wechat'
      ]
    }
  ]
}
