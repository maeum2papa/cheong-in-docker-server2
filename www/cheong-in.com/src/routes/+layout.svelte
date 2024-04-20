<script>
    import BottomMenu from "../components/BottomMenu.svelte";
	import "../scss/common.scss";
</script>

<svelte:head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <title>누수공사전문 대전청인설비공사</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="Author" content="누수공사전문 대전청인설비공사">
        <meta name="Keywords" content="누수,하수도뚫기,수도녹임,배관공사,난방공사,방수공사,건물보수,집보수,세면대교체,변기교체,변기공사,세면대공사">
        <meta name="Description" content="누수공사전문, 하수・오수・난방 배관공사, 언수도녹임, 막힘 소통공사, 방수공사, 타일공사, 양변기・세면기 교체">
    
        <meta property="og:type" content="article">
        <meta property="og:title" content="누수공사전문 대전청인설비공사">
        <meta property="og:description" content="누수공사전문, 하수・오수・난방 배관공사, 언수도녹임, 막힘 소통공사, 방수공사, 타일공사, 양변기・세면기 교체">
        <meta property="og:image" content="https://cheong-in.com/og_image.jpg">
        <meta property="og:url" content="https://cheong-in.com">
    
        <meta name="google-site-verification" content="wra9ecnyTTr2akMK-bX9TTY6Qyh_1F9HQlgNmuunShg">
    
        <meta name="naver-site-verification" content="85cde738bec1d717124da8d0f7dad49d8ee589ed">
    
</svelte:head>

<div class="app">
	<main>
		<slot />
	</main>
	<BottomMenu/>
</div>