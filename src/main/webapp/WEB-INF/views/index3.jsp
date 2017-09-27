<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=1024">
    <meta name="title" content="CJ CGV">
    <title>빠른예매 | 영화 그 이상의 감동. CGV</title>
    <meta name="description" content="CGV는 선진화된 관람문화와 최고의 서비스로 고객에게 잊을 수 없는 감동을 선사합니다. CGV홈페이지를 통해 영화 예매뿐만 아니라 그 이상의 서비스와 감동을 전달하고, 다양한 즐거움과 특별한 경험을 제공하고자 합니다.">
    <link rel="shortcut icon" type="image/x-icon" href="http://img.cgv.co.kr/R2014/images/favicon.ico">
    <link rel="stylesheet" media="all" type="text/css" href="http://img.cgv.co.kr/R2014/css/reset.css">
    <link rel="stylesheet" media="all" type="text/css" href="http://img.cgv.co.kr/R2014/css/layout.css">
    <link rel="stylesheet" media="all" type="text/css" href="http://img.cgv.co.kr/R2014/css/module.css">
    <link rel="stylesheet" media="all" type="text/css" href="http://img.cgv.co.kr/R2014/css/common.css">
    <link rel="stylesheet" media="all" type="text/css" href="http://img.cgv.co.kr/R2014/css/content.css">
    <link rel="stylesheet" media="print" type="text/css" href="http://img.cgv.co.kr/R2014/css/print.css">
    <link rel="stylesheet" type="text/css" href="http://img.cgv.co.kr/R2014/js/jquery.ui/smoothness/jquery-ui-1.10.4.custom.min.css">
    <script type="text/javascript" async="" src="http://www.google-analytics.com/analytics.js"></script><script async="" src="//www.googletagmanager.com/gtm.js?id=GTM-NNNFR3"></script><script async="" src="//www.google-analytics.com/analytics.js"></script><script type="text/javascript" src="/common/js/extraTheaters.js"></script>
    <script type="text/javascript" src="http://img.cgv.co.kr/R2014/js/app.config.js"></script>
    <script type="text/javascript" src="http://img.cgv.co.kr/R2014/js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="http://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.validate.min.js"></script>
    <script type="text/javascript" src="http://img.cgv.co.kr/R2014/js/jquery.ui/jquery-ui-1.10.4.custom.min.js"></script>
    <script type="text/javascript" src="http://img.cgv.co.kr/R2014/js/jquery.utils.js"></script>
    <script type="text/javascript" src="http://img.cgv.co.kr/R2014/js/app.utils.js"></script>
    <script type="text/javascript" src="http://img.cgv.co.kr/R2014/js/app.init.js"></script>
    <!--[if lte IE 9]><script type="text/javascript" src="http://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.placeholder.js"></script><![endif]-->
    <script type="text/javascript" src="http://img.cgv.co.kr/R2014/js/jquery.plugin/jquery.dotdotdot.min.js"></script>
    <!-- 각페이지 Header Start--> 
    <!--/각페이지 Header End--> 
    <script type="text/javascript">
    //<![CDATA[


        //        window.onkeydown = function () {
        //            var kcode = event.keyCode;
        //            if (kcode == 8 || kcode == 116) event.returnValue = false;
        //        }

        app.config('staticDomain', 'http://img.cgv.co.kr/R2014/')
            .config('imageDomain', 'http://img.cgv.co.kr')
            .config('isLogin', 'True');


        //상단 키워드 광고 (S)
        function AdSearchExt(txt, SearchText) {
            $('#header_keyword').attr('placeholder', txt);
            $('#header_ad_keyword').val(SearchText);
        }

        function hdIcoSet(left, sh) { }
        //상단 키워드 광고 (E)

        //특별관 클럽 팝업
        function openSpecialClub() {
            //var win = window.open('http://section.cgv.co.kr/event/SpecialClub/2014clubInfo_pop.aspx', 'winSpecialClub', 'left=0,top=0,width=670,height=800,toolbar=no,scrollbars=yes');
            var win = window.open('http://www.cgv.co.kr/event/develop/1503_CLUB_Info.aspx', 'winSpecialClub', 'left=0,top=0,width=580,height=700,toolbar=no,scrollbars=yes');
            win.focus();
        }



        var iframe = document.getElementById("ticket_iframe");

        function ticketIframeResize(height) {
            var iframe = document.getElementById("ticket_iframe");
            // resize
            iframe.height = height;
        }

        function addEvent(event, elem, func) {
            // W3C DOM
            if (elem.addEventListener) {
                elem.addEventListener(event, func, false);
            }
            // IE DOM
            else if (elem.attachEvent) {
                var r = elem.attachEvent("on" + event, func);
                return r;
            }
            // else
            else {
            }
        }

        function f_clientWidth() {
            return f_filterResults(
			window.innerWidth ? window.innerWidth : 0,
			document.documentElement ? document.documentElement.clientWidth : 0,
			document.body ? document.body.clientWidth : 0
		);
        }
        function f_clientHeight() {
            return f_filterResults(
			window.innerHeight ? window.innerHeight : 0,
			document.documentElement ? document.documentElement.clientHeight : 0,
			document.body ? document.body.clientHeight : 0
		);
        }
        function f_scrollLeft() {
            return f_filterResults(
			window.pageXOffset ? window.pageXOffset : 0,
			document.documentElement ? document.documentElement.scrollLeft : 0,
			document.body ? document.body.scrollLeft : 0
		);
        }
        function f_scrollTop() {
            return f_filterResults(
			window.pageYOffset ? window.pageYOffset : 0,
			document.documentElement ? document.documentElement.scrollTop : 0,
			document.body ? document.body.scrollTop : 0
		);
        }
        function f_filterResults(n_win, n_docel, n_body) {
            var n_result = n_win ? n_win : 0;
            if (n_docel && (!n_result || (n_result > n_docel)))
                n_result = n_docel;
            return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
        }
        function scrollToTop(y, isAnimate) {
            if (y == undefined) y = 0;

            $("html, body").animate({ scrollTop: y + "px" });

            //if (window.pageYOffset) window.pageYOffset = y;
            //if (document.documentElement) document.documentElement.scrollTop = y;
            //if (document.body) document.body.scrollTop = y;
        }
        function ticketInfoModifyMobile(mobile1, mobile2, mobile3) {
            try {
                $.ajax({
                    type: "post",
                    url: "/user/join/UpdateUserInfoRia.aspx?mobile1=" + mobile1 + "&mobile2=" + mobile2 + "&mobile3=" + mobile3,
                    dataType: "html",
                    contentType: "application/html; charset=utf-8",
                    success: function (_data) {
                        //alert(_data); // 00000
                    }
                });
            } catch (ex) {
            }
        }
        function ticketGuestLogin(name, ssn) {
            var keyObject = document.getElementById("loginform");
            if (keyObject) {
                document.loginform.method = "post";
                document.loginform.id.value = name;
                document.loginform.password.value = ssn;
                document.loginform.returnURL.value = "AA";
                document.loginform.action = "/user/guest/GuestMember.aspx";
                document.loginform.submit();
            }
            else {
                alert("진행중입니다. 화면이 완료된 후에 클릭해주세요.");
                document.location.reload();
            }
        }

    //]]>
    </script>
    
