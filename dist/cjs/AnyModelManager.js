"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPublicSingletonModelManager = exports.isPublicModelManager = void 0;
function isPublicModelManager(manager) {
    return "findOne" in manager;
}
exports.isPublicModelManager = isPublicModelManager;
function isPublicSingletonModelManager(manager) {
    return "get" in manager;
}
exports.isPublicSingletonModelManager = isPublicSingletonModelManager;
//# sourceMappingURL=AnyModelManager.js.map