<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { postApi } from "../../../services/api";
    import { goto } from "$app/navigation";
    import Header from "../../../components/Header.svelte";
    
    let caseItem = ''
    let beforeImg = ''
    let afterImg = ''
    const id = $page.params.id

    onMount(async()=>{
        const res = await postApi({
            path: '/api/case',
            data: { id }
        })
        caseItem = res.data[0]
        beforeImg = caseItem.beforeImg
        afterImg = caseItem.afterImg
    })

    const handleDelete = async() => {
        if(window.confirm('삭제하시겠습니까?')){
            const res = await postApi({
                path: '/api/case/delete',
                data: {id}
            })
            if(res.msg == 'ok'){
                goto('/case')
            }
        }
    }
</script>

{#if caseItem}

<Header></Header>



<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
    <div class="relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0">
        <div>
            <div>
                
                <div class="text-right">
                    <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  on:click={()=>{goto('/case')}}>목록</button>
                    <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  on:click={()=>{goto(`/case/edit/${id}`)}}>수정</button>
                    <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  on:click={()=>handleDelete(id)}>삭제</button>
                </div>

                <p class="text-base font-semibold leading-7 text-indigo-600">시공사례</p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{caseItem.title}</h1>
            </div>
        </div>

        <div class="flex gap-2  mt-6">
            <div><img src={beforeImg} alt=""></div>
            <div class="flex justify-center items-center">▸▸</div>
            <div><img src={afterImg} alt=""></div>
        </div>

        <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg mt-6">
            <p>{caseItem.content}</p>
        </div>

    </div>
</div>

{/if}


<style lang="scss">
    
</style>