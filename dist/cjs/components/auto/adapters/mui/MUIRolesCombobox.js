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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MUIRolesCombobox = void 0;
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const metadata_1 = require("../../../../metadata");
const MUIRolesCombobox = (props) => {
    const { roles, fetching, error } = (0, metadata_1.useRolesMetadata)();
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