/**
 * A simple logging method that works in all modern browsers
 */
function log() {
    try{
        console.log.apply( console, arguments );        // Log message using the most common method
    } catch(e) {
        try{
            opera.postError.apply( opera, arguments );  // Log the opera way
        } catch(e) {
            alert(Array.prototype.join.call( arguments, " "));  // Use aler if all else fails
        }
    }
}