'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/user', 'UserController.create').validator('ValidacaoUsuario')
Route.get('/list-users', 'UserController.index')

Route.get('/myPosts/:id', 'PostController.myPosts')
Route.post('/post', 'PostController.create')
Route.delete('/post/:id', 'PostController.delete')

Route.post('/comment', 'CommentController.create')
Route.put('comment/:id', 'CommentController.update')