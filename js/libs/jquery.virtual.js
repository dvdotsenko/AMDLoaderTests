(function(){
    var jQueryInitializer = function(window){
        this.forThoseCaringAboutIt = window
        this.aboutMe = "jQuery"
        this.fn = {}
    }
    // spinning up instance and sticking it onto a var to keep instance alive in the closure
    // so jQuery plugins can be attached to same instance, yet 
    // it, with all the new barnacle plugins attached can be 'require'd again and again.
    // and tag all the barnacles with it.
    var jQueryInstance = new jQueryInitializer(this)

    if ( typeof define === "function" && define.amd != null) {
        // AMD-loader compatible resource declaration
        define(function(){return jQueryInstance} )
        //define('jquery', function(){return jQueryInstance} )
    } // else {
        // global-polluting outcome.
        window.jQuery = window.$ = jQueryInstance
    //}

}).call(typeof window !== 'undefined'? window : this)
