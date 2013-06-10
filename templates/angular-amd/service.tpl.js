//
// Angular (AMD) Service Intellij Template
// @author Orlando Hohmeier (orlandohohmeier.com)
//
define(function (require) {
    "use strict";

    //#import

    //@implementation

    /**
     * ${Name}
     *
     * @name ${Name}
     * @author ${USER}
     *
     * @factory
     */
    function ${Name}(injectables) {

        /**
         * Instance
         *
         * @type {object}
         */
        var instance = {};

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
    ${Name}.\$inject = ['injectables'];

    //Export
    return ${Name};

    //@end
});