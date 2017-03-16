/**
 * Created by dqvsra on 3/16/17.
 */
puremvc.define
(
    {
        name: "app.model.vo.ApplicationVO"
    ,   parent: Object
    ,   constructor: function ApplicationVO() {

        }
    }
    ,
    {
        id: "application",
        lastupdate: 0,
        connectiontype: "",
        device : {
            uuid         : 0
            ,   model        : ""
            ,   version      : 0
            ,   platform     : ""
        },
        content: {
        }
    }
    ,
    {
        NAME: 'ApplicationVO'
    }
);