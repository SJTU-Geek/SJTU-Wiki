import { mergeConfig } from 'vite'
import llmstxt from 'vitepress-plugin-llms'
import genConfig from 'vitepress-theme-sjtu-wiki/config'
import { withThemeContext } from 'vitepress-theme-sjtu-wiki/utils'

const githubRepoLink = 'https://github.com/SJTU-Geek/SJTU-Wiki'

const commonSidebarOpts = {
  documentRootPath: 'docs',
  useTitleFromFrontmatter: true,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  includeRootIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  collapsed: false,
}

export default withThemeContext(
  {
    siteTitle: 'SJTU Wiki',
    SiteTitle: 'SJTU Wiki',
    siteDescription: '上海交通大学校园百科',
    siteLogo: '/sjtu-wiki-logo-notext.svg',
    baseUrl: '/SJTU-Wiki/',
    githubRepoLink,
    hostName: 'https://sjtu-geek.github.io/SJTU-Wiki',
    rootDir: 'docs',
    sitePattern: 'docs',
    org: 'SJTU-Geek',
    include: ['**/*.md'],
    enableFontSwitcher: false,
    suggestionBoxImageUrl: '/feekback-image@2x.png',
    suggestionBoxLinkUrl: 'https://ssc.sjtu.edu.cn/f/f787ebb3',
    topBannerHtml: "⚠️ SJTU Wiki 当前正处于试运行阶段，首轮测试运行预计持续到 2026 年 8 月 31 日，内容可能不准确或存在错误，请仔细甄别。",
    nav: [
      { text: '首页', link: '/' },
      { text: '快速导航', link: '/navigation' },
      { text: '贡献指南', link: '/contributing' },
      // { text: '思源极客协会', link: 'https://geek.sjtu.edu.cn' },
    ],
    sidebarOptions: [
      { ...commonSidebarOpts, scanStartPath: '', resolvePath: '/' },
    ],
    extraThemeConfig: {
      langMenuLabel: '多语言',
      returnToTopLabel: '回到顶部',
      sidebarMenuLabel: '菜单',
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',
      skipToContentLabel: '跳转到内容',
      notFound: {
        code: '404',
        title: '页面未找到',
        quote: '您访问的页面不存在',
        linkLabel: '返回首页',
        linkText: '点击这里返回主页',
      },
      search: {
        provider: 'local',
        options: {
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索',
            },
            modal: {
              resetButtonTitle: '清除查询条件',
              noResultsText: '没有找到结果',
              footer: {
                selectText: '选择',
                closeText: '关闭',
                navigateText: '导航到结果',
              },
            },
          },
        },
      },
    },
  },
  () => mergeConfig(genConfig(), {
    vite: {
      plugins: [
        ...llmstxt({
          domain: 'https://sjtu-geek.github.io',
        }),
      ],
    },
  }),
)
