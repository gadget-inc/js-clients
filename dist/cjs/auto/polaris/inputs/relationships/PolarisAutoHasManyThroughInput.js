"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisAutoHasManyThroughInput = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const AutoInput_js_1 = require("../../../AutoInput.js");
const useHasManyThroughInputController_js_1 = require("../../../hooks/useHasManyThroughInputController.js");
exports.PolarisAutoHasManyThroughInput = (0, AutoInput_js_1.autoInput)((props) => {
    const { field } = props;
    const { fieldMetadata, relatedModelOptions } = (0, useHasManyThroughInputController_js_1.useHasManyThroughInputController)(props);
    console.log({ field, fieldMetadata, relatedModelOptions });
    return react_1.default.createElement("div", null, "hi");
});
//# sourceMappingURL=PolarisAutoHasManyThroughInput.js.map