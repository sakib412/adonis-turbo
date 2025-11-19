/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

import { greet, hello } from '@repo/shared'
import { isBoolean, isString } from '@repo/shared/es-toolkit'

router.get('/', async () => {
  return {
    hello:
      hello +
      ' from AdonisJS!' +
      ' IsBoolean: ' +
      isBoolean(true) +
      ' IsString: ' +
      isString('test'),
    greet: greet('AdonisJS User'),
  }
})
