export const isSessionSignedOut = (session) => {
    return !session?.user?.id;
};
export const isSessionSignedIn = (session) => {
    return !isSessionSignedOut(session);
};
//# sourceMappingURL=utils.js.map