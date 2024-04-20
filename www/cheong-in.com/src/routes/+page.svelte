<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { postApi } from "../services/api";
    import SlideTab from "../components/SlideTab.svelte";
    import CaseList from "../components/CaseList.svelte";

    let caseList = []
    let isActive = 0

    const handleTab = async (index) => {
        isActive = index
        const res = await postApi({
            path: '/api/case',
            data: { sort: parseInt(index), limit: 3 }
        })
        caseList = res.data
    }

    onMount(async() => {
        const res = await postApi({
            path: '/api/case',
            data: { limit: 3 }
        })
        caseList = res.data
    })
    
</script>

<section class="main-area">
    <div class="wrap">
        <div class="logo">
            <div>logo</div>
            <h1>대전청인설비공사</h1>
        </div>
        <p>
            청인설비공사는 <br/>
            대전·충남일원 <span class="desc">(금산, 논산, 공주, 옥천)</span><br/>
            <span class="highlight">누수공사 전문업체</span> 입니다.
        </p>
        <button>
            <span></span>
            <div><a href="tel:01040941034">전화 상담</a></div>
        </button>
    </div>
    <div class="work-count">
        <div>누적 시공수</div>
        <div><span class="highlight">219</span>회</div>
    </div>
</section>
<section class="case-area">
    <div class="case-header">
        <h3>시공 사례</h3>
        <SlideTab {handleTab} {isActive}/>
        <div class="sub-text">상담, 현장방문, 탐지, 시공, A/S 전 과정을 책임 전문가가 합리적인 비용으로 진행합니다.</div>
    </div>
    <div class="case-body">
        <CaseList {caseList}/>
    </div>
    <div class="button-area">
        <button>
            <div on:click={()=>{goto('/case')}}>전체보기</div>
            <span></span>
        </button>
    </div>
</section>
<section class="service-area">
    <h3>서비스</h3>
    <p class="sub-text">청인설비공사의 업무를 소개합니다.</p>
    <!-- <div class="service-wrap"> -->
        <div class="service-wrap">
            <div>
                <img src="images/icon_leak.svg" alt="">
                <strong>누수탐지공사</strong>
                <p>전문기계로 누수를 탐지하여 누수의 원인을 공사하여 문제를 해결해드립니다.</p>
            </div>
            <div>
                <img src="images/icon_pipe.svg" alt="">
                <strong>배관공사</strong>
                <p>하수·오수·냉/온수·난방의 배관공사를 완벽하게 해드립니다.</p>
            </div>
        </div>
        <div class="service-wrap">
            <div>
                <img src="images/icon_clear.svg" alt="">
                <strong>막힘 소통공사</strong>
                <p>하수·오수·씽크대·화장실 변기 막힘을 시원하게 뚫어드립니다.</p>
            </div>
            <div>
                <img src="images/icon_waterproof.svg" alt="">
                <strong>방수공사</strong>
                <p>옥상·창틀·화장실에 물샘 없이 방수공사를 해드립니다.</p>
            </div>
        </div>
        <div class="service-wrap">
            <div>
                <img src="images/icon_window.svg" alt="">
                <strong>칸막이·창틀</strong>
                <p>주방, 베란다, 세탁실, 화장실의 칸막이 및 타일 공사를 해드립니다.</p>
            </div>
            <div>
                <img src="images/icon_repair.svg" alt="">
                <strong>기타 건물유지 보수</strong>
                <p>건물을 유지 또는 보수하면서 필요한 모든 공사를 해드립니다.</p>
            </div>
        </div>
    <!-- </div> -->
</section>

