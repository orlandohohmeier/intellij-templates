//
// Angular (CommonJS) Module Context Intellij Template
// @author Orlando Hohmeier (orlandohohmeier.com)
//

"use strict";

//#import

// Core
var angular = require('angular');

// Config
var ConfigName = require('configname');

// Model
var ModelName = require('model/modelname');

// Servicesinstantiation
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
 * @return {module}
 */
 var ${Name} function () {

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
     * @type {module}
     */
    var instance = angular.module(ID, []);

    // Singleton constructor
    ${Name} = function () {
        return instance;
    };

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

//@end

//Export
module.exports = ${Name};