$(document).ready(function() {
    

    const queryString = window.location.search;

    if(queryString=="?1") {
        $("#qr-reader").hide();
        $("#checkin-plats, #checkout-plats").prop( "disabled", true ).val("Teknikhus 1");
        $("#checkin-ticket, #checkout-ticket").prop( "disabled", true ).val("10000123");
        $("#checkin-phone, #checkout-phone").val("");
        $("#checkin-desc, #checkout-desc").val("");
        $("#checkin-length, #checkout-length").val("");
    }

    if(queryString=="?2") {
        $("#qr-reader").hide();
        $("#checkin-plats, #checkout-plats").prop( "disabled", true ).val("Teknikhus 2");
        $("#checkin-ticket, #checkout-ticket").prop( "disabled", true ).val("10000123");
        $("#checkin-phone, #checkout-phone").val("");
        $("#checkin-desc, #checkout-desc").val("");
        $("#checkin-length, #checkout-length").val("");
    }

    if(queryString=="?3") {
        $("#qr-reader").hide();
        $("#checkin-plats, #checkout-plats").prop( "disabled", true ).val("Teknikhus 3");
        $("#checkin-ticket, #checkout-ticket").prop( "disabled", true ).val("10000123");
        $("#checkin-phone, #checkout-phone").val("");
        $("#checkin-desc, #checkout-desc").val("");
        $("#checkin-length, #checkout-length").val("");
    }

    $("#checkin-button-1").click(() => {
        $("#qr-reader").hide();
        $(".content").hide();
        $("#checkin-plats, #checkout-plats").prop( "disabled", true ).val("Teknikhus 1");
        $("#checkin-ticket, #checkout-ticket").prop( "disabled", true ).val("10000123");
        $("#checkin-phone, #checkout-phone").val("");
        $("#checkin-desc, #checkout-desc").val("");
        $("#checkin-length, #checkout-length").val("");
        $("#checkin").fadeIn()
    });

    $("#checkin-button-2").click(() => {
        $("#qr-reader").hide();
        $(".content").hide();
        $("#checkin-plats, #checkout-plats").prop( "disabled", true ).val("Teknikhus 2");
        $("#checkin-ticket, #checkout-ticket").prop( "disabled", true ).val("10000123");
        $("#checkin-phone, #checkout-phone").val("");
        $("#checkin-desc, #checkout-desc").val("");
        $("#checkin-length, #checkout-length").val("");
        $("#checkin").fadeIn()
    });

    $("#checkin-button-3").click(() => {
        $("#qr-reader").hide();
        $(".content").hide();
        $("#checkin-plats, #checkout-plats").prop( "disabled", true ).val("Teknikhus 3");
        $("#checkin-ticket, #checkout-ticket").prop( "disabled", true ).val("10000123");
        $("#checkin-phone, #checkout-phone").val("");
        $("#checkin-desc, #checkout-desc").val("");
        $("#checkin-length, #checkout-length").val("");
        $("#checkin").fadeIn()
    });

    $("#login-button").click(() => {
        $(".hello").text("Hej " + $("#tekniker").val() + "!");
        $("#login").fadeOut(200, () => {
            $("#newcheckin").fadeIn()
            $("#orders").fadeIn()
        })
    })

    $(".openorder").click(() => {
        $(".content").hide();
        $("#newcheckin").fadeOut()
        $("#orders").fadeOut(200, () => {
            $("#order").fadeIn()
        })
    })

    $("#checkin-button-manual").click(() => {
        $("#newcheckin").fadeOut(200, () => {
            $(".content").hide();
            $("#checkin").fadeIn()
        })
    })

    $("#checkin-button").click(() => {
        $("#checkout-plats").val($("#checkin-plats").val())
        $("#checkout-ticket").val($("#checkin-ticket").val())
        $("#checkout-phone").val($("#checkin-phone").val())
        $("#checkout-desc").val($("#checkin-desc").val())
        $("#checkout-length").val($("#checkin-length").val() + " timmar")
        $("#checkin").fadeOut(200, () => {
            $("#checkout").fadeIn()
        })
    })

    $("#checkout-button").click(() => {
        $("#checkout").fadeOut(200, () => {
            //$("#checkedout").fadeIn()
            $("#checkedout").fadeIn()
        })
    })

    $("#checkin-new").click(() => {
        $("#qr-reader").show();
        $("#checkin-plats").prop( "disabled", false ).val("");
        $("#checkin-ticket").prop( "disabled", false ).val("");
        $("#checkin-plats, #checkout-plats").val("");
        $("#checkin-ticket, #checkout-ticket").val("");
        $("#checkin-phone, #checkout-phone").val("");
        $("#checkin-desc, #checkout-desc").val("");
        $("#checkin-length, #checkout-length").val("");
        $("#checkedout").fadeOut(200, () => {
            $("#newcheckin").fadeIn()
            $("#orders").fadeIn()
        })
    })

    $("#checkin-length").on('input', (val, event) => {
        $("#checkin-length-value").text("("+$("#checkin-length").val() + " timmar)")
    })

    function newQR() {
        $("#qr-reader").show();
        html5QrcodeScanner = new Html5QrcodeScanner(
            "qr-reader", {
                fps: 10,
                qrbox: 200
            })
        html5QrcodeScanner.render(onScanSuccess, onScanError)
    }

    function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code scanned = ${decodedText}`, decodedResult)


        $("#checkin-plats").val(decodedText).addClass('inputSuccess');
        //$("#qr-result").text(`Code scanned: ${decodedText}`)
        //$("#qr-sms").html(`<a href="${decodedText}">${decodedText}</a>`)
        //$("#qr-new").show();
        html5QrcodeScanner.clear(); // Stop scanning after successfull QR read
    }

    function onScanError(errorMessage) {
        // handle on error condition, with error message
        //$("#qr-result").text(`Error QR-scan: ${errorMessage}`)
    }

    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", {
            fps: 10,
            qrbox: 200
        })
    html5QrcodeScanner.render(onScanSuccess, onScanError)

    $("#qr-reader__dashboard_section_swaplink").hide();
})