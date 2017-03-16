/**
 * Created by dqvsra on 3/16/17.
 */
puremvc.define
(
    {
        name: "app.model.vo.UserVO"
    ,   parent: Object
    ,   constructor: function UserVO() {

        }
    }
    ,
    {
        // the second object supplied defines your class traits, that is
        // the properties that will be defined on your classes prototype
        // and thereby on all instances of this class
        id                  : "user"


        ,   firstname       : ""
        ,   lastname        : ""

        //,   validated    : 0
        //,   signup       : 0
        //,   signin       : 0
        //,   phonenumber  : ""

        //,   pincode      : ""
        //,   email        : ""
        //,   gender       : ""
        //,   birthday     : 0
        //,   thumbnail    : ""
    }
    ,
    {
        NAME: 'UserVO'
    }
);