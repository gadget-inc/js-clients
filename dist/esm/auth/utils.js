export const isSessionSignedOut = (session) => {
    return !session?.user?.id;
};
export const isSessionSignedIn = (session) => {
    return !isSessionSignedOut(session);
};
export function windowNavigate(path) {
    return window.location.assign(path);
}
//# sourceMappingURL=utils.js.map