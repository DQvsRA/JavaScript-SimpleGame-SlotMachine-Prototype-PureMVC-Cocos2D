/**
 * Created by dqvsra on 3/16/17.
 */
/**
 * @class app.ApplicationFacade
 * @extends puremvc.Facade
 */
puremvc.define
(
    // CLASS INFO
    {
        name: "app.ApplicationFacade",
        parent: puremvc.Facade
    },
    // INSTANCE MEMBERS
    {
        /**
         * The <code>Model</code> <code>View</code> and
         * <code>Controller</code> are initialized in a deliberate
         * order to ensure internal dependencies are satisfied before
         * operations are performed.<p>
         * <code>initializeController()</code> should be overridden
         * for the specific purpose of registering your commands. Any attempt to
         * register <code>Mediator</code>s here will result in an error.
         * being thrown because the <code>View</code> has not yet been initialized.</p>
         * <p>calling <code>this.parent()</code> is also required.
         */
        initializeController: function() {
            puremvc.Facade.prototype.initializeController.call(this);
            this.registerCommand( ApplicationCommands.STARTUP, app.controller.commands.StartupCommand ); // associate the SetupCommand with the STARTUP notification
        },
        initializeModel: function() {
            puremvc.Facade.prototype.initializeModel.call(this);
        },
        /**
         * A convenience method to start the PureMVC apparatus
         *
         * @return {void}
         */
        startup: function (stage) {
            console.log("> PureMVC -> Startup");
            this.sendNotification( ApplicationCommands.STARTUP, stage ); // execute StartupCommand
        }
    },
    // STATIC MEMBERS
    {
        /**
         * Retrieve an instance of ApplicationFacade. If one has not yet been
         * instantiated, one will be created for you.
         *
         * @static
         * @param {string} multitonKey
         * @return ApplicationFacade
         */
        getInstance: function (multitonKey)
        {
            var instanceMap = puremvc.Facade.instanceMap;
            instance = instanceMap[multitonKey];
            if (instance) return instance;
            return instanceMap[multitonKey] = new app.ApplicationFacade(multitonKey);
        },
        /**
         * @static
         * @type {string}
         */
        NAME: 'Core'
    }
);