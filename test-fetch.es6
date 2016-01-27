const timeout = 0;
function delay(milliseconds) {
  return new Promise((resolve) => (setTimeout(resolve, milliseconds)));
}

export default (url) => {
  if (/article/.test(url)) {
    const articles = {
      1: {
        metaTags: [
          {
            property: 'og:type',
            content: 'ARTICLE_LEAD',
          },
          {
            property: 'og:title',
            content: 'hello world',
          },
          {
            property: 'og:description',
            content: 'China will probably avoid a hard landing.',
          },
          {
            property: 'og:image',
            content: 'http://cms-worldin.economist.com/sites/default/files/Leaders-A-liberals-lament-3570x1680.jpg',
          },
          {
            property: 'og:image:width',
            content: '1190',
          },
          {
            property: 'og:image:height',
            content: '560',
          },
          {
            property: 'twi_article:published_time',
            content: '2015-11-02T14:00:00.625Z',
          },
          {
            property: 'twi_article:modified_time',
            content: '2016-01-20T17:09:49.756Z',
          },
          {
            property: 'ARTICLE_LEAD:section',
            content: 'Leaders',
          },
        ],
        slug: 'hello-world',
        title: 'hello world',
        flytitle: 'hello world flytitle',
        byline: 'hello world byline',
        bylineLocation: 'hello world byline location',
        publishDate: '2015-09-29T16:45:56.698Z',
        rubric: 'hello world rubric',
        content: [
          'this is paragraph 1',
          'this is paragraph 2',
          'this is paragraph 3',
        ],
        sectionName: 'politics',
        mainImage: {
          sources: [
            { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
            { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
            { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
            { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
          ],
          alt: 'this is the image description',
        },
      },
      2: {
        metaTags: [
          {
            property: 'og:type',
            content: 'ARTICLE_LEAD',
          },
          {
            property: 'og:title',
            content: 'hello world 2',
          },
          {
            property: 'og:description',
            content: 'China will probably avoid a hard landing.',
          },
          {
            property: 'og:image',
            content: 'http://cms-worldin.economist.com/sites/default/files/Leaders-A-liberals-lament-3570x1680.jpg',
          },
          {
            property: 'og:image:width',
            content: '1190',
          },
          {
            property: 'og:image:height',
            content: '560',
          },
          {
            property: 'twi_article:published_time',
            content: '2015-11-02T14:00:00.625Z',
          },
          {
            property: 'twi_article:modified_time',
            content: '2016-01-20T17:09:49.756Z',
          },
          {
            property: 'ARTICLE_LEAD:section',
            content: 'Leaders',
          },
        ],
        slug: 'hello-world-2',
        title: 'hello world 2',
        flytitle: 'hello world 2 flytitle',
        byline: 'hello world 2 byline',
        bylineLocation: 'hello world 2 byline location',
        publishDate: '2015-09-29T16:45:56.698Z',
        rubric: 'hello world 2 rubric',
        content: [
          'this is paragraph 1',
          'this is paragraph 2',
          'this is paragraph 3',
        ],
        sectionName: 'politics',
        mainImage: {
          sources: [
            { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
            { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
            { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
            { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
          ],
          alt: 'this is the image description',
        },
      },
    };
    return delay(timeout).then(() => ({
      json: () => (articles[Math.floor(Math.random() * 2) + 1]),
    }));
  } else if (/homepage/.test(url)) {
    return delay(timeout).then(() => ({
      json: () => ({
        articles: [
          {
            teaserId: '1',
            link: {
              href: '/article/hello-world',
            },
            title: 'hello world hero',
            flytitle: 'hello world flytitle',
            rubric: 'hello world rubric',
            content: [
              'this is paragraph 1',
              'this is paragraph 2',
              'this is paragraph 3',
            ],
            sectionName: 'politics',
            image: {
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
            },
          },
          {
            teaserId: '2',
            link: {
              href: '/article/hello-world',
            },
            title: 'hello world 1',
            flytitle: 'hello world flytitle',
            rubric: 'hello world rubric',
            content: [
              'this is paragraph 1',
              'this is paragraph 2',
              'this is paragraph 3',
            ],
            sectionName: 'politics',
            image: {
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
            },
          },
          {
            teaserId: '3',
            link: {
              href: '/article/hello-world',
            },
            title: 'hello world 2',
            flytitle: 'hello world flytitle',
            rubric: 'hello world rubric',
            content: [
              'this is paragraph 1',
              'this is paragraph 2',
              'this is paragraph 3',
            ],
            sectionName: 'politics',
            image: {
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
            },
          },
          {
            teaserId: '4',
            link: {
              href: '/article/hello-world',
            },
            title: 'hello world 3',
            flytitle: 'hello world flytitle',
            rubric: 'hello world rubric',
            content: [
              'this is paragraph 1',
              'this is paragraph 2',
              'this is paragraph 3',
            ],
            sectionName: 'politics',
            image: {
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
            },
          },
          {
            teaserId: '5',
            link: {
              href: '/article/hello-world',
            },
            title: 'hello world 4',
            flytitle: 'hello world flytitle',
            rubric: 'hello world rubric',
            content: [
              'this is paragraph 1',
              'this is paragraph 2',
              'this is paragraph 3',
            ],
            sectionName: 'politics',
            image: {
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
            },
          },
          {
            teaserId: '6',
            link: {
              href: '/article/hello-world',
            },
            title: 'hello world 5',
            flytitle: 'hello world flytitle',
            rubric: 'hello world rubric',
            content: [
              'this is paragraph 1',
              'this is paragraph 2',
              'this is paragraph 3',
            ],
            sectionName: 'politics',
            image: {
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
            },
          },
          {
            teaserId: '7',
            link: {
              href: '/article/hello-world',
            },
            title: 'hello world 6',
            flytitle: 'hello world flytitle',
            rubric: 'hello world rubric',
            content: [
              'this is paragraph 1',
              'this is paragraph 2',
              'this is paragraph 3',
            ],
            sectionName: 'politics',
            image: {
              sources: [
                { url: 'https://placehold.it/1792x1008', width: 896, height: 504, dppx: 2 },
                { url: 'https://placehold.it/896x504', width: 896, height: 504, dppx: 1 },
                { url: 'https://placehold.it/1536x864', width: 768, height: 432, dppx: 2 },
                { url: 'https://placehold.it/768x432', width: 768, height: 432, dppx: 1 },
              ],
              alt: 'this is the image description',
            },
          },
        ],
      }),
    }));
  } else if (/menu/.test(url)) {
    /* eslint-disable */
    return delay(timeout).then(() => ({
      json: () => ({
        navigationItems: [
          {
            'title': 'Leaders',
            'slug': 'leaders',
            'navigationItems': [
              {
                'title': 'Leaders',
                'slug': 'leaders',
                'navigationItems': [
                  {
                    'id': 1,
                    'title': 'Who should lead the world',
                    'text': '',
                    'slug': 'this-is-a-slug-slurp-slurp',
                  },
                  {
                    'id': 2,
                    'title': 'Into Africa',
                    'text': '',
                    'slug': 'this-is-a-slug-slurp-slurp',
                  },
                ]
              }
            ]
          },
          {
            'title': 'World',
            'slug': 'world',
            'navigationItems': [
              {
                'title': 'Britain',
                'slug': 'britain',
                'navigationItems': [
                  {
                    'id': 10,
                    'title': 'Coalition, the Sequel',
                    'text': 'Hung Parliament',
                    'slug': 'this-is-a-slug-slurp-slurp',
                  },
                  {
                    'id': 11,
                    'title': 'After the referendum',
                    'text': 'What happens next for Scotland',
                    'slug': 'this-is-a-slug-slurp-slurp',
                  },
                ]
              },
            ],
          },
        ],
      }),
    }));
  }

  return Promise.reject(new Error('404'));
};
