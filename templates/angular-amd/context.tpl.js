//
// Angular (AMD) Context Intellij Template
// @author Orlando Hohmeier (orlandohohmeier.com)
//
define(function (require) {
    "use strict";

    //#import

    var angular = require('angular');

    // Config
    var ConfigName = require('configname');

    // Model
    var ModelName = require('model/modelname');

    // Services
    var ServiceName = require('services/servicename');

    // Directive
    var directiveName = require('directives/directivename');

    // Controller
    var ControllerName = require('controller/controllername');



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

        /**
         * Instance
         *
         * @type {angular.module}
         */
        var instance = angular.module(${Name}.ID, []);

        /**
         * Init
         */
        function init() {

            // Set Config
            instance.config(ConfigName);

            // Map Model
            instance.factory('ModelName', ModelName);

            // Map Services
            instance.factory('ServiceName', ServiceName);

            // Map Directives
            instance.directive('directiveName', directiveName);

            // Map Controller
            instance.controller('ControllerName', ControllerName);

        }

        //Call Init
        init();

        return instance;
    }

    //ID
    ${Name}.ID = '${Name}';

    //Export
    return ${Name};

    //@end
});