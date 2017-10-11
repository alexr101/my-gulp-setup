function setClassWhenAtTop($window, $timeout) {
    var $win = angular.element($window);
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var topClass = attrs.setClassWhenAtTop,
                topPadding = parseInt(attrs.paddingWhenAtTop, 10),
                allParents = element.parents(),
                $parent = angular.element(allParents[0]),
                $grandParent = angular.element(allParents[1]), //skip ui-view
                windowHeight = $win.height(),
                grandParentPadding =  parseInt($grandParent.css('padding-bottom'), 10),
                elementWidth,
                grandParentHeight,
                offsetTop;

                $timeout(function(){ 
                  grandParentHeight = $grandParent.height();
                }, 100);

            // Do an IS MOBILE check!

            $win.on("scroll resize", function () {
                // dynamic page layout so have to recalculate every time;
                // take offset of parent because after the element gets fixed
                // it now has a different offset from the top
                    elementWidth = $parent.css('width'),
                    offsetTop = $parent.offset().top - topPadding;
                var eOffsetToWindow = offsetTop - $win.scrollTop();
                    offsetBottom = topPadding + grandParentHeight - grandParentPadding - $parent.height();
 
                if ($win.scrollTop() >= offsetTop && $win.scrollTop() <= offsetBottom) {
                    element.addClass(topClass);
                    element.width(elementWidth);
                    element.css('padding-top', topPadding + 'px');
                    $parent.height(element.height());
                } else if ($win.scrollTop() > offsetBottom) {
                    element.removeClass(topClass);
                    element.css('padding-top', (offsetBottom - grandParentPadding) + 'px');
                } else {
                    element.removeClass(topClass);
                    $parent.css('height', null);
                    element.css('padding-top', '');
                }
            });
        }
    };
}

angular.module('app')
.directive('setClassWhenAtTop', ['$window','$timeout', setClassWhenAtTop]);