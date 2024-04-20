<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { postApi } from "../../../../services/api";
    import { resizeImage } from "../../../../services/resizeimage";
    import { cAlert } from "../../../../stores/store"; 
    import Header from "../../../../components/Header.svelte";

    let options = ["누수탐지공사", "배관공사", "막힘 소통공사", "방수공사", "칸막이·창틀", "기타 건물유지 보수"]
    const id = $page.params.id
    let caseItem

    let formData = {
        sort: '',
        title: '',
        content: '',
        beforeImg: '',
        afterImg: '',
        idx: id
    }

    let inputs = {
        sort: {},
        title: {},
        content: {},
        beforeImg: {},
        afterImg: {}
    }

    const handleSortChange = (e) => {
        formData.sort = parseInt(e.target.value)
    }

    const handleSubmit = async () => {

        if(formData.sort==''){
            $cAlert = {flag:true,msg:'분류를 선택해 주세요.',feedback:()=>{inputs.sort.focus()}};
            return false;
        }
        if(formData.title==''){
            $cAlert = {flag:true,msg:'제목을 입력해 주세요.',feedback:()=>{inputs.title.focus()}};
            return false;
        }
        if(formData.beforeImg==''){
            $cAlert = {flag:true,msg:'공사 전 사진을 등록해 주세요.',feedback:()=>{inputs.beforeImg.focus()}};
            return false;
        }
        if(formData.afterImg==''){
            $cAlert = {flag:true,msg:'공사 후 사진을 등록해 주세요.',feedback:()=>{inputs.afterImg.focus()}};
            return false;
        }
        if(formData.content==''){
            $cAlert = {flag:true,msg:'내용을 입력해 주세요.',feedback:()=>{inputs.content.focus()}};
            return false;
        }

        const res = await postApi({
            path: '/api/case/edit',
            data: formData
        })
        if(res.msg === 'ok') {
            goto(`/case/${id}`)
        } 
    }

    const handleFileInput = async (e) => {
        const resizeImg = await resizeImage(e.target.files[0]);
        formData[e.target.name] = resizeImg
    }

    onMount(async()=>{
        const res = await postApi({
            path: '/api/case',
            data: {id}
        })
        caseItem = res.data[0]
        formData = caseItem
        formData.sort = parseInt(caseItem.sort)
    })
</script>

<Header></Header>


<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
<form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
       
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div class="sm:col-span-3">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">분류</label>
                <div class="mt-2">
                    <select class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" bind:value={formData.sort} on:change={handleSortChange}  bind:this={inputs.sort}>
                        <option value="">분류를 선택해주세요.</option>
                        {#each options as item, index}
                            <option value={index+1}>{item}</option>
                        {/each}
                    </select>
                </div>
            </div>
            
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">제목</label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input type="text" class="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith"  bind:value={formData.title}  bind:this={inputs.title}>
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">공사전</label>
                  <div class="mt-2">
                    {#if formData.beforeImg}
                        <img src={formData.beforeImg}>
                    {/if}
                    
                    <label class="block mt-2">
                        <button on:click={()=>{inputs.beforeImg.click()}} class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">사진 선택</button>
                        <span class="sr-only">Choose profile photo</span>
                        <input type="file" class="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100 hidden
                        "  name="beforeImg" on:change={handleFileInput} bind:value={formData.beforeImg}  bind:this={inputs.beforeImg} />
                    </label>

                  </div>
                </div>
      
                <div class="sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">공사후</label>
                  <div class="mt-2">
                    
                    {#if formData.afterImg}
                        <img src={formData.afterImg}>
                    {/if}

                    <label class="block mt-2">
                        <button on:click={()=>{inputs.afterImg.click()}} class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">사진 선택</button> 
                        <span class="sr-only">Choose profile photo</span>
                        <input type="file" class="block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-violet-50 file:text-violet-700
                          hover:file:bg-violet-100 hidden
                        " name="afterImg" on:change={handleFileInput} bind:value={formData.afterImg}  bind:this={inputs.afterImg}/>
                      </label>
                  </div>
                </div>
      
            </div>
          </div>
  
          <div class="col-span-full">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">내용</label>
            <div class="mt-2">
              <textarea  rows="5" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-1 pr-1"  bind:value={formData.content}  bind:this={inputs.content}></textarea>
            </div>
          </div>
  
        </div>
      </div>
  
        
  </form>

  <div class="flex items-center justify-end gap-x-1 mt-2">
        <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" on:click={()=> {goto('/case/'+id)}}>취소</button>
        <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" on:click={handleSubmit}>저장</button>
    </div>
</div>


<style lang="scss">
    
</style>