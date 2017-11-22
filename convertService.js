app.factory("convert", function() {    
    var timeConvert = function(n){
        var min = n%60
        var hr = (n - min) / 60
         return hr + ":" + min;
       }
       return {
        time: timeConvert
      }
    });