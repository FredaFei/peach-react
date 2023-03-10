import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/v1/me',
    method: 'get',
    response: () => {
      return {
        resource: {
          id: 1,
          email: '1@qq.com'
        }
      }
    },
  },
  {
    url: '/api/v1/items',
    method: 'get',
    timeout: 1000,
    response: () => {
      return {
        resources: [],
        pager: {
          page: 1,
          per_page: 25,
          count: 100
        }
      }
    },
  },
] as MockMethod[]
