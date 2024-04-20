<script>
    import { cAlert,Loading } from "../../stores/store";
    import { postApi } from "../../services/api";
    import { onMount } from "svelte";

    let formData = {
        email : ''
    }

    let inputs = {

    }

    const handleLogin = async() => {

        if(formData.email==''){
            $cAlert = {flag:true,msg:'아이디를 입력해 주세요.',feedback:()=>{inputs.email.select()}};
            return false;
        }

        if(formData.password==''){
            $cAlert = {flag:true,msg:'비밀번호를 입력해 주세요.',feedback:()=>{inputs.password.select()}};
            return false;
        }
        
        const res = await postApi({
            path:'/api/login',
            data:formData
        });

        if(res.msg=='ok'){
            location.replace("/case");
        }else{
            $cAlert = {flag:true,msg:'계정정보가 일치하지 않습니다.',feedback:()=>{inputs.password.select()}};
            return false;
        }
    }

    const handleAutoSubmit = (e) =>{
      if(e.keyCode==13){
        handleLogin();
      }
    }


    onMount(async()=>{

        const res = await postApi({
            path:'/api/auth'
        });

        if(res.msg=='ok'){
            location.replace("/case");
        }

    });
</script>



<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">청인설비 홈페이지 관리</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">아이디</label>
          <div class="mt-2">
            <input id="email" name="text" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3" bind:value={formData.email} bind:this={inputs.email}>
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">비밀번호</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3" bind:value={formData.password} bind:this={inputs.password} on:keydown={handleAutoSubmit}>
          </div>
        </div>
  
        <div>
          <button type="button" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" on:click={handleLogin}>로그인</button>
        </div>
      </form>

    </div>
  </div>
  

<style lang="scss">
   
</style>
