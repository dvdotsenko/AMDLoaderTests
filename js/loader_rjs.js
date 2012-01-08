(function(){
    
    define(
        'jquery'
        , ['js/libs/jquery.virtual']
        , function($){
            return $
        }
    )
    
    // chainloading jquery, then dumb jquery plugins
    require(['jquery'], function($) {
    
        // in case jQuery ever stops polluting window, we'll do it here because we load dangerous non-AMD-compatible jq plugins next
        window.jQuery = window.$ = $

        // nesting behind require because barnacle.plain depends on jquery to be execed, attached to window
        define(
            'baserequirements'
            , ['js/libs/jquery.barnacle.js'] // not AMD-compatible jq plugin. You would add more of these here.
            , function(){}
        )

        require(
            ['jquery', 'baserequirements'] // , 'myapplication']
            , function($){
                $.fn.barnacle()
                window.CheckIn("Main Application")
            }
        )
    })
})()