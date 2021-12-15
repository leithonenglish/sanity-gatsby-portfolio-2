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
                  buildHookId: '61ba35e88b0c0f62db0f21a0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-wss43eyx',
                  apiId: '4b9e19f2-954f-40e7-9b54-c9bb27144720'
                },
                {
                  buildHookId: '61ba35e82b5e4c5e7b93ae74',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-hagunosr',
                  apiId: '6bcd75a4-22d6-427d-90dd-59bb82c75d34'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leithonenglish/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-hagunosr.netlify.app',
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
