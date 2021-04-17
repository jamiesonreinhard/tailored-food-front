const client = require('contentful').createClient({
  space: '5pokscvah6z6',
  accessToken: 'DrZEwbV56oPqrPKM9Pz5mPrbz6FFrMPsjNIzS0sjdbU'
})

const getBlogPosts = () => client.getEntries().then(response => response.items)

const getSinglePost = slug =>
  client
    .getEntries({
      'fields.slug': slug,
      content_type: 'blogPost'
    })
    .then(response => response.items)

export { getBlogPosts, getSinglePost }