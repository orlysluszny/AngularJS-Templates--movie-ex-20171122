app.factory("convert", function() {
    
      /*var timeUnits = ["hr", "min"];
      var time = {
        hr: 1,
        min: 60
      };
    
      function convertTime(time, inUnit, outUnit) {
        return Math.round(distance * kmRates[outUnit] / kmRates[inUnit]);
      }
    
      function convertKMToMile (km) {
        return Math.round(km * 0.621371192);
      }
      
      return {
        distance: convertDistance
      }
    });*/

    var timeConvert = function(n){
        var min = n%60
        var hr = (n - min) / 60
         return hr + ":" + min;
       }


       return {
        time: timeConvert
      }

    
    });
/*
    app.factory("convert", function() {
        
          var distanceUnits = ["KM", "METER", "MILE", "FEET"];
          var kmRates = {
            KM: 1,
            METER: 1000,
            MILE: 0.621371192,
            FEET: 3280.8399
          };
        
          function convertDistance(distance, inUnit, outUnit) {
            return Math.round(distance * kmRates[outUnit] / kmRates[inUnit]);
          }
        
          function convertKMToMile (km) {
            return Math.round(km * 0.621371192);
          }
          
          return {
            /*km2Mile: convertKMToMile*/
            /*distance: convertDistance
          }
        });
        */