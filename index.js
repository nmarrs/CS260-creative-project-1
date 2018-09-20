$(function() {
    // Setup audio clips
    var lowCKeyAudio = new Audio('static/sounds/lowCKey.wav')
    lowCKeyAudio.preload = 'auto'
    lowCKeyAudio.load()
    var CsharpKeyAudio = new Audio('static/sounds/CsharpKey.wav')
    CsharpKeyAudio.preload = 'auto'
    CsharpKeyAudio.load()
    var DKeyAudio = new Audio('static/sounds/DKey.wav')
    DKeyAudio.preload = 'auto'
    DKeyAudio.load()
    var EfKeyAudio = new Audio('static/sounds/EfKey.wav')
    EfKeyAudio.preload = 'auto'
    EfKeyAudio.load()
    var EKeyAudio = new Audio('static/sounds/EKey.wav')
    EKeyAudio.preload = 'auto'
    EKeyAudio.load()
    var FKeyAudio = new Audio('static/sounds/FKey.wav')
    FKeyAudio.preload = 'auto'
    FKeyAudio.load()
    var FsharpKeyAudio = new Audio('static/sounds/FsharpKey.wav')
    FsharpKeyAudio.preload = 'auto'
    FsharpKeyAudio.load()
    var GKeyAudio = new Audio('static/sounds/GKey.wav')
    GKeyAudio.preload = 'auto'
    GKeyAudio.load()
    var GsharpKeyAudio = new Audio('static/sounds/GsharpKey.wav')
    GsharpKeyAudio.preload = 'auto'
    GsharpKeyAudio.load()
    var AKeyAudio = new Audio('static/sounds/AKey.wav')
    AKeyAudio.preload = 'auto'
    AKeyAudio.load()
    var BfKeyAudio = new Audio('static/sounds/BfKey.wav')
    BfKeyAudio.preload = 'auto'
    BfKeyAudio.load()
    var BKeyAudio = new Audio('static/sounds/BKey.wav')
    BKeyAudio.preload = 'auto'
    BKeyAudio.load()
    var highCKeyAudio = new Audio('static/sounds/highCKey.wav')
    highCKeyAudio.preload = 'auto'
    highCKeyAudio.load()
    
    // Setup onClick piano keys
    $('#lowCKey').click(function() {
        var click = lowCKeyAudio.cloneNode()
        click.play()
    })
    
    $('#CsharpKey').click(function() {
        var click = CsharpKeyAudio.cloneNode()
        click.play()
    })
    
    $('#DKey').click(function() {
        var click = DKeyAudio.cloneNode()
        click.play()
    })
    
    $('#EfKey').click(function() {
        var click = EfKeyAudio.cloneNode()
        click.play()
    })
    
    $('#EKey').click(function() {
        var click = EKeyAudio.cloneNode()
        click.play()
    })
    
    $('#FKey').click(function() {
        var click = FKeyAudio.cloneNode()
        click.play()
    })
    
    $('#FsharpKey').click(function() {
        var click = FsharpKeyAudio.cloneNode()
        click.play()
    })
    
    $('#GKey').click(function() {
        var click = GKeyAudio.cloneNode()
        click.play()
    })
    
    $('#GsharpKey').click(function() {
        var click = GsharpKeyAudio.cloneNode()
        click.play()
    })
    
    $('#AKey').click(function() {
        var click = AKeyAudio.cloneNode()
        click.play()
    })
    
    $('#BfKey').click(function() {
        var click = BfKeyAudio.cloneNode()
        click.play()
    })
    
    $('#BKey').click(function() {
        var click = BKeyAudio.cloneNode()
        click.play()
    })
    
    $('#highCKey').click(function() {
        var click = highCKeyAudio.cloneNode()
        click.play()
    })

    // Setup keyboard map to piano keys
    $(document).keypress(function(event) {
        switch (event.which) {
            case 97:
                $('#lowCKey').addClass('active')
                var click = lowCKeyAudio.cloneNode()
                click.play()
                break;
            case 119:
                var click = CsharpKeyAudio.cloneNode()
                click.play()
                break;
            case 115:
                var click = DKeyAudio.cloneNode()
                click.play()
                break;
            case 101:
                var click = EfKeyAudio.cloneNode()
                click.play()
                break;
            case 100:
                var click = EKeyAudio.cloneNode()
                click.play()
                break;
            case 102:
                var click = FKeyAudio.cloneNode()
                click.play()
                break;
            case 116:
                var click = FsharpKeyAudio.cloneNode()
                click.play()
                break;
            case 103:
                var click = GKeyAudio.cloneNode()
                click.play()
                break;
            case 121:
                var click = GsharpKeyAudio.cloneNode()
                click.play()
                break;
            case 104:
                var click = AKeyAudio.cloneNode()
                click.play()
                break;
            case 117:
                var click = BfKeyAudio.cloneNode()
                click.play()
                break;
            case 106:
                var click = BKeyAudio.cloneNode()
                click.play()
                break;
            case 107:
                var click = highCKeyAudio.cloneNode()
                click.play()
                break;
            default:
                break;
        }
    })
})