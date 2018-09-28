'use strict'
const Comment = use('App/Models/Comment')
const Event = use('Event')

class CommentController {

  async index({view}) {
    return view.render('comment')
  }

  async fetchComments({request, response}) {
    let comments = await Comment.all()
    return response.json(comments)
  }

  async store({request, response}) {
    try {
      let comment = await Comment.create(request.all())

      Event.fire('new::comment', comment.toJSON())
      return response.json("ok")
    } catch (e) {
      console.log(e)
    }

  }

}

module.exports = CommentController
