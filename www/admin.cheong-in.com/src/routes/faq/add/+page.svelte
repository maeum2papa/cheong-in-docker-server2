<script>
    import { goto } from "$app/navigation";
    import { expoInOut } from "svelte/easing";
    import Header from "../../../components/Header.svelte";
    import { postApi } from "../../../services/api";

    let options = ["누수탐지공사", "배관공사", "막힘 소통공사", "방수공사", "칸막이·창틀", "기타 건물유지 보수","기타"]
    let formData = {
        sort: null,
        question: '',
        answer: '',
    }

    const handleSortChange = (e) => {
        formData.sort = parseInt(e.target.value)
    }

    const handleSubmit = async () => {
        const res = await postApi({
            path: '/api/faq/add',
            data: formData
        })
        if(res.msg === 'ok') {
            goto('/faq')
        } 
    }
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
                        <select class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"  on:change={handleSortChange}>
                            <option value="">분류를 선택해주세요.</option>
                            {#each options as item, index}
                                <option value={index+1}>{item}</option>
                            {/each}
                        </select>
                    </div>
                </div>
                
      
              <div class="col-span-full">
                <label for="about" class="block text-sm font-medium leading-6 text-gray-900">질문내용</label>
                <div class="mt-2">
                  <textarea  rows="5" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-1 pr-1"  bind:value={formData.question}/>
                </div>
              </div>

              <div class="col-span-full">
                <label for="about" class="block text-sm font-medium leading-6 text-gray-900">답변내용</label>
                <div class="mt-2">
                  <textarea  rows="5" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-1 pr-1" bind:value={formData.answer}/>
                </div>
              </div>
      
            </div>
          </div>
      
            
      </form>
    
      <div class="flex items-center justify-end gap-x-1 mt-2">
            <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" on:click={()=> {goto('/faq')}}>취소</button>
            <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" on:click={handleSubmit}>저장</button>
        </div>
    </div>



<style lang="scss">
</style>