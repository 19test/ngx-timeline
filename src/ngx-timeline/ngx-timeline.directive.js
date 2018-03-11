"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * 自定义模板
 */
// 自定义时间
var TimelineDate = (function () {
    function TimelineDate(templateRef) {
        this.templateRef = templateRef;
    }
    TimelineDate.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ng-template[timelineDate]' },] },
    ];
    /** @nocollapse */
    TimelineDate.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return TimelineDate;
}());
exports.TimelineDate = TimelineDate;
// 自定义页眉
var TimelineHeader = (function () {
    function TimelineHeader(templateRef) {
        this.templateRef = templateRef;
    }
    TimelineHeader.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ng-template[timelineHeader]' },] },
    ];
    /** @nocollapse */
    TimelineHeader.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return TimelineHeader;
}());
exports.TimelineHeader = TimelineHeader;
// 自定义内容
var TimelineBody = (function () {
    function TimelineBody(templateRef) {
        this.templateRef = templateRef;
    }
    TimelineBody.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ng-template[timelineBody]' },] },
    ];
    /** @nocollapse */
    TimelineBody.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return TimelineBody;
}());
exports.TimelineBody = TimelineBody;
// 自定义页脚
var TimelineFooter = (function () {
    function TimelineFooter(templateRef) {
        this.templateRef = templateRef;
    }
    TimelineFooter.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ng-template[timelineFooter]' },] },
    ];
    /** @nocollapse */
    TimelineFooter.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return TimelineFooter;
}());
exports.TimelineFooter = TimelineFooter;
//# sourceMappingURL=ngx-timeline.directive.js.map