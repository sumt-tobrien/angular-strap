/**
 * angular-strap
 * @version v2.3.12 - 2018-01-05
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
  'use strict';
  angular.module('mgcrea.ngStrap.alert').run([ '$templateCache', function($templateCache) {
    $templateCache.put('alert/alert.tpl.html', '<div role="alert" class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <span ng-if="title"><strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></span> <span ng-if="!title" ng-bind-html="content"></span></div>');
  } ]);
  angular.module('mgcrea.ngStrap.aside').run([ '$templateCache', function($templateCache) {
    $templateCache.put('aside/aside.tpl.html', '<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.datepicker').run([ '$templateCache', function($templateCache) {
    $templateCache.put('datepicker/datepicker.tpl.html', '<div ng-attr-id="{{dropdownId || undefined}}" class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px" aria-hidden="false" aria-controls="date" ng-focus-out="$onFocusOut($event)"><table ng-attr-aria-activedescendant="{{selectedDayId || undefined}}" role="grid" style="table-layout: fixed; height: 100%; width: 100%" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'"><thead role="presentation"><tr class="text-center" role="row"><th scope="col" role="columnheader"><button tabindex="0" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)" ng-blur="$blurred($event)" ng-attr-aria-label="{{$previousLabel || undefined}}" ng-attr-title="{{$previousLabel || undefined}}"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="0" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()" ng-blur="$blurred($event)" ng-attr-title="{{$modeLabel || undefined }}"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th scope="col" role="columnheader"><button tabindex="0" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)" ng-blur="$blurred($event)" ng-attr-aria-label="{{$nextLabel || undefined}}" ng-attr-title="{{$nextLabel || undefined}}"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-if="showLabels" ng-bind-html="labels"></tr></thead><tbody role="presentation"><tr ng-attr-id="{{id || undefined}}_row_{{i}}" role="row" ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td ng-attr-id="{{el.id || undefined}}" role="gridcell" class="text-center" ng-class="{ \'disabled\': el.disabled }" ng-repeat="(j, el) in row" ng-attr-headers="{{id || undefined}}_row_{{i}}" aria-selected="{{el.selected}}" ng-attr-aria-label="{{el.screenReaderLabel || undefined}}" ng-attr-title="{{el.screenReaderLabel || undefined}}" tabindex="{{focusOnOpen && (el.selected || (!selectedDayId && el.isToday) || (selectedDayId == el.id && el.isToday) || (el.isNext && !selected)) ? \'0\' : \'-1\'}}" focus-element="keyboard && focusOnOpen && el.focused" data-value="{{el.value}}" ng-disabled="el.disabled" ng-focus="$focused(el)" ng-click="$select(el.date, el.disabled)" ng-keydown="$onKeyDown($event, el)"><span class="btn btn-default" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}"><span ng-class="{\'text-muted\': el.muted || el.disabled}" ng-bind="el.label"></span></span></td></tr></tbody><tfoot role="presentation"><tr role="row"><td colspan="{{ rows[0].length }}"><div class="btn-group btn-group-justified" role="group"><div class="btn-group" role="group" ng-if="$hasToday"><button type="button" class="btn btn-default today" ng-click="$setToday()" ng-disabled="isTodayDisabled" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}"><strong style="text-transform: capitalize">Today</strong></button></div><div class="btn-group" role="group" ng-if="$hasClear"><button type="button" class="btn btn-default clear" ng-click="$clear()" ng-attr-tabindex="{{focusOnOpen ? \'0\' : \'-1\'}}"><strong style="text-transform: capitalize">Clear</strong></button></div></div></td></tr></tfoot></table></div>');
  } ]);
  angular.module('mgcrea.ngStrap.dropdown').run([ '$templateCache', function($templateCache) {
    $templateCache.put('dropdown/dropdown.tpl.html', '<ul tabindex="-1" class="dropdown-menu" role="menu" ng-show="content && content.length"><li role="presentation" ng-class="{divider: item.divider, active: item.active}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>');
  } ]);
  angular.module('mgcrea.ngStrap.modal').run([ '$templateCache', function($templateCache) {
    $templateCache.put('modal/modal.tpl.html', '<div class="modal" tabindex="0" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" role="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h1 class="modal-title" ng-bind="title"></h1></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()" aria-label="Close">Close</button></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.popover').run([ '$templateCache', function($templateCache) {
    $templateCache.put('popover/popover.tpl.html', '<div class="popover" tabindex="-1"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.select').run([ '$templateCache', function($templateCache) {
    $templateCache.put('select/select.tpl.html', '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="menu"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label" role="menuitem"></span></a></li></ul>');
  } ]);
  angular.module('mgcrea.ngStrap.tab').run([ '$templateCache', function($templateCache) {
    $templateCache.put('tab/tab.tpl.html', '<ul class="nav" ng-class="$navClass" role="tablist"><li role="tab" ng-repeat="$pane in $panes track by $index" ng-class="[ $isActive($pane, $index) ? $activeClass : \'\', $pane.disabled ? \'disabled\' : \'\' ]" ng-attr-aria-disabled="{{$pane.disabled || undefined}}" ng-attr-id="{{$pane.$describedBy || undefined}}" ng-attr-aria-selected="{{$isActive($pane, $index)}}" ng-attr-aria-controls="{{$pane.id || undefined}}" data-toggle="tab" data-index="{{ $index }}" ng-click="$onClick($event, $pane, $index)" ng-keydown="$onKeyPress($event, $pane.name || $index, $index)" tabindex="{{$isActive($pane, $index) ? 0 : -1}}" ng-attr-aria-hidden="{{$pane.disabled || undefined}}" ng-attr-aria-labeledby="{{$pane.$labeledBy || undefined}}"><a ng-attr-id="{{$pane.$labeledBy || undefined}}" role="presentation" ng-bind-html="$pane.title"></a></li></ul><div ng-transclude class="tab-content"></div>');
  } ]);
  angular.module('mgcrea.ngStrap.timepicker').run([ '$templateCache', function($templateCache) {
    $templateCache.put('timepicker/timepicker.tpl.html', '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto" aria-hidden="true"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 2)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showSeconds"><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td ng-if="showSeconds" class="text-center"><button tabindex="-1" ng-if="row[2].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[2].selected}" ng-click="$select(row[2].date, 2)" ng-disabled="row[2].disabled"><span ng-class="{\'text-muted\': row[2].muted}" ng-bind="row[2].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 2)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>');
  } ]);
  angular.module('mgcrea.ngStrap.tooltip').run([ '$templateCache', function($templateCache) {
    $templateCache.put('tooltip/tooltip.tpl.html', '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.typeahead').run([ '$templateCache', function($templateCache) {
    $templateCache.put('typeahead/typeahead.tpl.html', '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="listbox" ng-attr-aria-hidden="{{!$isVisible()}}"><li role="option" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}" ng-attr-aria-selected="{{$isActive($index)}}" ng-attr-id="{{::$generateResultId($index)}}"><a role="presentation" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>');
  } ]);
})(window, document);