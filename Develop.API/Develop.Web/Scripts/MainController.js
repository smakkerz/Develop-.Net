function additem() {
    var idxitem = $('#Count').val();
    idxitem++;
    $('#Count').val(idxitem);
    
    var Product = $('#ListProduct').clone();
    Product.find("#CatalogueID").attr("name", "items[" + idxitem + "].CatalogueID").val('');
    Product.find("#qty").attr("name", "items[" + idxitem+ "].Qty").val('');
    Product.find("#price").attr("name", "items[" + idxitem + "].price").val('');
    $('table#Items tbody').append(Product);
    
}

function toRp(angka) {
    var rev = parseInt(angka, 10).toString().split('').reverse().join('');
    var rev2 = '';
    for (var i = 0; i < rev.length; i++) {
        rev2 += rev[i];
        if ((i + 1) % 3 === 0 && i !== (rev.length - 1)) {
            rev2 += '.';
        }
    }
    return 'Rp. ' + rev2.split('').reverse().join('') + ',00 ';
}