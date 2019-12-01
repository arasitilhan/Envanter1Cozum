var altbilgi =
    [
        {
            "id": "52",
            "kisi": "Selim Yıldız",
            "tc": "525252",
            "tel": "544323123",
            "dyer": "Manisa",
            "bag": "1"
        },
        {
            "id": "53",
            "kisi": "Orhan Işık",
            "tc": "53535353",
            "tel": "399999977",
            "dyer": "Ankara",
            "bag": "1"
        },
        {
            "id": "57",
            "kisi": "Ahmet Raşit İlhan",
            "tc": "57575757",
            "tel": "531531531",
            "dyer": "Ankara",
            "bag": "2"
        },
        {
            "id": "58",
            "kisi": "Melek Kübra Kefeli",
            "tc": "58585858",
            "tel": "539539539",
            "dyer": "Artvin",
            "bag": "2"
        }
    ];
var tabledata =
    [
        {
            "id": "1",
            "kisi": "Gökhan Türkmen",
            "tc": "123123",
            "tel": "11111111",
            "dyer": "Kayseri",
            "bag": "0"
        },
        {
            "id": "2",
            "kisi": "Fatma Görmüş",
            "tc": "234234",
            "tel": "222222222",
            "dyer": "İstanbul",
            "bag": "0"
        }
    ];
var tableColumns =
    [
        {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": '',
            "render": function () {
                return '<i class="fa fa-plus-square" aria-hidden="true"></i>';
            },
            width: "15px"
        },
        {
            "data": "kisi"
        },
        {
            "data": "tc",
            "render": function (tc) {
                return '<span id="popuptc" onclick="PopUpTC(' + tc + ',1)">' + tc + '</span>';
            }
        },
        {
            "data": "tel",
            "render": function (tel) {
                return '<span id="popuptel" onclick="PopUpTEL(' + tel + ')">' + tel + '</span>';
            }
        }
    ];
function format(d) {
    var ht = "";
    ht = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;"><th>Kişi</th><th>T.C No</th><th>Telefon</th>';
    $(altbilgi).each(function (idx, obj) {
        if (obj.bag == d.id) {
            ht = ht +
                '<tr>' +
                '<td>' + obj.kisi + '</td>' +
                '<td><span class="popuptc" onclick="PopUpTC(' + obj.tc + ',2)">' + obj.tc + '</span></td>' +
                '<td><span class="popuptel" onclick="PopUpTEL(' + obj.tel + ')">' + obj.tel + '</span></td>' +
                '</tr>';
        }
    });
    ht = ht + '</table>';
    return ht;
};
function PopUpTEL(tel) {
    $("#popup_tel").empty();
    $("#popup_tel").append("<div class='modal-content modal-card animate-zoom borderradius' style='max-width:600px'><div class='center'><br><span onclick='PopClose(popup_tel)' class='button xlarge hover-red display-topright' title='Close Modal'>&times;</span><a href='tel://" + tel + "'><img src='phone.png' width='20%' height='20%'/></a></div></div>");
    document.getElementById('popup_tel').style.display = 'block';
};
function PopClose(d) {
    document.getElementById('popup_tel').style.display = 'none';
    document.getElementById('popup_tc').style.display = 'none';
};
function PopUpTC(tc, durum) {
    $("#popup_tc").empty();
    var DoluData = "";
    if (durum == "1") {
        $(tabledata).each(function (idxy, objx) {
            if (objx.tc == tc) {
                DoluData = DoluData + "<tr>";
                DoluData = DoluData + "<td>Ad Soyad</td>";
                DoluData = DoluData + "<td>: " + objx.kisi + "</td>";
                DoluData = DoluData + "</tr>";
                DoluData = DoluData + "<tr>";
                DoluData = DoluData + "<td>T.C No</td>";
                DoluData = DoluData + "<td>: " + objx.tc + "</td>";
                DoluData = DoluData + "</tr>";
                DoluData = DoluData + "<tr>";
                DoluData = DoluData + "<td>Telefon</td>";
                DoluData = DoluData + "<td>: " + objx.tel + "</td>";
                DoluData = DoluData + "</tr>";
                DoluData = DoluData + "<tr>";
                DoluData = DoluData + "<td>Doğum Yeri</td>";
                DoluData = DoluData + "<td>: " + objx.dyer + "</td>";
                DoluData = DoluData + "</tr>";
            }
        });
    } else {
        $(altbilgi).each(function (idxy, objx) {
            if (objx.tc == tc) {
                DoluData = DoluData + "<tr>";
                DoluData = DoluData + "<td>Ad Soyad</td>";
                DoluData = DoluData + "<td>: " + objx.kisi + "</td>";
                DoluData = DoluData + "</tr>";
                DoluData = DoluData + "<tr>";
                DoluData = DoluData + "<td>T.C No</td>";
                DoluData = DoluData + "<td>: " + objx.tc + "</td>";
                DoluData = DoluData + "</tr>";
                DoluData = DoluData + "<tr>";
                DoluData = DoluData + "<td>Telefon</td>";
                DoluData = DoluData + "<td>: " + objx.tel + "</td>";
                DoluData = DoluData + "</tr>";
                DoluData = DoluData + "<tr>";
                DoluData = DoluData + "<td>Doğum Yeri</td>";
                DoluData = DoluData + "<td>: " + objx.dyer + "</td>";
                DoluData = DoluData + "</tr>";
            }
        });
    }
    $("#popup_tc").append("<div class='modal-content modal-card animate-zoom borderradius' style='max-width:600px'><div ><br><span onclick='PopClose(popup_tc)' class='button xlarge hover-red display-topright' title='Close Modal'>&times;</span><table cellpadding='5' cellspacing='0' border='0' style='padding-left:50px;'>" + DoluData + "</table></div></div>");
    document.getElementById('popup_tc').style.display = 'block';
};
$(document).ready(function () {
    var table = $('#Envanter1').DataTable({
        "data": tabledata,
        "columns": tableColumns,
        "paging": false,
        "ordering": true,
        "info": false,
        "searching": false
    });
    $('#Envanter1 tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var tdi = tr.find("i.fa");
        var row = table.row(tr);
        if (row.child.isShown()) {
            row.child.hide();
            tr.removeClass('shown');
            tdi.first().removeClass('fa-minus-square');
            tdi.first().addClass('fa-plus-square');
        } else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
            tdi.first().removeClass('fa-plus-square');
            tdi.first().addClass('fa-minus-square');
        }
    });
    table.on("user-select", function (e, dt, type, cell, originalEvent) {
        if ($(cell.node()).hasClass("details-control")) {
            e.preventDefault();
        }
    });
});