# Color

<style scoped>
.demo:after {
    clear: both;
    display: table;
    content: "";
}
.demo-color-box {
    position: relative;
    border-radius: 4px;
    padding: 20px;
    height: 114px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    width: calc(33.33333% - 0.6666666em);
    margin-top: 1em;
    margin-right: 1em;
    float: left;
}
.demo-color-box:nth-child(3n+3) {
    margin-right: 0;
}
.demo-color-box .value {
    font-size: 12px;
    opacity: .69;
    line-height: 24px;
}
.bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;
    background-color: #fff;
}
.bg-success-sub-item {
    width: 50%;
    height: 100%;
    float: left;
}
.bg-success-sub-item:first-child {
    border-radius: 0 0 0 4px;
}
.bg-success-sub-item:last-child {
    border-radius: 0 0 4px 0;
}
</style>

## 主色

<div class="demo">
    <div class="demo-color-box" style="background: #ff4e6a"> 红
        <div class="value">#ff4e6a</div>
        <div class="bg-color-sub">
            <div class="bg-success-sub-item" style="background: rgba(255, 78, 106,.3)"></div>
            <div class="bg-success-sub-item" style="background: rgba(255, 78, 106,.15)"></div>
        </div>
    </div>
    <div class="demo-color-box" style="background: #ffaa73"> 橙
        <div class="value">#ffaa73</div>
        <div class="bg-color-sub">
            <div class="bg-success-sub-item" style="background: rgba(255, 170, 115,.3)"></div>
            <div class="bg-success-sub-item" style="background: rgba(255, 170, 115,.15)"></div>
        </div>
    </div>
    <div class="demo-color-box" style="background: #fed466"> 黄
        <div class="value">#fed466</div>
        <div class="bg-color-sub">
            <div class="bg-success-sub-item" style="background: rgba(254, 212, 102,.3)"></div>
            <div class="bg-success-sub-item" style="background: rgba(254, 212, 102,.15)"></div>
        </div>
    </div>
    <div class="demo-color-box" style="background: #3cdc82"> 绿
        <div class="value">#3cdc82</div>
        <div class="bg-color-sub">
            <div class="bg-success-sub-item" style="background: rgba(60, 220, 130,.3)"></div>
            <div class="bg-success-sub-item" style="background: rgba(60, 220, 130,.15)"></div>
        </div>
    </div>
    <div class="demo-color-box" style="background: #64dcf0"> 青
        <div class="value">#ff4e6a</div>
        <div class="bg-color-sub">
            <div class="bg-success-sub-item" style="background: rgba(100, 220, 240,.3)"></div>
            <div class="bg-success-sub-item" style="background: rgba(100, 220, 240,.15)"></div>
        </div>
    </div>
    <div class="demo-color-box" style="background: #64b9ff"> 蓝
        <div class="value">#ffaa73</div>
        <div class="bg-color-sub">
            <div class="bg-success-sub-item" style="background: rgba(100, 185, 255,.3)"></div>
            <div class="bg-success-sub-item" style="background: rgba(100, 185, 255,.15)"></div>
        </div>
    </div>
    <div class="demo-color-box" style="background: #b4b4ff"> 紫
        <div class="value">#fed466</div>
        <div class="bg-color-sub">
            <div class="bg-success-sub-item" style="background: rgba(180, 180, 255,.3)"></div>
            <div class="bg-success-sub-item" style="background: rgba(180, 180, 255,.15)"></div>
        </div>
    </div>
</div>