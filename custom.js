// Trigger
// J-Ouery는 $로 시작한다. 

// $(function...) : 같은 말 : document ready : html 문서를 처음부터 끝까지 다 읽은 다음 실행해라.
$(function () {
    // trigger를 click하면 funtion 시작
    $('.trigger').click(function () {
        //this : trigger 자기 자신 의미
        // trigger를 눌렀을 때 자기 자신인 active를 실행하게 해라.
        // toggleClass : 넣다 뺐다 하는 클래스
        $(this).toggleClass('active')
        // gnb 좌표 -270이 0으로 변하며 나오게 된다.
        $('.gnb').toggleClass('active')
    })

    // section을 누르면 gnb가 사라지게 한다.
    // j-Query는 중복되는 것은 콤마로 같이 적는다. 
    // trigger -> x를 빼준다.(tirgger의 active를 빼주는 역할)
    $('section, .menu a').click(function () {
        $('.gnb').removeClass('active')
        $('.trigger').removeClass('active')
    })
    // 글자를 눌러 찾아가면 접히게 만든다.
    // $('.menu a').click(function () {
    //     $('.gnb').removeClass('active')
    // })

    //j-Query 플러그인 : 슬라이딩 부드럽게 이동 
    // Smooth Scrolling
    // function 안에 e를 넣는 건 제작자가 넣은 거라 이해 할 필요없다.
    // menu a 클릭하면 scrollTo j-Query를 실행해라.
    // ms : 0.9초동안 슬라이딩 하라는 의미
    $('.menu a').click(function (e) {
        $.scrollTo(this.hash || 0, 900)
    })


})