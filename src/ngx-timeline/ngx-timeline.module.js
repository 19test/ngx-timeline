"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_timeline_component_1 = require("./ngx-timeline.component");
var ngx_timeline_directive_1 = require("./ngx-timeline.directive");
var NgxTimelineModule = (function () {
    function NgxTimelineModule() {
    }
    NgxTimelineModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        ngx_timeline_component_1.NgxTimelineComponent,
                        ngx_timeline_directive_1.TimelineDate,
                        ngx_timeline_directive_1.TimelineHeader,
                        ngx_timeline_directive_1.TimelineBody,
                        ngx_timeline_directive_1.TimelineFooter
                    ],
                    exports: [
                        ngx_timeline_component_1.NgxTimelineComponent,
                        ngx_timeline_directive_1.TimelineDate,
                        ngx_timeline_directive_1.TimelineHeader,
                        ngx_timeline_directive_1.TimelineBody,
                        ngx_timeline_directive_1.TimelineFooter
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxTimelineModule.ctorParameters = function () { return []; };
    return NgxTimelineModule;
}());
exports.NgxTimelineModule = NgxTimelineModule;
//# sourceMappingURL=ngx-timeline.module.js.map