export const isSessionSignedOut = (session) => {
    return !session?.userId;
};
export const isSessionSignedIn = (session) => {
    return !isSessionSignedOut(session);
};
//# sourceMappingURL=utils.js.map