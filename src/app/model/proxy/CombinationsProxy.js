/**
 * Created by dqvsra on 3/26/17.
 */
(function(){

    /**
     * @class model.proxy.CombinationsProxy
     * @extends puremvc.Proxy
     */

    var _currentGameCombination;

    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.model.proxy.CombinationsProxy',
            parent: puremvc.Proxy,
            constructor: function CombinationsProxy() {
                puremvc.Proxy.prototype.constructor.call(this,
                    [app.model.proxy.CombinationsProxy.NAME],
                    [].slice.call(XMLUtils.parse(cc.loader.getRes(res.Combinations_xml))
                        .getElementsByTagName("combination"))
                );
            }
        },

        // INSTANCE MEMBERS
        {

            /* GETTERS */
            setRandomPossibleCombination: function (reels, items) {
                var possibleCOmbinations = this.data.filter(function (elem) {
                    return parseInt(elem.getAttribute("reels")) === reels
                        && parseInt(elem.getAttribute("items")) === items;
                });
                _currentGameCombination = possibleCOmbinations[Math.floor(possibleCOmbinations.length * Math.random())];
                if(!_currentGameCombination) {
                    throw new Error("Sorry there is no combination with that parameters: " +reels + "x"+items);
                }
            },
            getCombinations:function () {
                return [].slice.call(_currentGameCombination.getElementsByTagName("reel"), 0)
            },
            getCombinationForReel : function(index) {
                var reelCombination = _currentGameCombination.getElementsByTagName("reel")[index];
                return reelCombination.textContent.split(",");
            }
            /* END */

            /* SETTERS */
            /* END */

            ,
            onRegister: function () {
                console.log("> \t\t\t| Registered - CombinationProxy -> data:", this.data);
            }
            ,
            onRemove: function () { }
        },

        // CLASS MEMBERS
        {
            NAME: 'CombinationsProxy'
        }
    );
})();