class Post {
  constructor(title, link, category, img) {
    this.title = title;
    this.link = link;
    this.category = category;
    this.img = img;
  }}

const app = new Vue({
  el: '#app',
  data: {
    search: '',
    postList: [
    new Post(
    'Vue.js',
    'https://es.vuejs.org/v2/guide/index.html',
    'Code',
    'img/search-icon/vue.js.png'),      

    new Post(
    'React.js',
    'https://es.reactjs.org/docs/getting-started.html',
    'Code',
    'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'),

    new Post(
    'Angular.js',
    'https://angular.io/docs',
    'Code',
    'https://angularjs.org/img/ng-logo.png'),

    new Post(
    'Ember.js',
    'https://guides.emberjs.com/release/',
    'Code',
    'img/search-icon/ember.png'),

    new Post(
    'Meteor.js',
    'https://guide.meteor.com/',
    'Code',
    'img/search-icon/meteor.png'),      
    
    new Post(
    'Materialize',
    'https://materializecss.com/getting-started.html',
    'CSS',
    'https://materializecss.com/images/favicon/apple-touch-icon-152x152.png'),

    new Post(
    'Aurelia',
    'http://aurelia.io/docs',
    'Code',
    'https://cdn.auth0.com/blog/aurelia-logo.png'),

    new Post(
    'Node.js',
    'https://nodejs.org/es/docs/',
    'Code',
    'https://code-maven.com/img/node.png'),
    
    new Post(
    'CodeSandbox',
    'https://codesandbox.io/s/new',
    'Code Editor',
    'img/search-icon/codesandbox.png'),
      
    new Post(
    'Codepen',
    'https://codepen.io/pen/',
    'Code Editor',
    'https://i0.wp.com/blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Small.png?resize=125%2C125&ssl=1'),      

    new Post(
    'Pusher',
    'https://pusher.com/docs',
    'Code',
    'https://avatars1.githubusercontent.com/u/739550?v=3&s=400'),

    new Post(
    'Bootstrap',
    'https://getbootstrap.com/docs/4.5/getting-started/introduction/',
    'CSS',
    'https://getbootstrap.com/docs/4.5/assets/img/favicons/apple-touch-icon.png'),

    new Post(
    'w3schools',
    'https://www.w3schools.com/',
    'Code',
    'https://lh3.googleusercontent.com/TMzz-6Kdjp4E0Z4hxETNvgBolVDkUBIjzczjWvfzKaV_k8cZbCv9jmCen2nhxwMKDw=s128'),

    new Post(
    'Feathers.js',
    'https://docs.feathersjs.com/',
    'Code',
    'https://cdn.worldvectorlogo.com/logos/feathersjs.svg')] },

  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    } } });