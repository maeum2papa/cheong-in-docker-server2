<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { postApi } from "../../../services/api";
    import { page } from "$app/stores";
    import { Loading } from "../../../stores/store";

    const id = $page.params.id
    let caseItem = ''
    let beforeImg = ''
    let afterImg = ''

    onMount(async()=>{
        const res = await postApi({
            path: '/api/case',
            data: { id }
        })
        caseItem = res.data[0]
        beforeImg = caseItem.beforeImg
        afterImg = caseItem.afterImg
    })

</script>

{#if caseItem}
<div class="wrap">
    <div class="detail-header">
        <div on:click={()=>goto('/case')}>뒤로</div>
        <p>시공 상세</p>
    </div>
    <div class="detail-body">
        <h3>{caseItem.title}</h3>
        {#if beforeImg && afterImg}
            <div class="img-wrap">
                <img src={beforeImg} alt="">
                <div class="bg-gradient"></div>
                <div>공사 전</div>
            </div>
            <div class="after-arrow">
                <div></div>
                <div></div>
            </div>
            <div class="img-wrap">
                <img src={afterImg} alt="">
                <div class="bg-gradient"></div>
                <div class="after">공사 후</div>
            </div>
        {/if}
        <div class="explanation">
            <p>
                {caseItem.content}
            </p>
        </div>
    </div>
</div>
{/if}
<style lang="scss">
    .detail-header {
        margin-top: 20px;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        font-size: var(--font-size-small);
        font-weight: 700;
        >div {
            display: block;
            width: 8px;
            height: 8px;
            border-left: 2px solid #000000;
            border-top: 2px solid #000000;
            transform: rotate(-45deg);
            text-indent: -999px;
            margin-right: 10px;
        }
    }
    .detail-body {
        h3 {
            font-size: var(--font-size-small-small);
            font-weight: 400;
            margin-bottom: 20px;
        }
        .img-wrap {
            width: 100%;
            height: 200px;
            position: relative;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%);
            >div {
                position: absolute;
                left: 10px;
                bottom: 10px;
                color: #ffffff;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .after {
                color: var(--yellow);
            }
            .bg-gradient {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%);
            }
        }
        .after-arrow {
            position: relative;
            width: 16px;
            height: 16px;
            margin: 10px auto;
            >div:first-child {
                position: absolute;
                top: -2px;
                left: 4px;
                width: 8px;
                height: 8px;
                border-bottom: 1px solid #000000;
                border-right: 1px solid #000000;
                transform: rotate(45deg);
            }
            >div:last-child {
                position: absolute;
                top: 3px;
                left: 4px;
                width: 8px;
                height: 8px;
                border-bottom: 1px solid #000000;
                border-right: 1px solid #000000;
                transform: rotate(45deg);
            }
        }
    }
    .explanation {
        margin-top: 30px;
        p {
            line-height: 1.5em;
        }
    }
</style>