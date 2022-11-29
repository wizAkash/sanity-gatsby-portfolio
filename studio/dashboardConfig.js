export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6385a403218017355211a7b0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-55hmg1bg',
                  apiId: '9a95f012-9e04-43e5-b84e-1ee364ae2352'
                },
                {
                  buildHookId: '6385a40352896344b74dc0af',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hf43tfz9',
                  apiId: 'acf946c7-1e31-4516-b6e9-6492101e9b40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wizAkash/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hf43tfz9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
