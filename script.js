var app = angular.module('app', []);

app.factory('recognizeService', function($http) {
    return {
        recognize: function(imgLink) {
            // Link tới RestAPI đã viết ở phần 
            var url = 'https://wt-huyhoang8a5-gmail-com-0.run.webtask.io/idol-recognize&#39;;
            return $http({
                method: 'POST',
                url,
                data: {
                    url: imgLink
                }
            });
        }
    }
});