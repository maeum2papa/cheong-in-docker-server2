<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let isActive = ''
    let navOption = [
        {
            route:'home',
            name: '메인'
        }, {
            route:'case',
            name: '시공사례'
        }, {
            route: 'faq',
            name: 'FAQ',
        }, {
            route: 'cs',
            name: '고객센터'
        }]

    onMount(()=>{
        if($page.url.pathname === '/') {
            isActive = 'home'
        } else {
            isActive = $page.url.pathname.slice(1)
        }
    })
</script>
<nav>
    <ul>
        {#each navOption as item, index}
            <li>
                <a href={item.route === 'home' ? '/' : `/${item.route}`} on:click={()=>{isActive = item.route}}>
                    <div class={item.route+(isActive ===  item.route? " active": "")}></div>
                    <div>{item.name}</div>
                </a>
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    nav {
        width: 100%;
        padding: 10px 0;
        position: fixed;
        bottom: 0;
        border-top: 1px solid var(--border-color-gray);
        z-index: 1000;
        background-color: #ffffff;
    }
    ul {
        display: flex;
        justify-content: space-between;
        li {
            width: 25%;
            cursor: pointer;
            >a {
                display: flex;
                flex-direction: column;
                align-items: center;
                >div {
                    font-size: 11px;
                }
            }
        }
    }
    .home, .case, .faq, .cs {
        width: 24px;
        height: 24px;
        background-position: center;
        background-size: cover;
    }
    .home {
        background: url(/images/icon_home_n.png) no-repeat;
        &.active {
            background: url(/images/icon_home_s.png) no-repeat;
        }
    }
    .case {
        background: url(/images/icon_tool_n.png) no-repeat;
        &.active {
            background: url(/images/icon_tool_s.png) no-repeat;
        }
    }
    .faq {
        background: url(/images/icon_question_n.png) no-repeat;
        &.active {
            background: url(/images/icon_question_s.png) no-repeat;
        }
    }
    .cs {
        background: url(/images/icon_telephone_n.png) no-repeat;
        &.active {
            background: url(/images/icon_telephone_s.png) no-repeat;
        }
    }
</style>