</head>

<body class="" style="">


<div class="skipnaiv">
	<a href="#contents">메인 컨텐츠 바로가기</a>
</div>
<div id="cgvwrap">
	<div class="cgv-ad-wrap">
        <div id="TopBarWrapper" class="sect-head-ad">
            <iframe src="http://ad.cgv.co.kr/NetInsight/html/CGV/CGV_201401/sub@TopBar" width="100%" height="80" title="" frameborder="0" scrolling="no" topmargin="0" leftmargin="0" marginwidth="0" marginheight="0" name="TopBar" id="TopBar"></iframe>
        </div>
    </div>
	<!-- Header -->
	<div id="header">
		<div class="head">
			<h1><a href="/"><img src="http://img.cgv.co.kr/R2014/images/title/h1_cgv.png" alt="CGV"></a></h1>
			<div class="sect-service">
				<h2>서비스 메뉴</h2>
				<ul class="util">
					<li><a href="http://section.cgv.co.kr/event/appRenewal/default.aspx" class="app"><span>CGV 앱다운로드</span></a></li>
					<li><a href="https://www.facebook.com/CJCGV" class="like"><span>Facebook 좋아요!</span></a></li>
					<li><a href="/discount/" class="frugal"><span>알뜰한 영화관람법!</span></a></li> <!-- 할인카드 -->
				</ul>
				<ul class="gnb">
                
                    <li><a href="/user/login/logout.aspx" class="logout" title="로그아웃"><span>로그아웃</span></a></li>
                
                    <li><a href="/user/mycgv/" class="mycgv required-login" data-url="/user/mycgv/"><span>MY CGV</span></a></li>
					<li><a href="/user/vip-lounge/" class="vip"><span>VIP LOUNGE</span></a></li>
					<li><a href="/user/memberShip/ClubService.aspx" class="club specialclub" title="새창"><span>CLUB 서비스</span></a></li>
					<li><a href="http://section.cgv.co.kr/support/Default.aspx" class="customer"><span>고객센터</span></a></li>
					<li><a href="/ticket/eng/newdefault.aspx" class="showtimes"><span>ENGLISH TICKETING</span></a></li>
				</ul>
			</div>

            <div class="im-wrap"> <!-- Important wrap -->
				<h2><img src="http://img.cgv.co.kr/R2014/images/title/h2_ticket.png" alt="TICKET"></h2>
				<!-- Local Navigation Bar -->
				<div class="lnb">
					<h2>CGV 주메뉴</h2>
					<ul id="gnb_list">
						<li class="movie"><a href="/movies/">영화</a>
							<div class="sub-wrap">
								<i></i>
								<div class="smenu">
									<ul>
										<li><a href="/movies/">무비차트</a></li>
										<li><a href="/movies/hd-trailer.aspx">HD 트레일러</a></li>
										<li><a href="/movies/finder.aspx">무비파인더</a></li>
										<li><a href="/movies/point/">평점</a></li>
										<li class="last"><a href="/arthouse/">CGV아트하우스</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li class="booking"><a href="/ticket/">예매</a>
							<div class="sub-wrap">
								<i></i>
								<div class="smenu">
									<ul>
										<li><a href="/ticket/">빠른예매</a></li>
										<li><a href="/reserve/show-times/">상영시간표</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li class="theaters"><a href="/theaters/">극장</a>
							<div class="sub-wrap">
								<i></i>
								<div class="smenu">
									<ul>
										<li><a href="/theaters/">CGV 극장</a></li>
										<li><a href="/theaters/special/">특별관</a></li>
										<li class="last"><a href="/user/memberShip/ClubService.aspx" class="specialclub">CLUB 서비스</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li class="culture"><a href="/culture-event/event/">이벤트&amp;컬쳐</a>
							<div class="sub-wrap">
								<i></i>
								<div class="smenu">
									<ul>
										<li><a href="/culture-event/event/">이벤트</a></li>
										<li><a href="/culture-event/culture-shop/">티켓·팝콘스토어</a></li>
										  <li><a href="/magazine/">매거진</a></li>
										<!--<li><a href="/culture-event/cultureplex/">컬처플렉스</a></li>-->
									
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<!-- /Local Navigation Bar -->
                <!-- Integrated search(통합검색) -->
				<div class="sect-srh">
					<h2>통합검색서비스</h2>
					<fieldset>
						<legend>통합검색</legend>
						<input type="text" id="header_keyword" name="header_keyword" minlength="2" maxlength="20" placeholder="다시태어나도우리">
                        <input type="hidden" id="header_ad_keyword" name="header_ad_keyword" value="다시 태어나도 우리">
						<button type="button" class="btn-go-search" id="btn_header_search">검색</button>
                        <iframe src="http://ad.cgv.co.kr/NetInsight/html/CGV/CGV_201401/main@Search_txt" width="0" height="0" title="" frameborder="0" scrolling="no" marginwidth="0" marginheight="0"></iframe>
					</fieldset>
				</div>
				<!-- /Integrated search(통합검색) -->
				<!-- Quick Phototicket -->
				<div class="sect-phototicket">
					<h2>CGV 포토티켓</h2>
					<a href="http://phototicket.cgv.co.kr/" target="_blank">CGV 포토티켓</a>
				</div>
				<!-- /Quick Phototicket -->
				<!-- Advertisement -->
                
				<div class="ad-partner">
                    <a href="http://section.cgv.co.kr/discount/Special/discount/Default.aspx">
                        <img src="http://img.cgv.co.kr/Event/Event/JehuBanner/2015/0917/web_BC_133.png" alt="비씨카드">
                    </a>
					 <!-- 외부광고영역 -->
				</div>
                
				<!-- /Advertisement -->
			</div>
		</div>

	</div>
	<!-- /Header -->

    	<!-- Contaniner -->
	<div id="contaniner">

        <!-- LineMap -->
        <div id="navigation_line" class="linemap-wrap">
            <div class="sect-linemap">
                <div class="sect-bcrumb">
                    <ul>
                        <li><a href="/"><img alt="home" src="http://img.cgv.co.kr/R2014/images/common/btn/btn_home.png"></a></li>
                        <li><a href="/ticket/">예매</a></li>
                        <li class="last">빠른예매</li>
                    </ul>
                </div>
                <div class="sect-special">
                    <ul> 
                        <li><a href="/user/vip-lounge/">VIP LOUNGE</a></li>
                        <li><a href="/user/memberShip/ClubService.aspx" class="specialclub" title="새창">CLUB 서비스</a></li>
                        <li><a href="#" class="photi" title="새창">포토티켓</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- //LineMap -->

		<!-- Contents Area -->
		<div id="contents" style="height:1px;padding:0;"></div>
        <iframe title="CGV 빠른예매" id="ticket_iframe" src="http://ticket.cgv.co.kr/Reservation/Reservation.aspx?MOVIE_CD=&amp;MOVIE_CD_GROUP=&amp;PLAY_YMD=&amp;THEATER_CD=&amp;PLAY_NUM=&amp;PLAY_START_TM=&amp;AREA_CD=&amp;SCREEN_CD=&amp;THIRD_ITEM=" scrolling="no" frameborder="0" width="100%" height="967" style="width:100%; border:0 none;"></iframe>
		<!-- /Contents Area -->
	</div>
	<!-- /Contaniner -->


	<!-- Footer -->
	<div id="footer">
		<div id="BottomWrapper" class="sect-ad">
            <iframe src="http://ad.cgv.co.kr/NetInsight/html/CGV/CGV_201401/sub@Bottom" width="100%" height="240" title="광고-코이카" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" name="Bottom" id="Bottom"></iframe>
		</div>
		<div class="foot">
			<div class="sect-smuse">
				<h2>특별관 리스트</h2>
				<ul>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=4D14" class="dx">4DX</a></li>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=07" class="imax">IMAX</a></li>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=SCX" class="screenx">SCREENX</a></li>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=SPX" class="spherex">SphereX</a></li>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=SDX" class="soundx">SOUNDX</a></li>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=TEM" class="tempur">Tempur</a></li>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=99" class="gold">GOLDCLASS</a></li>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=103" class="cine">CINE de CHEF</a></li>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=pc" class="cinema">THE PRIVATE CINEMA</a></li>
					<li><a href="http://www.cgv.co.kr/theaters/special/?regioncode=CK" class="kids">Cine kids</a></li>
				</ul>
			</div>
			<div class="sect-cinfo">
				<p class="logo">CJ CGV 로고</p>
				<h2>CJ CGV 회사소개 및 정책</h2>
				<div class="policy">
					<ul>
						<li><a href="http://corp.cgv.co.kr/company/" target="_blank">회사소개</a></li>
						<li><a href="http://corp.cgv.co.kr/company/ir/financial/financial_list.aspx" target="_blank">IR</a></li>
						<li><a href="http://corp.cgv.co.kr/company/recruit/step/default.aspx" target="_blank">채용정보</a></li>
						<li><a href="http://corp.cgv.co.kr/company/advertize/ad_Default.aspx" target="_blank">광고문의</a></li>
						<li><a href="http://corp.cgv.co.kr/company/advertize/af_default.aspx" target="_blank">제휴문의</a></li>
						<li><a href="http://www.cgv.co.kr/rules/service.aspx">이용약관</a></li>
						<li><a href="http://www.cgv.co.kr/rules/organized.aspx">편성기준</a></li>
						<li><a href="http://www.cgv.co.kr/rules/privacy.aspx" class="empha-red">개인정보처리(취급)방침</a></li>
						<li><a href="http://www.cgv.co.kr/rules/disclaimer.aspx">법적고지</a></li>
						<li><a href="http://www.cgv.co.kr/rules/emreject.aspx">이메일주소무단수집거부</a></li>
						<li><a href="http://www.cgv.co.kr/company/coexist.aspx">상생경영</a></li>
						<li><a href="http://www.cgv.co.kr/guide/sitemap.aspx">사이트맵</a></li>
					</ul>
				</div>
				<div class="share">
					<a href="https://www.facebook.com/CJCGV" target="_blank" class="facebook" title="새창">페이스북</a><a href="https://twitter.com/cj_cgv" target="_blank" class="twitter" title="새창">트위터</a><a href="https://www.instagram.com/cgv_korea/" target="_blank" class="instagram" title="새창">인스타그램</a>
				</div>
				<div class="address">
					<address>(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)</address>
					<p class="vl">
						<span>대표이사 : 서정</span><span>사업자등록번호 : 104-81-45690</span><span>통신판매업신고번호 : 2017-서울용산-0662</span>
					</p>
					<p class="vl">
						<span>개인정보보호 책임자 : 마케팅 실장 정종민</span><span>대표이메일 : cjcgvmaster@cj.net</span><span>CGV고객센터 : 1544-1122</span>
					</p>
					<p class="copyright">© 2017 CJ CGV. All Rights Reserved</p>
				</div>
				<div class="familysite">
					<label for="familysite" class="hidden">CJ그룹 계열사 바로가기</label>
					<select id="familysite">
						<option value="">계열사 바로가기</option>
						<optgroup label="CJ그룹">
								<option value="http://www.cj.net/">CJ주식회사</option>
						</optgroup><optgroup label="엔터테인먼트 &amp; 미디어">
						<option value="http://www.cjenm.com/">CJ E&amp;M </option>
						<option value="http://www.cgv.co.kr/">CJ CGV</option>
						<option value="http://www.cjhellovision.com/">CJ헬로비전</option>
						<option value="http://www.cjpowercast.com/">CJ파워캐스트</option>
						</optgroup><optgroup label="식품 &amp; 식품서비스">
								<option value="http://www.cj.co.kr/">CJ제일제당</option>
								<option value="http://www.cjfreshway.com/">CJ프레시웨이</option>
								<option value="http://www.cjfoodville.co.kr/">CJ푸드빌</option>
								<option value="http://www.md1.co.kr/">CJ엠디원</option>
						</optgroup><optgroup label="생명공학">
						<option value="http://www.cj.co.kr/cj-kr/businesses/4/main">CJ제일제당</option>
								<option value="http://www.cjp.co.kr/">CJ헬스케어</option>
						</optgroup><optgroup label="신유통">
						<option value="http://www.cjoshopping.com/index.asp">CJ오쇼핑</option>
								<option value="http://www.cjkoreaexpress.co.kr/">CJ대한통운</option>
								<option value="http://www.cjtelenix.com/">CJ텔레닉스</option>
						<option value="http://www.cjolivenetworks.co.kr/">CJ올리브네트웍스</option>
						</optgroup><optgroup label="인프라">
								<option value="http://www.cjenc.co.kr/">CJ건설</option>
						</optgroup>
					</select>
					<button type="button" title="새창" onclick="goFamilySite()">GO</button>
				</div>
			</div>
		</div>

	</div>
	<!-- /Footer -->

    <!-- Aside Banner :  -->
	
	<!-- //Aside Banner -->
