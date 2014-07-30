//
// Angular (CommonJS) Filter Intellij Template
// @author Orlando Hohmeier (orlandohohmeier.com)
//

"use strict";

//#import

//@implementation

/**
 * ${Name}
 *
 * @author ${USER}
 *
 * @factory
 */
function ${Name}() {

    /**
     * Filter
     *
     * @param input {*}
     * @returns {string}
     */
    var filter = function filter(input) {
        return input;
    };

    return filter;
}

//Inject
${Name}.\$inject = [];

//@end

//Export
module.exports = ${Name};