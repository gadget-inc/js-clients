// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AutoForm: PolarisAutoForm } = require("@gadgetinc/react/auto/polaris");
const { AutoForm: MUIAutoForm } = require("@gadgetinc/react/auto/mui");
if (typeof PolarisAutoForm == "undefined") throw new Error("PolarisAutoForm is undefined");
if (typeof MUIAutoForm == "undefined") throw new Error("MUIAutoForm is undefined");
