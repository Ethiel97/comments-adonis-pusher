const Event = use('Event')
const Env = use('Env')
const Pusher = use('Pusher')

let pusher = new Pusher({
  appId: Env.get('PUSHER_APP_ID'),
  key: Env.get('PUSHER_APP_KEY'),
  secret: Env.get('PUSHER_APP_SECRET'),
  cluster: Env.get('PUSHER_APP_CLUSTER'),
  encrypted: false
})

//fire new event
Event.when('new::comment', async (comment) => {
  pusher.trigger('comment-channel', 'new-comment', {
    comment
  })
})
