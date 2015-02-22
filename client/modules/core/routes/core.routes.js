
Router.configure({
  layoutTemplate: 'CoreLayout'
});

Router.route('/', function() {
  this.render('Home');
});