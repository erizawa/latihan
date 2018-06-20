<script>
//<![CDATA[
var seconds = 10; // Berapa detik waktu mundurnya
function generate() { // Nama fungsi countdownnya
    var id;
    id = setInterval(function() {
        if (seconds < 1) {
            clearInterval(id);

            var cek_id = getParameter("hash");
            var decrypt_url = "https://shinobijawi.simpen.link/p/skip.html?hash=" // domain user
            if (cek_id == false) {
                alert("URL Tidak Valid!")
            } else if (cek_id == "undefined") {
                alert("URL Tidak Valid!")
            } else {
                var id_decoded = decrypt_url + cek_id;
                $('#btn-lanjutkan').html("Lanjutkan &raquo;");
                $('#btn-lanjutkan').removeClass("disabled");
                $('#btn-lanjutkan').attr("href", id_decoded);
            }
        } else {
            $('#tunggu').html(--seconds);
        }
    }, 1000);
}
//]]>
</script>
