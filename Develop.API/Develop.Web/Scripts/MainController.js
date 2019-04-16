function additem() {
    var idxitem = $('#Count').val();
    idxitem++;
    $('#Count').val(idxitem);
    
    var Product = $('#ListProduct').clone();
    Product.find("#CatalogueID").attr("name", "items[" + idxitem + "].CatalogueID").attr("id", "CatalogueID[" + idxitem + "]").val('');
    Product.find("#qty").attr("name", "items[" + idxitem + "].Qty").attr("id", "qty[" + idxitem + "]").val('');
    Product.find("#price").attr("name", "items[" + idxitem + "].price").attr("id", "price[" + idxitem + "]").val('');
    $('table#Items tbody').append(Product);
    
}
function changedata(id) {
    $("#price").val(price);
    $("#qty").addattr({ "max" : qty });
}
$('table').on('mouseup keyup', 'input[type=number]', () => calculateTotals());

function calculateTotals() {
    const subtotals = $('#ListProduct').map((idx, val) => calculateSubtotal(val)).get();
    const total = subtotals.reduce((a, v) => a + Number(v), 0);
    $('#GrandTotal').text(formatAsCurrency(total));
}

function calculateSubtotal(row) {
    const $row = $(row);
    const inputs = $row.find('input[type=number]');
    const subtotal = inputs[0].value * inputs[1].value;

    $row.find('td:last').text(formatAsCurrency(subtotal));

    return subtotal;
}

function formatAsCurrency(amount) {
    if (amount != null && amount > 1) {
        return `Rp ${Number(amount).toFixed(2)}`;
    } else {
        return `Rp  0.0`;
    }
}
