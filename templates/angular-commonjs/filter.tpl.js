//
// Angular (AMD) Filter Intellij Template
// @author Orlando Hohmeier (orlandohohmeier.com)
//
define(function (require) {
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
    function ${Name}(injectables) {

        /**
         * Filter
         *
         * @param input {*}
         * @returns {string}
         */
        var filter = function filter(input) {
            var output = input;
            return output;
        };

        return filter;
    }

    //Inject
    ${Name}.\$inject = ['injectables'];

    //Export
    return ${Name};

    //@end
});