// 坐标转换工具
import { IGroup } from '../../../types'
export const CoordConvert: IGroup = {
    icon: '',
    name: '坐标转换',
    order: 2,
    en_name: 'Coord',
    children: [{
        icon: "https://epsg.io/static/img/espg-logo.png",
        name: "epsg.io",
        en_name: "epsg.io",
        description: "全球坐标系转换工具",
        en_description: "Global Coordinate System Conversion Tool",
        site_url: "https://epsg.io/",
        order: 2,
        tags: ["GIS", "Web", "Data"],
      },{
        site_url: 'https://www.lddgo.net/base/class?classID=8',
        name: '坐标转换',
        icon: 'https://www.lddgo.net/img/icon.png',
        description: '坐标/经纬度查询',
        en_name: 'Coord',
        en_description: 'Coord',
        order: 2,
        tags: ['GIS', 'Web', 'Data'],
      },{
        site_url: 'http://www.wmksj.com/tool/coordinate.html',
        name: '坐标系转换',
        icon: 'http://www.wmksj.com/resources/wmksj/images/favicon.ico',
        description: 'BD09、GCJ02、WGS84坐标系转换',
        en_name: '坐标系转换',
        en_description: 'BD09、GCJ02、WGS84坐标系转换   ',
        order: 2,
        tags: ['GIS', 'Web', 'Data'],

      }
    ]

}