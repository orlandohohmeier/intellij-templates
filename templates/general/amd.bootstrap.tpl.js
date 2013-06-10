//
// AMD Bootstrap Intellij Template
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
        library      :'path/to/library'
    },
    //>>excludeEnd("work");
    shim :{
        library:{
            deps   :[''],
            exports:'library'
        }
    }
});

//Bootstrap Application
require(['application'], function (Application) {
   var application = new Application();
});