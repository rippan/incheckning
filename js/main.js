$(document).ready(function() {

    $("#login-button").click(() => {
        $("#hello").text("Hej " + $("#tekniker").val() + "!");
        $("#login").fadeOut(200, () => {
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
            $("#checkedout").fadeIn()
        })
    })

    $("#checkin-new").click(() => {
        $("#checkin-plats, #checkout-plats").val("");
        $("#checkin-ticket, #checkout-ticket").val("");
        $("#checkin-phone, #checkout-phone").val("");
        $("#checkin-desc, #checkout-desc").val("");
        $("#checkin-length, #checkout-length").val("");
        $("#checkedout").fadeOut(200, () => {
            $("#checkin").fadeIn()
        })
    })

    $("#checkin-length").on('input', (val, event) => {
        $("#checkin-length-value").text($("#checkin-length").val() + " timmar")
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
        $("#checkin-plats").val(decodedText);
        //$("#qr-result").text(`Code scanned: ${decodedText}`)
        //$("#qr-sms").html(`<a href="${decodedText}">${decodedText}</a>`)
        //$("#qr-new").show();
        //html5QrcodeScanner.clear(); // Stop scanning after successfull QR read
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
})