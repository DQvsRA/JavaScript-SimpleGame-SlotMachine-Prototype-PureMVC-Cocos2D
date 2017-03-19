/**
 * Created by dqvsra on 3/16/17.
 */
/**
 * @class app.controller.commands.prepare.PrepareViewCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define
(
    // CLASS INFO
    {
        name: 'app.controller.commands.prepare.PrepareViewCommand',
        parent: puremvc.SimpleCommand
    },

    // INSTANCE TRAITS
    {
        /** @override */
        execute: function (note)
        {
            var mediators = app.view.mediators;
            console.log("> PureMVC -> Startup - Prepare: View");

            var stage = note.getBody();
            var header = new Header();
            var footer = new Footer();
            var reels = new Reels();

            var size = cc.winSize;
            var background = new cc.DrawNode();
            background.drawRect(
                cc.p(0, 0),
                cc.p(size.width, size.height),
                cc.color.apply(null, ColorUtils.hexToRgb("acacaca")),
                0
            );
            stage.addChild(background);
            stage.onEnter = function () {

            };

            this.facade.registerMediator( new mediators.ApplicationMediator(stage) );
            this.facade.registerMediator( new mediators.ReelsMediator(reels) );
            this.facade.registerMediator( new mediators.HeaderMediator(header) );
            this.facade.registerMediator( new mediators.FooterMediator(footer) );
        }
    }
);