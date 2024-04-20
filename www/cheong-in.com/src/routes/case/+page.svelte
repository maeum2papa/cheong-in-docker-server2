<script>
    import { onMount } from "svelte";
    import { postApi } from "../../services/api";
    import SlideTab from "../../components/SlideTab.svelte";
    import CaseList from "../../components/CaseList.svelte";
    import { Loading } from "../../stores/store"
    
    let caseList = []
    let isActive = 0 //탭 메뉴 active
    let caseCnt
    let limit = 4

    const handleTab = async (index) => {
        isActive = index
        const res = await postApi({
            path: '/api/case',
            data: { sort: parseInt(index) }
        })
        caseList = res.data
    }

    onMount(async() => {
        const res = await postApi({
            path: '/api/case',
            data: { limit }
        })
        caseList = res.data
        caseCnt = res.totalDocs
    })

    const getCase = async () => {
        const res = await postApi({
            path: '/api/case',
            data: { limit }
        })
        caseList = res.data
        caseCnt = res.totalDocs
    }

    const onScroll =  (e) => {
        let timer;

        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            $Loading = {flag:true};
            if (timer) clearTimeout(timer);
            timer = setTimeout(async () => {
                limit += limit
                await getCase()
                $Loading = {flag:false};
            }, 500);
        }
    }

</script>

<svelte:window on:scroll={onScroll} />

<div class="case">
    <div class="case-header">
        <h3>시공 사례</h3>
        <SlideTab {handleTab} {isActive}/>
        <div class="sub-text">상담, 현장방문, 탐지, 시공, A/S 전 과정을 책임 전문가가 합리적인 비용으로 진행합니다.</div>
    </div>
    <div class="case-body">
        <CaseList {caseList}/>
    </div>
</div>

<style lang="scss">
    .case {
        margin-top: 20px;
        &-header {
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
        &-body {
            margin: 20px 20px 80px;
            border-top: 1px solid var(--border-color-gray);
        }
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