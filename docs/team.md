---
title: 团队
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'


const svg = {
  gitee:'<svg t="1688198073080" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1524" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1525"></path></svg>'

  
}






const members = [
  {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'https://foruda.gitee.com/avatar/1677152875659480553/8865979_hikari666_1656301991.png!avatar200',
    name: '渔火Arcadia',
    title: '提供云崽相关内容索引库',
    links: [
      { icon: 'github', link: 'https://github.com/yhArcadia/Yunzai-Bot-plugins-index'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index'
    },
 
     
        ],
  },
  {
    avatar: 'https://foruda.gitee.com/avatar/1676971263206987923/1485053_le-niao_1637417114.png!avatar200',
    name: 'Le-niao',
    title: '提供原版 Yunzai',
    links: [
      { icon: 'github', link: 'https://github.com/Le-niao/Yunzai-Bot'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/Le-niao/Yunzai-Bot'
    },
 
     
        ],
  },
  {
    avatar: 'https://foruda.gitee.com/avatar/1677029104898914034/4964418_yoimiya-kokomi_1647934929.png!avatar200',
    name: 'Kokomi',
    title: '喵版 Yunzai，及喵喵插件 (miao-plugin)',
    links: [
      { icon: 'github', link: 'https://github.com/yoimiya-kokomi/Miao-Yunzai'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/yoimiya-kokomi/Miao-Yunzai'
    },
 
     
        ],
  },
   {
    avatar: 'https://foruda.gitee.com/avatar/1677190833188346129/9890079_timerainstarsky_1655887701.png!avatar200',
    name: '时雨🌌星空',
    title: 'TRSS-Yunzai,TRSS一键部署脚本',
    links: [
      { icon: 'github', link: 'https://github.com/TimeRainStarSky/Yunzai'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/TimeRainStarSky/Yunzai'
    },
 
     
        ],
  },
  {
    avatar: 'https://foruda.gitee.com/avatar/1677208489500495040/10396541_nwflower_1657119167.png!avatar200',
    name: '听语惊花',
    title: 'Yunzai-Bot-lite，轻量版，无原神功能',
    links: [
      { icon: 'github', link: 'https://github.com/Nwflower/yunzai-bot-lite'},
     { icon: {
        svg:svg.gitee
        },
      link: 'https://gitee.com/Nwflower/yunzai-bot-lite'
    },
 
     
        ],
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  }, {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
    {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
   {
    avatar: 'Contributors/海琴烟.jpg',
    name: '旧忆 残梦',
    title: '文档书写者',
    links: [
      { icon: 'github', link: 'https://github.com/Oldmemorie'},
       { icon: {
        svg:svg.gitee
        },
       link: 'https://gitee.com/ningmengchongshui',
       ariaLabel: 'gitee'
      },
     ],
      sponsor:'https://afdian.net/a/oldmemorie'
  },
  
  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Yunzai bot 及其贡献者
    </template>
    <template #lead>
     此页面尚未完成，施工中
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>



## <font color=black size=6  >联系方式</font>
  
  

- [ QQ:3293811490](https://qm.qq.com/cgi-bin/qm/qr?k=stVxYiM6baJII6OwS9rWJcvs_loagz9G&noverify=0&personal_qrcode_source=3)

- [ GitHub ](https://github.com/Oldmemorie)

- [Gitte ](https://gitee.com/Oldmemories)

