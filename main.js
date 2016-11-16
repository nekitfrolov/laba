$(function(){
   window.App ={
        Models: {},
		Collections: {},
		Views:{} 
	};
		
	window.template=function(id){
	    return _.template($('#'+id).html() );
		
	};
	App.Models.Task = Backbone.Model.extend({});
	App.Views.Task = Backbone.View.extend({
		tagName: 'li',
		render: function (){
			this.$el.html( this.model.get('title') );
			return this;
		}
	});
	
	App.Collections.Task = Backbone.Collection.extend({
		Model:App.Models.Task
	});
	
	//var task = new App.Models.Task({
	//	title: 'Сходить в магазин',
	//	priority: 4
	
	App.Views.Tasks = Backbone.View.extend({
		tagName: 'ul',
		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		},
		addOne: function(task) {
			var taskView = new App.Views.Task({ model: task});
			this.$el.append(taskView.render().el);
		}
	})
	
	var tasksCollection = new App.Collections.Task([
	{
		title: 'Сходить в магазин',
		priority: 4
	},
	{
		title: 'Купить молоко',
		priority: 3
	},
	{
		title: 'Принести домой',
		priority: 5
	},
	
  ]);
  
  var tasksView = new App.Views.Tasks({ collection: tasksCollection });
  
  tasksView.render();
  $('body').html(tasksView.el);
});
