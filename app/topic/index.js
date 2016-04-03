angular.module('app', [])

.config(require('./config/routes.js'))

.controller('topicListController', require('./controllers/list.js'))
