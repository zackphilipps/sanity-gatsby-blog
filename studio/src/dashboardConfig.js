export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2c30c4193c304f74744fe1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cebv41wx',
                  apiId: 'a5f8a8af-276f-4a97-85b7-b6b29b83f600'
                },
                {
                  buildHookId: '5f2c30c4bd70bb6429ceaac1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fkpo3heu',
                  apiId: '5536dec5-91b9-415a-a243-02338d44636a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zackphilipps/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fkpo3heu.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
