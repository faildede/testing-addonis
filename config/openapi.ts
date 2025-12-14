import path from 'node:path'
import url from 'node:url'

export default {
  path: path.dirname(url.fileURLToPath(import.meta.url)) + '/../',
  title: 'My AdonisJS API',
  version: '1.0.0',
  tagIndex: 1,
  ignore: ['/api-docs', '/api-docs/json', '/api-docs/scalar'],
  snakeCase: false,
  common: {
    parameters: {},
    headers: {},
  },
}

