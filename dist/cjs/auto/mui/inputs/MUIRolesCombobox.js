"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIRolesCombobox = void 0;
const tslib_1 = require("tslib");
const material_1 = require("@mui/material");
const react_1 = tslib_1.__importStar(require("react"));
const metadata_js_1 = require("../../../metadata.js");
const MUIRolesCombobox = (props) => {
    const { roles, fetching, error } = (0, metadata_js_1.useRolesMetadata)();
    const options = (0, react_1.useMemo)(() => {
        if (!roles)
            return [];
        return roles.map((role) => ({ id: role.name, label: role.name }));
    }, [roles]);
    if (error)
        throw error;
    if (fetching)
        return react_1.default.createElement(material_1.TextField, { label: props.label, autoComplete: "off", disabled: fetching });
    return (react_1.default.createElement(material_1.Autocomplete, { disablePortal: true, multiple: true, options: options, ...props, renderInput: (params) => react_1.default.createElement(material_1.TextField, { ...params, label: props.label }) }));
};
exports.MUIRolesCombobox = MUIRolesCombobox;
//# sourceMappingURL=MUIRolesCombobox.js.map