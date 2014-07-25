//
// Angular (CommonJS) Directive Intellij Template
// @author Orlando Hohmeier (orlandohohmeier.com)
//

//#import

//@implementation

/**
 * ${Name}
 *
 * @name ${Name}
 * @author ${USER}
 * @factory
 */
function ${Name}() {

	/**
	 * Instance
	 *
	 * @type {object}
	 */
	var instance = {};

	/**
	 * Name
	 *
	 * @description  Name of the current scope. Optional defaults to the name at registration.
	 * @type {string}
	 */
	instance.name = '';

	/**
	 * Priority
	 *
	 * @description The priority is used to sort the directives before their compile functions get called.
	 * @type {number}
	 */
	instance.priority = 0;

	/**
	 * Terminal
	 *
	 * @description If set to true then the current priority will be the last set of directives which will execute.
	 * @type {boolean}
	 */
	instance.terminal = false;

	/**
	 * Scope
	 *
	 * @description Directive Scope
	 * @type {boolean|object}
	 */
	instance.scope = false;

	/**
	 * Controller
	 *
	 * @description Controller constructor function.
	 * @type {function}
	 */
	instance.controller = null;

	/**
	 * Require
	 *
	 * @description Require another controller be passed into current directive linking function.
	 * @type {string|function|Array}
	 */
	instance.require = null;

	/**
	 * Restrict
	 *
	 * @description String of subset of EACM which restricts the directive to a specific directive declaration style.
	 * @type {string}
	 */
	instance.restrict = 'A';

	/**
	 * Template
	 *
	 * @description Replace the current element with the contents of the HTML.
	 * @type {string}
	 */
	instance.template = '';

	/**
	 * Template URL
	 *
	 * @description  Same as template but the template is loaded from the specified URL.
	 * @type {string}
	 */
	instance.templateUrl = ''

	/**
	 * Reploace
	 *
	 * @description If set to true then the template will replace the current element, rather than append the
	 * template to the element.
	 * @type {boolean}
	 */
	instance.replace = false

	/**
	 * Transclude
	 *
	 * @description Compile the content of the element and make it available to the directive. Typically used with ngTransclude.
	 * @type {boolean}
	 */
	instance.transclude = false

	/**
	 * Compile
	 *
	 * @description Compile function deals with transforming the template DOM.
	 * @param element
	 * @param attributes
	 * @param transclude
	 * @returns {*}
	 */
	instance.compile = function compile(element, attributes, transclude) {
		//A compile function can have a return value which can be either a function or an object.
		//returning a function - is equivalent to registering the linking function via the link property of the
		//config object when the compile function is empty.
		return  function link(scope, element, attributes, controller) {
		};

		//returning an object with function(s) registered via pre and post properties - allows you to control
		//when a linking function should be called during the linking phase. See info about pre-linking and
		//post-linking functions below.
		return {
			pre: function preLink(scope, element, attributes, controller) {
			},
			post: function postLink(scope, element, attributes, controller) {
			}
		}
	}

	/**
	 * Link
	 *
	 * @description Link function is responsible for registering DOM listeners as well as updating the DOM.
	 * It is executed after the template has been cloned. This is where most of the directive logic will be put.
	 * @param scope
	 * @param element
	 * @param attributes
	 */
	instance.link = function link(scope, element, attributes) {
	};

	return instance;
}

//Inject
${Name}.\$inject = [];

//@end

//Export
module.exports = ${Name};