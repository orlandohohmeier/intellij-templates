//
// Angular (AMD) Module Context Intellij Template
// @author Orlando Hohmeier (orlandohohmeier.com)
//
define(function (require) {
    "use strict";

    //#import

    // Core
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
     * @return {angular.Module}
     */
    function ${Name}() {

        /**
         * Module ID
         *
         * @type {string}
         * @const
         */
        var ID = '${Name}';

        /**
         * Instance
         *
         * @type {angular.Module}
         */
        var instance = angular.module(ID, []);

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

        /**
         * Get module id
         *
         * @returns {string}
         */
        instance.id = function id(){
            return ID;
        };

        //Call Init
        init();

        return instance;
    }

    //Export
    return ${Name};

    //@end
});