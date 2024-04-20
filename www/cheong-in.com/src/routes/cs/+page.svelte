<script>

</script>

<div class="cs">
    <section class="cs-info">
        <h3>고객센터</h3>
        <p>
            책임 전문가가<br/>
            성실하게<br/>
            답변해드립니다.<br/>
        </p>
        <div class="cs-contact">
            <div>
                <div>전화번호</div>
                <div>010-4094-1034</div>
            </div>
            <div>
                <div>이메일</div>
                <div>kos3023@kakao.com</div>
            </div>
            <div>
                <div>사업자 번호</div>
                <div>789-31-01391</div>
            </div>
        </div>
    </section>
    <section class="cs-counsel">
        <div class="time">상담 시간 <span class="highlight">09:00 ~ 18:00</span></div>
        <div class="call-button">
            <div>
                <span></span>
                <div><a href="tel:01040941034">전화 상담</a></div>
            </div>
            <div>
                <span></span>
                <div><a href="sms:01040941034">문자 상담</a></div>
            </div>
        </div>
        <a href="mailto:kos3023@kakao.com"><div class="tax">
            <div>
                <span></span>
                <div>세금·현금 영수증 신청</div>
            </div>
            <span></span>
        </div></a>
    </section>
</div>

<style lang="scss">
    .cs {
        &-info {
            widows: 100%;
            height: 300px;
            background: url(/images/img_pipe_leak.png) no-repeat;
            background-position: right bottom;
            background-size: 45%;
            background-color: var(--primary);
            padding: 20px;
            >h3 {
                color: #ffffff;
                font-size: var(--font-size-small);
            }
            >p {
                font-size: var(--font-size-normal);
                font-weight: 700;
                line-height: 1.3em;
                padding-top: 40px;
                padding-bottom: 30px;
                color: #ffffff;
                border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            }
        }
        &-contact {
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            >div {
                display: flex;
                >div {
                    color: #ffffff;
                    line-height: 1.75em;
                }
                >div:first-child {
                    flex: 30%;
                    font-weight: 400;
                    opacity: 70%;
                }
                >div:last-child {
                    flex: 70%;
                }
            }
        }
        &-counsel {
            padding: 0 20px;
            margin-top: 30px;
            margin-bottom: 80px;
            .time {
                font-size: var(--font-size-small);
                .highlight {
                    font-size: var(--font-size-normal);
                    font-weight: 700;
                    color: var(--primary);
                }
            }
            .call-button {
                min-width: 288px;
                height: 56px;
                background-color: #fff;
                border: 1px solid var(--primary);
                border-radius: 12px;
                box-shadow: 4px 4px 20px 0px rgba(48, 87, 161, 0.2);
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 0 20px;
                margin: 30px 0;
                font-size: var(--font-size-small);
                >div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50%;
                    span {
                        display: block;
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                }
                >div:first-child {
                    border-right: 1px solid var(--border-color-gray);
                    cursor: pointer;
                    span {
                        background: url(/images/icon_mobile.png) no-repeat;
                        background-position: center;
                        background-color: var(--primary);
                    }
                }
                >div:last-child {
                    cursor: pointer;
                    span {
                        background: url(/images/icon_sms.png) no-repeat;
                        background-position: center;
                        background-color: var(--yellow);
                    }
                }
            }
            .tax {
                min-width: 288px;
                height: 48px;
                background-color: var(--background-gray);
                border: 1px solid var(--border-color-gray);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                margin: 30px 0;
                font-size: var(--font-size-small);
                >div {
                    display: flex;
                    font-size: var(--font-size-small-small-small);
                    >span {
                        width: 16px;
                        height: 16px;
                        background: url(/images/icon_note.png) no-repeat;
                        margin-right: 8px;
                    }
                }
                >span {
                    width: 8px;
                    height: 8px;
                    border-top: 1px solid var(--font-gray);
                    border-right: 1px solid var(--font-gray);
                    display: inline-block;
                    transform: rotate(45deg);
                    top: 13px;
                    right: 20px;
                }
            }
        }
    }
</style>