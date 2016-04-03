module.exports = function ($routeProvider) {
  $routeProvider.when('/topic', {
    controller: 'topicListController',
    templateUrl: '../templates/list.html'
  })
}
