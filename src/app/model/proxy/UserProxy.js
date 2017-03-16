/**
 * Created by dqvsra on 3/16/17.
 */
(function(){

    /**
     * @class model.proxy.UserProxy
     * @extends puremvc.Proxy
     */
    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.model.proxy.UserProxy',
            parent: puremvc.Proxy,
            constructor: function UserProxy() {
                puremvc.Proxy.prototype.constructor.call(this, [app.model.proxy.UserProxy.NAME], new app.model.vo.UserVO());
            }
        },

        // INSTANCE MEMBERS
        {

            /* GETTERS */
            getParam : function(paramName) {
                return this.getData()[paramName];
            }
            ,
            getFullName: function() {
                var user = this.getData();
                return user.firstname + " " + user.lastname;
            }
            ,
            getPhonenumber : function () {
                return this.getData().phonenumber;
            }
            /* END */

            /* SETTERS */
            ,
            setParam : function (paramName, value) {
                this.getData()[paramName] = value;
            }
            ,
            setParams : function (paramsObj) {
                for (var key in paramsObj) this.setParam(key, paramsObj[index]);
            }
            /* END */

            ,
            onRegister: function () {

            }
            ,
            onRemove: function () {

            }
        },

        // CLASS MEMBERS
        {
            NAME: 'UserProxy'
        }
    );
})();