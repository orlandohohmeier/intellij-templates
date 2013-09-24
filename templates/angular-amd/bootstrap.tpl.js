//
// Angular (AMD) Bootstrap Intellij Template
// @author Orlando Hohmeier (orlandohohmeier.com)
//
/**
 * ${Name}
 * @name ${Name}
 * @author ${USER}
 */
//Config
requirejs.config({
    //>>excludeStart("work", pragmas.work);
    paths:{
        angular      :'path/to/angular'
    },
    //>>excludeEnd("work");
    shim :{
        angular:{
            deps   :[''],
            exports:'angular'
        }
    }
});

//Bootstrap Application
require(['angular', 'context-name'], function (angular, Context) {
    angular.bootstrap(document, [Context().id()]);
});