// 230622 상품 % 작업
// pc = % 2개 합하여 1개로 노출 하는 코드
const targetDiv = $("#thumb_slide ul li");

targetDiv.each(function (index) {
    if (targetDiv.eq(index).find(".consumer_price").length == 2) {
        targetDiv.eq(index).find(".consumer_price.2").css("display", "none");
    };

    if ((targetDiv.eq(index).find(".dc_info").length + targetDiv.eq(index).find(".dc_perc").length) == 2) {
        let text01 = targetDiv.eq(index).find(".dc_info").text();
        let text02 = targetDiv.eq(index).find(".dc_perc").text();

        let regex = /[^0-9]/g;

        let result01 = text01.replace(regex, "");
        let result02 = text02.replace(regex, "");

        let textNumber = Number(result01) + Number(result02);

        targetDiv.eq(index).find(".dc_perc").text(textNumber + "%");
        targetDiv.eq(index).find(".dc_info").css("display", "none");
    }
})

jQuery(document).ready(function () {

    // m 상품 할인 % 합치기
    const targetLi = jQuery("#thumb_slide ul li");
    console.log(targetLi);

    targetLi.each(function (index) {
        console.log("확인0");
        if (targetLi.eq(index).find(".consumer").length == 2) {
            targetLi.eq(index).find(".listDiscount").css("display", "none");
            console.log("확인1");
        };

        if (targetLi.eq(index).find(".dc_perc").length == 1) {
            let text01 = targetLi.eq(index).find(".dc_info").text();
            let text02 = targetLi.eq(index).find(".dc_perc").text();

            let regex = /[^0-9]/g;

            let result01 = text01.replace(regex, "");
            let result02 = text02.replace(regex, "");

            let textNumber = Number(result01) + Number(result02);

            targetLi.eq(index).find(".dc_info").text(textNumber + "%");
            targetLi.eq(index).find(".dc_perc").css("display", "none");
            console.log("확인2");
        }
    });

});
