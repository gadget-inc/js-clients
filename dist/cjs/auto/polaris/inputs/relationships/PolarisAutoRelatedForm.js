"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoRelatedForm = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const useHasManyInputController_js_1 = require("../../../hooks/useHasManyInputController.js");
const PolarisAutoRelatedForm = (props) => {
    const { field } = props;
    const foof = (0, useHasManyInputController_js_1.useHasManyInputController)(props);
    console.log({ field, foof }, "foo foo fas");
    return react_1.default.createElement("div", null, "hi");
};
exports.PolarisAutoRelatedForm = PolarisAutoRelatedForm;
//# sourceMappingURL=PolarisAutoRelatedForm.js.map