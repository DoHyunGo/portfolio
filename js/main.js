//main.js

//신상품 정보 전역변수 셋팅

var sinsang = {
    "m1": "[남성]카모전판프린트 PQ 티셔츠^DMTS7K731-MG^99,000원",
    "m2": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-BK ^89,000원",
    "m3": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-WH ^89,000원",
    "m4": "[남성]부분 스트라이프 PQ 티셔츠^DMTS77731-NY ^99,000원",
    "m5": "[남성]웰딩포인트 트레이닝 하프팬츠^DMTB61731-MD ^89,000원",
    "m6": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-GR ^99,000원",
    "m7": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-KA ^99,000원",
    "m8": "[남성]베이직 솔리드 래쉬가드^DMSW15731-BK ^49,000원",
    "m9": "[남성]남성 루즈핏 슬리브리스^DMSL6C731-MG ^59,000원"
}



var acall; //setInterval  담을 변수

$(function () {
    //자동슬라이드 함수 호출하기
    acall = setInterval(flowImg, 20)

    //마우스 오버 시 멈춤, 아웃시 다시 실행
    $('.flowImg li').hover(function () { //마우스 오버시
        clearInterval(acall); //인터벌 지우기

        //.ibox 가져오기

        var cls = $(this).attr('class');
        console.log('클래스명:' + cls);

        //신상정보 가져오기
        var info = sinsang[cls]; //sinsang[m2]
        console.log('신상정보:' + info);

        //상품정보박수 만들기 (.ibox)
        $(this).append('<div class="ibox"></div>');


        //상품정보 넣기
        /*        $('.ibox').text(info).animate({
                    top: '110%',
                    opacity: 1
                },300,'easeOutCirc');*/
        //상품정보 넣기 -html()사용

        $('.ibox').html(info.replace(/\^/g, '<br>')).animate({
            top: '110%',
            opacity: 1

        }, 300, 'easeOutCirc');
        //replace (/바꿀대상/, 바꿀내용)
        //바꿀문자가 특수문자면 역슬래쉬를 사용
        //g: global을 뜻하는 g!
    }, function () { //마우스 아웃시
        acall = setInterval(flowImg, 20);

        $('.ibox').remove();
    });
});
/*////////////////////////////////
            함수명; flowImg
            기능; 이미지를 왼쪽으로 계속 이동하여 흐르게함
////////////////////////////////*/

var fnum = 0; //이동픽셀수
function flowImg() {
    console.log('나 흘러가고 있니???');
    fnum++; //1씩 증가(left이동 픽셀수 증가)
    console.log(fnum); //이동하는 픽셀 수 확인 

    //li하나의 너비만큼 이동했을 때
    //가장 첫번째 li를 마지막으로 이동시키고 left값 초기화
    var fw = $('.flowImg li').first().width(); //첫번째 li크기
    console.log(fw);

    if (fnum > fw) {
        $('.flowImg').append($('.flowImg li').first()).css({
            left: 0
        }); //첫번째를 마지막으로 이동한다?->무슨 메서드?(맨뒤로 보내는거)->append
        fnum = 0; //이동하는 값 초기화!
    } else {
        $('.flowImg').css({
            left: -fnum + 'px'
        });
    }

}
