/**
 * Created by dqvsra on 3/16/17.
 */
/**
 * Created by dqvsra on 3/16/17.
 */
(function () {
    ///////////////////////////////
    //    PRIVATE VARIABLE       //
    ///////////////////////////////
    var slots = null;

    /**
     * @class app.view.mediators.SlotsMediator
     * @extends puremvc.Mediator
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.view.mediators.SlotsMediator',
            parent: puremvc.Mediator,
            constructor: function(viewComponent) {
                puremvc.Mediator.prototype.constructor.call(this,
                    app.view.mediators.SlotsMediator.NAME,
                    viewComponent
                );
            }
        },

        // INSTANCE MEMBERS
        {
            /** @override */
            listNotificationInterests: function () {
                return [

                ];
            },

            /** @override */
            handleNotification: function (note) {
                //console.log("ApplicationMediator note:", note);
                var body = note.getBody();
                var type = note.getType();
                var name = note.getName();
                switch (name) {
                }
            },

            onRegister: function () {
                slots = this.viewComponent;
                this.sendNotification( ApplicationNotification.ADD_VIEW_COMPONENT, slots );
            },

            onRemove: function () {
                slots = null;
                this.setViewComponent(null);
            }
        },

        {
            NAME: 'SlotsMediator'
        }
    );

    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////

})();