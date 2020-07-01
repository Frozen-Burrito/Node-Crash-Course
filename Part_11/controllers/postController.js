const Post = require('../models/post');

const post_home = ( request, response ) => {
    Post.find().sort({ createdAt: -1 })
        .then( result => {
            context = {
                title: 'Home',
                blogs: result,
            }

            response.render('posts/index', context);
        })
        .catch( error => {
            console.log(error);
        })
}

const post_details = ( request, response ) => {
    const postId = request.params.id;
    
    Post.findById(postId)
        .then( result => {
            response.render('posts/details', { post: result, title: 'Post' });
        })
        .catch( error => {
            console.log(error);
        })
}

const post_create_form = ( request, response ) => {
    context = {
        title: 'Create',
    }
    
    response.render('posts/create', context);
}

const post_create_result = ( request, response ) => {
    const createdPost = new Post(request.body);

    createdPost.save()
        .then( () => {
            response.redirect('/posts');
        })
        .catch( error => {
            console.log(error);
        })
}

const post_delete = ( request, response ) => {
    const postId = request.params.id;

    Post.findByIdAndDelete(postId)
        .then(result => {
            response.json({ redirect: '/' });
        })
        .catch( error => {
            console.log(error);
        }) 
}

module.exports = {
    post_home,
    post_details,

    post_create_form,
    post_create_result,

    post_delete,
}