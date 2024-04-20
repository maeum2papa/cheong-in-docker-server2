<script>
    import { goto } from "$app/navigation";

    export let caseList;

</script>

{#each caseList as item}
    <div class="case-title">{item.title}</div>
    <div class="case-contents" on:click={()=>{ goto(`/case/${item.idx}`) }}>
        <div class="img-wrap">
            <img src={item.beforeImg} alt="">
            <div class="bg-gradient"></div>
            <p>공사 전</p>
        </div>
        <div class="img-wrap">
            <img src={item.afterImg} alt="">
            <div class="bg-gradient"></div>
            <p>공사 후</p>
        </div>
    </div>
{/each}
<div></div>

<style lang="scss">
        .case-title {
            font-size: var(--font-size-small-small);
            margin-top: 30px;
            margin-bottom: 10px;
        }
        .case-contents {
            display: flex;
            justify-content: space-between;
            .img-wrap {
                width: 49%;
                height: 160px;
                border-radius: 8px;
                overflow: hidden;
                position: relative;
                
                img { 
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
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
    
</style>