'use strict'

const Post = use('App/Models/Post')

class PostController {
    async create({request, response}) {
        //const data = request.all()
        const data = request.only(['title', 'content', 'user_id'])

        const post = await Post.create(data)
        return post
    }

    async myPosts({request, response, params}) {
        //const post = await Post.find(params.id)
        const post = await Post.findBy('id', params.id)
        if(!post) {
            response.status(404).send(`O post \'${params.id}\' não foi encontrado!`)
        }
        return post
    }

    async delete({request, response, params}) {
        const post = await Post.find(params.id)
        await post.delete()
        response.send(`O post \'${params.id}\' foi deletado com sucesso!`)
    }
}

module.exports = PostController
