"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoTable = exports.AutoForm = void 0;
__exportStar(require("./PolarisAutoForm.js"), exports);
var PolarisAutoForm_js_1 = require("./PolarisAutoForm.js");
Object.defineProperty(exports, "AutoForm", { enumerable: true, get: function () { return PolarisAutoForm_js_1.PolarisAutoForm; } });
var PolarisAutoTable_js_1 = require("./PolarisAutoTable.js");
Object.defineProperty(exports, "AutoTable", { enumerable: true, get: function () { return PolarisAutoTable_js_1.PolarisAutoTable; } });
//# sourceMappingURL=PolarisAdapter.js.map