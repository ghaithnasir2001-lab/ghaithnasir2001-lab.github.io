window.onload = function () {
    const area = localStorage.getItem("area") || "لم يتم اختيار منطقة";
    const fee = localStorage.getItem("fee") || "0";

    document.getElementById("area").value = area;
    document.getElementById("fee").value = fee + " د.أ";

    calculateTotal();
};

function calculateTotal() {
    const fee = parseFloat(localStorage.getItem("fee")) || 0;
    const foodPrice = parseFloat(document.getElementById("foodPrice").value) || 0;
    const total = fee + foodPrice;
    document.getElementById("totalPrice").value = total.toFixed(2) + " د.أ";
}

function sendWhatsAppApp() {
    const area = document.getElementById("area").value;
    const fee = document.getElementById("fee").value;
    const foodPrice = document.getElementById("foodPrice").value;
    const total = document.getElementById("totalPrice").value;
    const restaurant = document.getElementById("restaurantName").value.trim();
    const order = document.getElementById("orderDetails").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();


    if (restaurant === "" || foodPrice === "" || phone === "") {
        alert("يرجى إدخال اسم المطعم، سعر الأكل، ورقم هاتف الزبون");
        return;
    }

    if (!phone.startsWith("07") || phone.length !== 10) {
        alert("رقم الهاتف يجب أن يتكون من 10 أرقام ويبدأ بـ 07");
        return;
    }

    const orderText = order === "" ? "لم يتم تحديد أصناف" : order;


    const message = `📦 *طلب جديد*
🏠 *المطعم:* ${restaurant}
🍽 *الطلب:* ${orderText}
💰 *الأكل:* ${foodPrice} د.أ
🚚 *التوصيل:* ${fee}
💵 *الإجمالي:* ${total}
📍 *المنطقة:* ${area}
📞 *هاتف الزبون:* ${phone}`;

    const driverPhone = "962791171695";
    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://api.whatsapp.com/send?phone=${driverPhone}&text=${encodedMessage}`;

    window.location.href = whatsappURL;
}