/**
 * Created by dqvsra on 3/16/17.
 */

(function() {
    /**
     * @class app.controller.commands.StartupCommand
     * @extends puremvc.MacroCommand
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.controller.commands.StartupCommand',
            parent: puremvc.MacroCommand
        },

        // INSTANCE MEMBERS
        {
            /** @override */
            initializeMacroCommand: function () {
                var Commands = app.controller.commands;
                var PrepareCommands = Commands.prepare;
                console.log("> PureMVC -> Startup - Initialize Startup MacroCommand");
                // add the PrepareControllerCommand- it will register Commands with the Facade
                this.addSubCommand(PrepareCommands.PrepareControllerCommand);
                // add the PrepareModelCommand- it will register Proxies with the Facade
                this.addSubCommand(PrepareCommands.PrepareModelCommand);
                // add the SetupViewsCommand- it will register Mediators with the Facade
                this.addSubCommand(PrepareCommands.PrepareViewCommand);
                this.addSubCommand(PrepareCommands.PrepareCompleteCommand);
            },
            execute: function (note) {
                puremvc.MacroCommand.prototype.execute.call(this, note);
            }
        }
    );
    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////
})();