<style lang="scss">
    .main-area {
        width: 100%;
        height: 490px;
        position: relative;
        background: url(/images/img_main_light.png) no-repeat;
        background-size: 80%;
        background-position: right bottom;
        background-color: #F1F5FC;
        .logo {
            padding-top: 20px;
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            >div {
                width: 24px;
                height: 24px;
                text-indent: -999px;
                background: url(/images/icon_logo.svg) no-repeat;
                background-size:contain;
                background-position: center;
                margin-right: 10px;
            }
            >h1 {
                font-size: var(--font-size-small-small-small);
                font-weight: 700;
            }
        }
        p {
            font-size: var(--font-size-normal);
            font-weight: 700;
            line-height: 1.25em;
            margin-bottom: 30px;
            .desc {
                font-size: var(--font-size-small-small-small);
                font-weight: 400;
            }
            
        }

        button {
            background-color: var(--primary);
            display: flex;
            align-items: center;
            width: 118px;
            height: 40px;
            span {
                width: 16px;
                height: 16px;
                background: url(/images/icon_mobile.png) no-repeat;
                background-position: center;
            }
            div {
                margin-left: 8px;
                a { color: #ffffff; }
            }
        }
        .work-count {
            position: absolute;
            bottom: -36px;
            left: 50%;
            transform: translateX(-50%);
            min-width: 288px;
            height: 72px;
            background-color: #ffffff;
            border: 1px solid var(--primary);
            border-radius: 12px;
            box-shadow: 4px 4px 20px 0px rgba(48, 87, 161, 0.2);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            div {
                font-size: var(--font-size-small-small);
                &:first-of-type {
                    font-weight: 500;
                }
                &:last-of-type {
                    .highlight {
                        font-size: var(--font-size-normal);
                        font-weight: 700;
                    }
                }
            }
        }
    }
    .case-area {
        margin-top: 100px;
        // h3, .sub-text {
        //     padding: 0 20px;
        // }
        .case-header {
            padding-left: 20px;
            .slide-menu {
                width: 100%;
                overflow-x: scroll;
                ul {
                    margin-top: 20px;
                    margin-bottom: 8px;
                    display: flex;
                    flex-wrap: nowrap;
                    gap: 8px;
                    li {
                        flex: 0 0 auto;
                        padding: 8px 16px;
                        border-radius: 80px;
                        background-color: var(--background-gray);
                        color: var(--font-gray);
                        font-size: 13px;
                        cursor: pointer;
    
                        &.active {
                            background-color: var(--primary);
                            color: #ffffff;
                        }
                    }
                }
            }
            .sub-text {
                padding-right: 20px;
            }
        }
        .case-body {
            margin: 20px;
            border-top: 1px solid var(--border-color-gray);
            .case-title {
                font-size: var(--font-size-small-small);
                margin-top: 30px;
                margin-bottom: 10px;
            }
            .case-contents {
                display: flex;
                gap: 4px;
                .img-wrap {
                    width: 48%;
                    height: 120px;
                    border-radius: 8px;
                    overflow: hidden;
                    position: relative;
                    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%);
                    img { width: 100%;};
                    p {
                        position: absolute;
                        left: 10px;
                        bottom: 10px;
                        color: #ffffff;
                        font-size: 11px;
                    }
                    &:last-child{
                        p { color: var(--yellow) }
                    }
                    .bg-gradient {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%);
                    }
                }
            }
        }
    }
    .button-area {
        display: flex;
        justify-content:  center;
        button {
            border: 1px solid var(--border-color-gray);
            width: 115px;
            background: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 400;
            >div {
                color: var(--font-gray);
            }
            >span {
                width: 8px;
                height: 8px;
                border-top: 1px solid var(--font-gray);
                border-right: 1px solid var(--font-gray);
                display: inline-block;
                transform: rotate(45deg);
                top: 13px;
                right: 20px;
            }
        }
    }
    .service-area {
        padding: 40px 20px;
        margin-top: 30px;
        margin-bottom: 50px;
        background-color: var(--background-gray);
        .service-wrap {
            display: flex;
            gap: 4px;
            margin-bottom: 4px;
            >div {
                width: 50%;
                height: auto;
                padding: 24px 16px;
                display: flex;
                flex-direction: column;
                background-color: #ffffff;
                border-radius: 8px;
                gap: 10px;
                img {
                    width: 40px;
                    height: 40px;
                }
                p {
                    line-height: 1.25em;
                    color: var(--font-light-gray);
                }
            }
        }
    }
    .highlight {
        color: var(--primary);
    }
    h3{
        font-size: var(--font-size-small);
        font-weight: 700;
    }
    .sub-text {
        font-size: var(--font-size-small-small-small);
        line-height: 20px;
        color: var(--font-gray);
        margin-top: 10px;
        margin-bottom: 20px;
    }
</style>