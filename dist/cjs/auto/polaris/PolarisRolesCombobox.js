"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarisRolesCombobox = void 0;
const tslib_1 = require("tslib");
const polaris_1 = require("@shopify/polaris");
const react_1 = tslib_1.__importStar(require("react"));
const metadata_js_1 = require("../../metadata.js");
const PolarisFixedOptionsCombobox_js_1 = require("./PolarisFixedOptionsCombobox.js");
const PolarisRolesCombobox = (props) => {
    const { roles, fetching, error } = (0, metadata_js_1.useRolesMetadata)();
    const options = (0, react_1.useMemo)(() => {
        if (!roles)
            return [];
        return roles.map((role) => ({ value: role.name, label: role.name }));
    }, [roles]);
    if (error)
        throw error;
    if (fetching)
        return react_1.default.createElement(polaris_1.TextField, { label: props.label, autoComplete: "off", disabled: fetching });
    return react_1.default.createElement(PolarisFixedOptionsCombobox_js_1.PolarisFixedOptionsCombobox, { options: options, allowMultiple: true, ...props });
};
exports.PolarisRolesCombobox = PolarisRolesCombobox;
//# sourceMappingURL=PolarisRolesCombobox.js.map