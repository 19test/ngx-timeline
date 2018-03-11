"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_timeline_directive_1 = require("./ngx-timeline.directive");
var NgxTimelineComponent = (function () {
    function NgxTimelineComponent() {
        this.dateFormat = 'yyyy-MM-dd';
    }
    NgxTimelineComponent.prototype.ngOnInit = function () {
    };
    NgxTimelineComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ngx-timeline',
                    templateUrl: './ngx-timeline.component.html',
                    styleUrls: ['./ngx-timeline.component.scss']
                },] },
    ];
    /** @nocollapse */
    NgxTimelineComponent.ctorParameters = function () { return []; };
    NgxTimelineComponent.propDecorators = {
        "events": [{ type: core_1.Input },],
        "timelineClass": [{ type: core_1.Input },],
        "timelineStyle": [{ type: core_1.Input },],
        "dateFormat": [{ type: core_1.Input },],
        "dateTemplate": [{ type: core_1.ContentChild, args: [ngx_timeline_directive_1.TimelineDate,] },],
        "headerTemplate": [{ type: core_1.ContentChild, args: [ngx_timeline_directive_1.TimelineHeader,] },],
        "bodyTemplate": [{ type: core_1.ContentChild, args: [ngx_timeline_directive_1.TimelineBody,] },],
        "footerTemplate": [{ type: core_1.ContentChild, args: [ngx_timeline_directive_1.TimelineFooter,] },],
    };
    return NgxTimelineComponent;
}());
exports.NgxTimelineComponent = NgxTimelineComponent;
//# sourceMappingURL=ngx-timeline.component.js.map