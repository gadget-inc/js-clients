export function isPublicModelManager(manager) {
    return "findOne" in manager;
}
export function isPublicSingletonModelManager(manager) {
    return "get" in manager;
}
//# sourceMappingURL=AnyModelManager.js.map