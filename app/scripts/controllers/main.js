'use strict';

angular.module('sophieYoungPortfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.slides = [
    {image:'../images/NEW-PORTFOLIO-1.jpg'},
    {image:'../images/NEW-PORTFOLIO-2.jpg' },
    {image:'../images/NEW-PORTFOLIO-3.jpg' },
    {image:'../images/NEW-PORTFOLIO-4.jpg' },
    {image:'../images/NEW-PORTFOLIO-5.jpg' },
    {image:'../images/NEW-PORTFOLIO-6.jpg' },
    {image:'../images/NEW-PORTFOLIO-7.jpg', link: 'http://vimeo.com/109289980', text: 'View Here'},
    {image:'../images/NEW-PORTFOLIO-8.jpg', link: 'http://www.youtube.com/watch?v=tQbmc2jMXDM', text: 'View Here'},
    {image:'../images/NEW-PORTFOLIO-9.jpg', link: 'https://www.youtube.com/watch?v=VMuXQTKxgVc&feature=youtu.be', text: 'View Here'},
    {image:'../images/NEW-PORTFOLIO-10.jpg' },
    {image:'../images/NEW-PORTFOLIO-11.jpg' },
    {image:'../images/NEW-PORTFOLIO-12.jpg' },
    {image:'../images/NEW-PORTFOLIO-13.jpg' },
    {image:'../images/NEW-PORTFOLIO-14.jpg' },
    {image:'../images/NEW-PORTFOLIO-15.jpg' },
    {image:'../images/NEW-PORTFOLIO-16.jpg' },
    {image:'../images/NEW-PORTFOLIO-17.jpg' },
    {image:'../images/NEW-PORTFOLIO-18.jpg' }
    ];

    // $('#playButton').click(function () {
    //   $('#homeCarousel').carousel('play');
    // });

    // $('#pauseButton').click(function () {
    //   $('#homeCarousel').carousel('pause');
    // });

  });
