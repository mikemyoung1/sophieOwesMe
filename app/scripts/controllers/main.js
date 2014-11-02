'use strict';

angular.module('sophieYoungPortfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.slides = [
    {image:'../images/NEW-PORTFOLIO-6.jpg', link: 'http://vimeo.com/109289980', text: 'View Here'},
    {image:'../images/NEW-PORTFOLIO-7.jpg'},
    {image:'../images/NEW-PORTFOLIO-72.jpg' },
    {image:'../images/NEW-PORTFOLIO-73.jpg' },
    {image:'../images/NEW-PORTFOLIO-74.jpg' },
    {image:'../images/NEW-PORTFOLIO-75.jpg' },
    {image:'../images/NEW-PORTFOLIO-76.jpg' },
    {image:'../images/NEW-PORTFOLIO-78.jpg' },
    {image:'../images/NEW-PORTFOLIO-79.jpg' },
    {image:'../images/NEW-PORTFOLIO-710.jpg' },
    {image:'../images/NEW-PORTFOLIO-711.jpg' },
    {image:'../images/NEW-PORTFOLIO-712.jpg' },
    {image:'../images/NEW-PORTFOLIO-713.jpg' },
    {image:'../images/NEW-PORTFOLIO-714.jpg' },
    {image:'../images/NEW-PORTFOLIO-715.jpg' },
    {image:'../images/NEW-PORTFOLIO-716.jpg' },
    {image:'../images/NEW-PORTFOLIO-718.jpg', link: 'https://www.youtube.com/watch?v=VMuXQTKxgVc&feature=youtu.be', text: 'View Here'},
    {image:'../images/NEW-PORTFOLIO-77.jpg', link: 'http://www.youtube.com/watch?v=tQbmc2jMXDM', text: 'View Here'}
    ];

  });
