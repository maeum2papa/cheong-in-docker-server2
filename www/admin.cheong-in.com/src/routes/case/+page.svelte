<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { postApi } from "../../services/api";
    import { dateFormat } from "../../services/format";
    import Pagination from "../../components/Pagination.svelte";
    import { auth } from "../../services/auth";
    import { Loading } from "../../stores/store"
    import Header from "../../components/Header.svelte";

    let caseList = []
    let currentPage = 1
    let totalDocsCount
    let listLimit = 20
    let pageCount = 5

    const requestData = {
        page: currentPage,
        limit: listLimit
    }

    const handleGetCase = async() => {
        const res = await postApi({
            path: '/api/case',
            data: requestData
        })
        caseList = res.data
    }

    const handlePageClick = (item) => {
        currentPage = item;
        requestData.page = currentPage
        handleGetCase()
    }

    const handlePrev = ()=>{
        currentPage -= 1
        requestData.page = currentPage
        handleGetCase()
    }
    
    const handleNext = ()=>{
        currentPage += 1
        requestData.page = currentPage
        handleGetCase()
    }
    
    onMount(async() => {
        const resAuth = await auth();
        
        if(resAuth!='ok'){
            location.replace("/login");
            return false;
        }
        
        $Loading = {flag:true};
        const res = await postApi({
            path: '/api/case',
            data: requestData
        })
        caseList = res.data
        totalDocsCount = res.totalDocs
        $Loading = {flag:false};
    })
</script>

<Header></Header>


<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
    <div class="text-right">
        <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  on:click={()=>{ goto('/case/add') }}>시공사례 등록</button>
    </div>

    <ul role="list" class="divide-y divide-gray-100 border-t border-gray-200  mt-2">
        {#each caseList as item, index}
        <li class="flex justify-between gap-x-6 py-5 cursor-pointer" on:click={()=>{ goto(`/case/${item.idx}`) }}>
        <div class="flex gap-x-4">
            <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">{index+1}. {item.title}</p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500 ps-4">{dateFormat(item.insdt)}</p>
            </div>
        </div>
        </li>
        {/each}
    </ul>
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
  

<style lang="scss">
    
</style>