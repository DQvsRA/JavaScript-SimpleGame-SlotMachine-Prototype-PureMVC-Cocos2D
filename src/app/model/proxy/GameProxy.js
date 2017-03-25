/**
 * Created by dqvsra on 3/19/17.
 */
(function(){

    /**
     * @class model.proxy.GameProxy
     * @extends puremvc.Proxy
     */

    var _reels;
    var _finishedReels = 0;
    var _predefinedResultsChanged = false;

    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.model.proxy.GameProxy',
            parent: puremvc.Proxy,
            constructor: function GameProxy() {
                puremvc.Proxy.prototype.constructor.call(this,
                    [app.model.proxy.GameProxy.NAME],
                    XMLUtils.parse(cc.loader.getRes(res.GameData_xml))
                );
            }
        },

        // INSTANCE MEMBERS
        {

            /* GETTERS */

            /* END */
            reelsCount: function() {
                return parseInt(_reels.getAttribute("count")) || Defaults.REELS_COUNT;
            },
            reelSpeed: function() {
                return _reels.getAttribute("speed") || Defaults.REEL_SPEED;
            },
            itemsCount: function() {
                return parseInt(_reels.getAttribute("items")) || Defaults.ITEMS_COUNT;
            },
            spinTime: function() {
                return _reels.getAttribute("spintime") || Defaults.SPIN_TIME;
            },
            spinTimeSpread: function() {
                return _reels.getAttribute("timespread") || Defaults.SPIN_TIME_SPREAD;
            },
            reelItemsNames: function() {
                return _reels.getElementsByTagName("item");
            },
            isAllReelsFinished : function () {
                return _finishedSlots == this.reelsCount();
            },
            /* SETTERS */

            /* END */

            startGame: function () {
                _finishedReels = 0;
            },
            endGame: function () {

            },
            reelSpinFinished: function() {
                _finishedReels += 1;
            },
            onRegister: function () {
                _reels = this.data.getElementsByTagName("reels")[0];
                console.log("> \t\t\tGameProxy -> GameData:", this.data);
            }
            ,
            onRemove: function () {

            }
        },

        // CLASS MEMBERS
        {
            NAME: 'GameProxy'
        }
    );
})();