</div>

<script type="text/javascript">
//<![CDATA[
    (function ($) {
        $(function () {

            //검색 입력창 클릭 시 광고값 reset
            $('#header_keyword').on('click', function () {
                $(this).attr('placeholder', '');
                $('#header_ad_keyword').val('');
            });

            //특별관 클럽
            //            $('#header a.specialclub').on('click', function () {
            //                openSpecialClub();
            //                return false;
            //            });


            //            $('.sect-service a.specialclub').on('click', function () {
            //                openSpecialClub();
            //                return false;
            //            });

            //            $('.sect-linemap a.specialclub').on('click', function () {
            //                openSpecialClub();
            //                return false;
            //            });

            //통합검색 상단 검색 버튼
            $('#btn_header_search').on('click', function () {
                if ($('#header_ad_keyword').val() != "")
                    goSearch($('#header_ad_keyword'));      //광고
                else
                    goSearch($('#header_keyword'));

                return false;
            });

            //통합검색 검색어 입력창
            $('#header_keyword').keyup(function (e) {
                if (e.keyCode == 13) goSearch($('#header_keyword'));
            });

            //통합검색
            function goSearch($objKeyword) {

                if ($objKeyword.val() == "") {
                    alert("검색어를 입력해 주세요");
                    $objKeyword.focus();
                    return false;
                }

                location = "/search/?query=" + escape($objKeyword.val());
            }

        });

    })(jQuery);
	
//]]>
</script>

<script language="javascript" type="text/javascript">
    //201402 SYH GA추가
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-47126437-1', 'cgv.co.kr'); //지주사
    ga('create', 'UA-47951671-5', 'cgv.co.kr', { 'name': 'cgvTracker' }); //디마팀
    ga('create', 'UA-47951671-7', 'cgv.co.kr', { 'name': 'rollup' }); //추가
</script>
<!-- Google Tag Manager -->
<noscript>&lt;iframe src="//www.googletagmanager.com/ns.html?id=GTM-NNNFR3"height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
<script>    (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({ 'gtm.start':
            new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-NNNFR3');
</script>
<!-- End Google Tag Manager -->

<!-- 비즈스프링 통계태그 -->
<script type="text/javascript">
    _TRK_CP = "/홈/예매/빠른예매";
</script>
<script type="text/javascript" language="javascript" src="http://img.cgv.co.kr/common/js/insightIS.js"></script>


</body></html>