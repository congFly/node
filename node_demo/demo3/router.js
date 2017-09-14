/**
 * Created by 18829 on 2017/9/13.
 */
function route(handle, pathname) {
    console.log('About to router a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log('No request handler found for' + pathname);
    }
}

exports.route = route;

