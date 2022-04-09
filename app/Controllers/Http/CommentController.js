'use strict'

const Comment = use('App/Models/Comment')

class CommentController {
    async create({request, response}) {
        const dados = request.all()
        const comentario = await Comment.create(dados)

        return comentario
    }

    async update({request, response, params}) {
        const comentario = await Comment.find(params.id)
        const dados = request.all()
        
        comentario.content = dados.content
        await comentario.save()

        return comentario
    }
}

module.exports = CommentController
