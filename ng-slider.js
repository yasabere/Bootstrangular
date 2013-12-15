var ngSlider = angular.module('ngSlider', []);

ngSlider.directive('ngSlider', function(){
  return {
    restrict:'E',
    transclude:true,
    scope:{
      'min':'=min',
      'max':'=max',
      'step':'=step',
      'orientation':'=orientation',
      'value':'=value',
      'selection':'=selection',
      'tooltip':'=tooltip',
      'handle':'=handle',
      'formater':'=formater',
      'model':'&model'
    },
    link:function(scope, element, attrs, tabsCtrl) {
      var options = {
        min:scope.min,
        max:scope.max,
        step:scope.step,
        orientation:scope.orientation,
        value:scope.value,
        selection:scope.selection,
        tooltip:scope.tooltip,
        handle:scope.handle,
        formater:scope.formater,
        model:scope.model,
      }
      $(element[0].childNodes[0]).slider(options);
    },
    template:'<input type="text" class="slider" >'

  };
});

/*
Written by Yaw Asabere
*/
