/**
 * Created by dqvsra on 3/16/17.
 */
(function() {
    ///////////////////////////////
    //    PRIVATE VARIABLE       //
    ///////////////////////////////

    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.model.proxy.ApplicationProxy',
            //parent: app.model.proxy.BaseProxy,
            parent: puremvc.Proxy,
            constructor: function PagesProxy() {
                puremvc.Proxy.prototype.constructor.call(this, app.model.proxy.ApplicationProxy.NAME, new app.model.vo.ApplicationVO());
            }
        },

        // INSTANCE PUBLIC MEMBERS
        {
            onRegister: function () {
                console.log("> \t\t\t| Registered - ApplicationProxy ");
            }
            ,
            onRemove: function () {
            }
        },

        // CLASS MEMBERS
        {
            NAME: 'ApplicationProxy'
        }
    );

    ///////////////////////////////
    //    PRIVATE METHODS        //
    ///////////////////////////////

})();