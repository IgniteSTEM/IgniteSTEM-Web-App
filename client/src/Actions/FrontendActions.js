// Subheader constants
import * as subheaders from '../Constants/PageSubheaders';

export const getSubheader = (pathname) => {
    switch(pathname) {
        // Homepage
        case '/':
            return subheaders.home;

        // About page
        case '/about':
            return subheaders.about;

        // No match found, return generic
        default:
            return subheaders.about
    }
}
