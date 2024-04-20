<script>
    export let handleTab 
    export let isActive
    let slideMenu = ['전체', '누수탐지공사', '배관공사', '막힘 소통공사', '방수공사', '칸막이·창틀', '기타 건물유지 보수', '기타']
</script>

<div class="slide-menu">
    <ul>
        {#each slideMenu as item, index}
            <li on:click={()=>handleTab(index)} class={isActive == index ? 'active': ''}>{item}</li>
        {/each}
    </ul>
</div>

<style lang="scss">
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

    //스크롤 숨김
    .slide-menu::-webkit-scrollbar {
        display: none;
    }
    .slide-menu {
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
    }
</style>