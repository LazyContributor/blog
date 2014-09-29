$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("nBtnE75OrxyImqFsZrQXfwRi8F9MkRaE9EfbWnND", "PFpa1bOFWM4L5L5iRUVekgfzSLVpIsKDp5eA2K73");

	var Blog = Parse.Object.extend("Blog"),
	    Blogs = Parse.Collection.extend({
	    	model: Blog
	    }),
    	BlogsView = Parse.View.extend({
	    	template: Handlebars.compile($('#blogs-tpl').html()),
	    	render: function(){
	    		var collection = { blog: this.collection.toJSON() };
	    		this.$el.html(this.template(collection));
	    	}
	    });

		blogs = new Blogs();

	    blogs.fetch({
	    	success: function(blogs) {
	    		var blogsView = new BlogsView({ collection: blogs });
	    		blogsView.render();
	    		$('.main-container').html(blogsView.el);
	    	},
	    	error: function(blogs, error) {
	    		console.log(error);
	    	}
	    });

    
 
});