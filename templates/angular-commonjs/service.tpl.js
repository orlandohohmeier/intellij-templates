//
// Angular (CommonJS) Service Intellij Template
// @author Orlando Hohmeier (orlandohohmeier.com)
//

"use strict";

//#import

//@implementation

/**
 * ${Name}
 *
 * @name ${Name}
 * @author ${USER}
 *
 * @constructor
 */
function ${Name}() {

    // Scope-safe constructor
    if (!(this instanceof ${Name})) {
        return new ${Name}();
    }

    /**
     * Instance
     *
     * @type {${Name}}
     */
    var instance = this;


    /**
     * Init
     */
    function init() {

    }

    //Call Init
    init();

    return instance;
}

//Inject
${Name}.\$inject = [];

//@end


//Export
module.exports = ${Name};
