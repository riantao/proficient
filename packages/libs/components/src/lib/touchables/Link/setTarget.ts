/**
 * @function setTarget
 * @param {string} href 
 * @returns {string | undefined}
 */
export const setTarget = (href: string): string | undefined => {
    let target = undefined;

    if(href.startsWith("http"))
        target = "_blank";
        
    return target;
}