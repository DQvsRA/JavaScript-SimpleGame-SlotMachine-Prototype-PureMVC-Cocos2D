/**
 * Created by dqvsra on 3/16/17.
 */
/**
 * @class app.controller.commands.prepare.PrepareControllerCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define
(
    // CLASS INFO
    {
        name: 'app.controller.commands.prepare.PrepareControllerCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note)
        {
            console.log("> PureMVC -> Startup - Prepare: Controller");

            const commands = app.controller.commands;
            const reels = commands.reels;

            this.facade.registerCommand( ReelsCommands.SETUP_REELS,                 reels.SetupReelsCommand );
            this.facade.registerCommand( ReelsCommands.START_SPINNING,              reels.StartSpinningCommand );
            this.facade.registerCommand( ReelsCommands.RANDOM_SPIN_COMPLETE,        reels.RandomSpinCompleteCommand );
            this.facade.registerCommand( ReelsCommands.COMBINATION_SPIN_COMPLETE,   reels.CombinationSpinCompleteCommand );

            this.facade.registerCommand( GameCommands.COMPLETE,         commands.game.GameCompleteCommand );
            this.facade.registerCommand( GameCommands.START,            commands.game.StartGameCommand );
        }
    }
);