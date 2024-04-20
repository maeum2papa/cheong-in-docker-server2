<script>
    import { onMount } from "svelte";
    import { postApi } from "../../services/api";
    import Accordion from "../../components/Accordion.svelte";
    import SlideTab from "../../components/SlideTab.svelte";
    import Pagination from "../../components/Pagination.svelte";

    let faqList = []
    let isActive = 0
    let currentPage = 1
    let totalDocsCount
    let listLimit = 10
    let pageCount = 5
    
    const requestData = {
        page: currentPage,
        limit: listLimit
    }

    const handleTab = async (index) => {
        isActive = index
        requestData.sort = parseInt(isActive)
        await handleGetFaq()
    }

    const handleGetFaq = async () => {
        requestData.page = currentPage
        requestData.sort = parseInt(isActive)
        const res = await postApi({
            path: '/api/faq',
            data: requestData
        })
        faqList = res.data
        totalDocsCount = res.totalDocs //pagintion에서 사용될 총 faq 개수

    }
    
    const handlePageClick = async (item) => {
        currentPage = item;
        await handleGetFaq()
    }
    
    const handlePrev = async ()=>{
        currentPage -= 1
        await handleGetFaq()
    }
    
    const handleNext = async ()=>{
        currentPage += 1
        await handleGetFaq()
    }
    
    onMount(async() => {
        const res = await postApi({
            path: '/api/faq',
            data: requestData
        })
        faqList = res.data
        totalDocsCount = res.totalDocs
    })
</script>

<div class="faq">
    <div class="faq-header">
        <h3>자주하는 질문</h3>
        <SlideTab {handleTab} {isActive}/>
    </div>
    <div class="faq-body">
        {#each faqList as item}
            <Accordion>
                <span slot="head">{item.question}</span>
                <div slot="details" class="details">
                    <p class="inner">{item.answer}</p>
                </div>
            </Accordion>
        {/each}
    </div>
    {#if totalDocsCount}
        <Pagination
            bind:currentPage={currentPage} 
            {handlePageClick}
            {handlePrev}
            {handleNext}
            {totalDocsCount}
            {pageCount}
            {listLimit}
        />
    {/if}
</div>

<style lang="scss">
    .faq {
        margin-top: 20px;
        &-header {
            padding-left: 20px;
            .sub-text {
                padding-right: 20px;
            }
        }
        &-body {
            margin: 20px;
            border-top: 1px solid var(--border-color-gray);
            .details {
                background-color: var(--background-gray);
                border-bottom: 1px solid var(--border-color-gray);
            }
            .inner {
                padding: 24px 16px;
                line-height: 1.25em;
            }
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