"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAutocomponents = exports.GadgetShadcnTailwindSafelist = exports.useAutoButtonController = void 0;
const tslib_1 = require("tslib");
var useAutoButtonController_js_1 = require("../hooks/useAutoButtonController.js");
Object.defineProperty(exports, "useAutoButtonController", { enumerable: true, get: function () { return useAutoButtonController_js_1.useAutoButtonController; } });
var GadgetShadcnTailwindSafelist_js_1 = require("./GadgetShadcnTailwindSafelist.js");
Object.defineProperty(exports, "GadgetShadcnTailwindSafelist", { enumerable: true, get: function () { return GadgetShadcnTailwindSafelist_js_1.GadgetShadcnTailwindSafelist; } });
tslib_1.__exportStar(require("./elements.js"), exports);
const ShadcnAutoButton_js_1 = require("./ShadcnAutoButton.js");
const ShadcnAutoForm_js_1 = require("./ShadcnAutoForm.js");
const ShadcnAutoTable_js_1 = require("./ShadcnAutoTable.js");
/**
 * Build the Autocomponents library for your shadcn presentation components.
 * Autocomponents will render these given components, so they need to take the same base props that mainline shadcn components do.
 */
const makeAutocomponents = (elements) => {
    return {
        AutoButton: (0, ShadcnAutoButton_js_1.makeAutoButton)(elements),
        AutoTable: (0, ShadcnAutoTable_js_1.makeAutoTable)(elements),
        ...(0, ShadcnAutoForm_js_1.makeAutoForm)(elements),
    };
};
exports.makeAutocomponents = makeAutocomponents;
//# sourceMappingURL=index.js.map