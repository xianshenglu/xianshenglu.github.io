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
                url: 'http://www.eastmoney.com/',
                icon: 'icon-eastmoney'
              }
            ],
            contact: [
              {
                name: '邮箱:',
                value: 'xianshenglu@foxmail.com',
                icon: 'icon-email'
              },
              {
                name: '手机:',
                value: '+86 18221508921',
                icon: 'icon-phone'
              },
              {
                name: '地址:',
                value: '中国·上海',
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
                percent: 70,
                color: '#e54d25'
              },
              {
                name: 'CSS',
                percent: 60,
                color: '#0070ba'
              },
              {
                name: 'JS',

                percent: 60,
                color: '#fac052'
              },
              { name: 'SQL', percent: 40, color: '#31c5b3' }
            ],
            frame: [
              {
                name: 'jQuery',
                icon: 'icon-jquery1',
                percent: 25,
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
              img: '../static/images/homepage.gif',
              description: `个人主页，没错，就是你现在看到的这个，使用 Vue.js 制作。
                亮点：
                1. 支持页内中英文语言切换，不损失原来的浏览位置；
                2. 滚动条和语言偏好记忆；`,
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
              description: `Vue.js 的 ToDoList，
                亮点：
                1. 用户数据保存在 localStroage 里面。`,
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
              description: `基于 Hexo 和 Next 主题搭建的个人博客[英]。
                亮点：
                1. 这个项目搭建在 blog 仓库下，并没有搭建在默认的 username.github.io 仓库。`,
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
          name: 'Index',
          icon: 'icon-index',
          author: 'Xiansheng Lu',
          avatar: '../static/images/avator.png',
          career: 'Freshmen in FrontEnd, Nice to Meet You!',
          social: [
            {
              name: 'Github',
              icon: 'icon-github',
              url: 'https://github.com/xianshenglu'
            },
            {
              name: 'Blog',
              icon: 'icon-blog',
              url: 'https://xianshenglu.github.io/blog/'
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
          name: 'Introduction',
          icon: 'icon-me',
          value:
            'Front-End Engineer, familiar with javascript, between jobs right now',
          data: {
            info: [
              {
                name: 'Date of Birth:',
                value: '1993.08',
                url: '#',
                icon: 'icon-birth'
              },
              {
                name: 'University:',
                value: 'NAU·Finance',
                url: 'http://www.nau.edu.cn',
                icon: 'icon-university'
              },
              {
                name: 'Last Job:',
                value: 'EM·Data Processor',
                url: 'http://www.eastmoney.com/',
                icon: 'icon-eastmoney'
              }
            ],
            contact: [
              {
                name: 'Email:',
                value: 'xianshenglu@foxmail.com',
                icon: 'icon-email'
              },
              {
                name: 'Phone:',
                value: '+86 18221508921',
                icon: 'icon-phone'
              },
              {
                name: 'Location:',
                value: 'Shanghai,China',
                icon: 'icon-location'
              }
            ]
          }
        },
        {
          id: 'skill',
          checked: '',
          name: 'Skill',
          icon: 'icon-skill',
          data: {
            native: [
              {
                name: 'HTML',
                percent: 70,
                color: '#e54d25'
              },
              {
                name: 'CSS',
                percent: 60,
                color: '#0070ba'
              },
              {
                name: 'JS',
                percent: 60,
                color: '#fac052'
              },
              { name: 'SQL', percent: 40, color: '#31c5b3' }
            ],
            frame: [
              {
                name: 'jQuery',
                percent: 25,
                color: '#0769ad'
              },
              {
                name: 'Vue',
                percent: 25,
                color: '#41b883'
              },
              {
                name: 'Webpack',
                percent: 20,
                color: '#1c78c0'
              }
            ]
          }
        },
        {
          id: 'project',
          checked: '',
          name: 'Project',
          icon: 'icon-project',
          data: [
            {
              img: '../static/images/homepage.gif',
              description: `Homepage built by Vue.js.
                Highlights：
                1. Support language switch without losing position in one page.
                2. Scrollbar and language memory.`,
              source: {
                name: 'Source',
                url: ''
              },
              preview: {
                name: 'Preview',
                url: ''
              }
            },
            {
              img:
                'https://github.com/xianshenglu/vue/raw/master/demo/img-displayed/todo-mvc.gif',
              description: `ToDoList built by Vue.js.
              Highlights：
              1. User's data was saved in localStroage.`,

              source: {
                name: 'Source',
                url:
                  'https://github.com/xianshenglu/vue/tree/master/demo/todo-mvc'
              },
              preview: {
                name: 'Preview',
                url:
                  'https://xianshenglu.github.io/vue/demo/todo-mvc/dist/index.html'
              }
            },
            {
              img: '../static/images/blog.gif',
              description: `Blog built by Hexo and Next.
              Highlights：
              1. Built under custom repository not the default repository like xianshenglu.github.io `,
              source: {
                name: 'Source',
                url: 'https://github.com/xianshenglu/blog'
              },
              preview: {
                name: 'Preview',
                url: 'https://xianshenglu.github.io/blog/'
              }
            }
          ],
          more: {
            name: 'More on Github',
            url: 'https://github.com/xianshenglu',
            icon: 'icon-github'
          }
        }
      ]
    }
  ]
}

export default authorData
