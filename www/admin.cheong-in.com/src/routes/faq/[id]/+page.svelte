<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { postApi } from "../../../services/api";
    import { category } from "../../../services/format";
    import { goto } from "$app/navigation";
    import Header from "../../../components/Header.svelte";
    
    let faq = ''
    const id = $page.params.id

    onMount(async()=>{
        const res = await postApi({
            path: `/api/faq`,
            data: { id }
        })
        faq = res.data[0]
    })

    const handleDelete = async() => {
        if(window.confirm('삭제하시겠습니까?')){
            const res = await postApi({
                path: '/api/faq/delete',
                data: {id}
            })
            if(res.msg == 'ok'){
                goto('/faq')
            }
        }
    }
</script>

<Header></Header>





<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
    <div class="relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0">
        <div>
            <div>
                
                <div class="text-right">
                    <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  on:click={()=>{goto('/faq')}}>목록</button>
                    <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  on:click={()=>{goto(`/faq/edit/${id}`)}}>수정</button>
                    <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  on:click={()=>handleDelete(id)}>삭제</button>
                </div>

                <p class="text-base font-semibold leading-7 text-indigo-600">{category(faq.sort)}</p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{faq.question}</h1>
            </div>
        </div>

        <div class="max-w-xl text-base leading-7 text-gray-700  mt-6">
            <p>{faq.answer}</p>
        </div>

    </div>
</div>
