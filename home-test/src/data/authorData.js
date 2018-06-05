let authorData = {
  langs: [
    {
      name: '中文',
      id: 'chinese',
      checked: '',
      sections: [
        {
          id: 'index',
          checked: '',
          name: '首页',
          icon: 'icon-index',
          author: '陆先生',
          avatar: '../static/images/avator.png',
          career: '前端新人，请多指教',
          social: [
            {
              name: 'Github',
              icon: 'icon-github',
              url: 'https://github.com/xianshenglu'
            },
            {
              name: '博客[中]',
              icon: 'icon-blog',
              url: 'https://www.cnblogs.com/xianshenglu/'
            },
            {
              name: 'SegmentFault',
              icon: 'icon-segmentfault',
              url: 'https://segmentfault.com/u/xianshenglu'
            },
            {
              name: 'Stackoverflow',
              icon: 'icon-stackoverflow',
              url: 'https://stackoverflow.com/users/9147721/xianshenglu'
            }
          ]
        },
        {
          id: 'introduction',
          checked: '',
          name: '个人介绍',
          icon: 'icon-me',
          value: '前端工程师，熟悉 javascript，目前正在找工作',
          data: {
            info: [
              {
                name: '出生年月:',
                value: '1993.08',
                url: '#',
                icon: 'icon-birth'
              },
              {
                name: '毕业院校:',
                value: '南京审计大学·金融系',
                url: 'http://www.nau.edu.cn',
                icon: 'icon-university'
              },
              {
                name: '最近工作:',
                value: '东方财富网·数据编辑',
                url: 'http://www.nau.edu.cn',
                icon: 'icon-eastmoney'
              }
            ],
            contact: [
              {
                name: '邮箱:',
                value: 'xianshenglu@foxmail.com',
                icon: 'icon-mail'
              },
              {
                name: '手机:',
                value: '+86 18221508921',
                icon: 'icon-phone'
              },
              {
                name: '城市:',
                value: '上海',
                icon: 'icon-location'
              }
            ]
          }
        },
        {
          id: 'skill',
          checked: '',
          name: '技能',
          icon: 'icon-skill',
          data: {
            native: [
              {
                name: 'HTML',
                icon: 'icon-html',
                percent: 70,
                color: '#e54d25'
              },
              {
                name: 'CSS',
                icon: 'icon-css',
                percent: 60,
                color: '#0070ba'
              },
              {
                name: 'JS',
                icon: 'icon-js',
                percent: 60,
                color: '#fac052'
              },
              { name: 'SQL', icon: 'icon-sql', percent: 40, color: ' #31c5b3' }
            ],
            frame: [
              {
                name: 'jQuery',
                icon: 'icon-jquery1',
                percent: 30,
                color: '#0769ad'
              },
              {
                name: 'Vue',
                icon: 'icon-vue1',
                percent: 25,
                color: '#41b883'
              },
              {
                name: 'Webpack',
                icon: 'icon-webpack',
                percent: 20,
                color: '#1c78c0'
              }
            ]
          }
        },
        {
          id: 'project',
          checked: '',
          name: '项目',
          icon: 'icon-project',
          data: [
            {
              img: '../static/images/avator.png',
              description: `个人主页，没错，就是你现在看到的这个，使用 Vue.js 制作。
                项目亮点：
                1. 支持页内中英文语言切换，不损失原来的浏览位置；
                2. 滚动条和语言偏好记忆；
                3. 作者的数据存放在单独的文件，方便开源。`,
              source: {
                name: '源码',
                url: ''
              },
              preview: {
                name: '预览',
                url: ''
              }
            },
            {
              img:
                'https://github.com/xianshenglu/vue/raw/master/demo/img-displayed/todo-mvc.gif',
              description:
                'Vue.js 的 ToDoList，用户数据保存在 localStroage 里面。',
              source: {
                name: '源码',
                url:
                  'https://github.com/xianshenglu/vue/tree/master/demo/todo-mvc'
              },
              preview: {
                name: '预览',
                url:
                  'https://xianshenglu.github.io/vue/demo/todo-mvc/dist/index.html'
              }
            },
            {
              img: '../static/images/blog.gif',
              description:
                '基于 Hexo 和 Github Pages 搭建的个人博客[英]，采用 next 主题，相比常见的搭建方式，这个项目搭建在 blog 仓库下，并没有搭建在 xianshenglu.github.io 这个默认的仓库。',
              source: {
                name: '源码',
                url: 'https://github.com/xianshenglu/blog'
              },
              preview: {
                name: '预览',
                url: 'https://xianshenglu.github.io/blog/'
              }
            }
          ],
          more: {
            name: '更多请戳我的 Github',
            url: 'https://github.com/xianshenglu',
            icon: 'icon-github'
          }
        }
      ]
    },
    {
      name: 'English',
      id: 'english',
      checked: '',
      sections: [
        {
          id: 'index',
          checked: '',
          name: '首页',
          icon: '../static/images/avator.png',
          author: 'Xiansheng Lu',
          avatar: '../static/images/avator.png',
          career: 'Freshmen in FrontEnd, Nice to Meet You!',
          social: [
            {
              name: 'Github',
              icon: '../static/images/avator.png',
              url: 'https://github.com/xianshenglu'
            },
            {
              name: 'Stackoverflow',
              icon: '../static/images/avator.png',
              url: 'https://stackoverflow.com/users/9147721/xianshenglu'
            },
            {
              name: 'SegmentFault',
              icon: '../static/images/avator.png',
              url: 'https://segmentfault.com/u/xianshenglu'
            },
            {
              name: '博客[中]',
              icon: '../static/images/avator.png',
              url: 'https://www.cnblogs.com/xianshenglu/'
            }
          ]
        },
        {
          id: 'introduction',
          checked: '',
          name: '个人介绍',
          icon: '../static/images/avator.png',
          value: '前端工程师，熟悉 javascript，目前正在找工作',
          data: {
            info: [
              {
                name: '出生年月:',
                value: '1993.08',
                url: '#',
                icon: '../static/images/avator.png'
              },
              {
                name: '毕业院校:',
                value: '南京审计大学·金融系',
                url: 'http://www.nau.edu.cn',
                icon: '../static/images/avator.png'
              },
              {
                name: '最近工作:',
                value: '东方财富网·数据编辑',
                url: 'http://www.nau.edu.cn',
                icon: '../static/images/avator.png'
              }
            ],
            contact: [
              {
                name: '邮箱:',
                value: 'xianshenglu@foxmail.com',
                icon: '../static/images/avator.png'
              },
              {
                name: '手机:',
                value: '+86 18221508921',
                icon: '../static/images/avator.png'
              },
              {
                name: '城市:',
                value: '上海',
                icon: '../static/images/avator.png'
              }
            ]
          }
        },
        {
          id: 'skill',
          checked: '',
          name: '技能',
          icon: '../static/images/avator.png',
          data: {
            native: [
              {
                name: 'html',
                icon: '../static/images/avator.png',
                percent: 70
              },
              {
                name: 'css',
                icon: '../static/images/avator.png',
                percent: 70
              },
              {
                name: 'javascript',
                icon: '../static/images/avator.png',
                percent: 70
              },
              { name: 'sql', icon: '../static/images/avator.png', percent: 50 }
            ],
            frame: [
              {
                name: 'jquery',
                icon: '../static/images/avator.png',
                percent: 30
              },
              {
                name: 'vue',
                icon: '../static/images/avator.png',
                percent: 30
              },
              {
                name: 'webpack',
                icon: '../static/images/avator.png',
                percent: 20
              }
            ]
          }
        },
        {
          id: 'project',
          checked: '',
          name: '项目',
          icon: '../static/images/avator.png',
          data: [
            {
              img: '../static/images/avator.png',
              description:
                '这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。',
              source: {
                name: '源码1',
                url: ''
              },
              preview: {
                name: '预览',
                url: ''
              }
            },
            {
              img: '../static/images/avator.png',
              description:
                '这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。',
              source: {
                name: '源码2',
                url: ''
              },
              preview: {
                name: '预览',
                url: ''
              }
            },
            {
              img: '../static/images/avator.png',
              description:
                '这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。这是我的自我介绍，一段文字，你看看吧。',
              source: {
                name: '源码1',
                url: ''
              },
              preview: {
                name: '预览',
                url: ''
              }
            }
          ],
          more: {
            name: '更多请戳我的 Github',
            icon: '../static/images/avator.png'
          }
        }
      ]
    }
  ]
}

export default authorData
