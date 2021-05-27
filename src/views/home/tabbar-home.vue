<template xmlns="http://www.w3.org/1999/html">
    <div>
<section style="padding: 10px">
    <!--<img src="../../assets/images/food_bimg.jpeg">-->
    <section style="display: flex;justify-content: space-between">
        <span >骆功兵</span>
        <span style="font-size: 12px;font-color:red;">
            订单量:300吨</span>
    </section>
    <section>
    <p style="display:flex;font-size: 14px;">已选0笼/可选10笼</p>
        <p style="display:flex;font-size: 12px;">请在2021年5月20日前完成提交</p>
    </section>
</section>
        <!--<van-cell title="单元格" value="内容" size="large" />-->
        <div>
            <van-row style="display: flex">
                <van-col span="4">
        <van-sidebar v-model="activeKey" style="height: 23rem;background-color: #f7f8fa">
            <van-sidebar-item title="10月" />
            <van-sidebar-item title="11月" />
            <van-sidebar-item title="12月" />
        </van-sidebar>
                </van-col>
                <van-col span="20">
        <div style="background-color: red">33333333</div>
                </van-col>
            </van-row>
        </div>
        <section class="buy_cart_container cart_icon_activity">
            <section class="cart_icon_num">
                <div class="cart_icon_container" >
<span class="cart_list_length">
                                    56
                                </span>
                    <img src="../../assets/images/cart_icon.png" class="cart_icon"/>
                </div>
            </section>
            <section class="gotopay" :class="{gotopay_acitvity: minimumOrderAmount <= 0}">
                <span class="gotopay_button_style" v-if="minimumOrderAmount > 0">还差¥{{minimumOrderAmount}}起送</span>
                <router-link :to="{path:'/confirmOrder', query:{geohash, shopId}}" class="gotopay_button_style" v-else >{{info}}提交意向</router-link>
                <!--<router-link :to="{path:'/confirmOrder',}" style="color: red">提交意向2</router-link>-->
            </section>

        </section>
    </div>
</template>

<script>
    import { Col, Row,Sidebar,SidebarItem,Cell,CellGroup } from 'vant';
    // import axios from 'axios';
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import ImagePreviewItem from "vant/es/image-preview/ImagePreviewItem";

    const axios=require('axios');

    export default {
        // name: 'Home',
        data() {
            return {
                activeKey: 0,
                minimumOrderAmount:0,
                info: null
            };
        },
        components: {
            ImagePreviewItem,
            HelloWorld,
            [Col.name]: Col,
            [Row.name]: Row,
            [Sidebar.name]:Sidebar,
            [SidebarItem.name]:SidebarItem,
            [Cell.name]:Cell,
            [CellGroup.name]:CellGroup
        },
        mounted ()
        {
            // this.activeKey=1;
            // axios
            //     .get('https://mock.yonyoucloud.com/mock/16584/shangpin')
            //     .then(response => (this.info = response.name))
            //     .catch(function (error) { // 请求失败处理
            //         console.log(error);
            //     });
            // this.activeKey=3;
        }
    }


</script>

<style lang="scss" scoped>
    .buy_cart_container {
        position: absolute;
        background-color: #3d3d3f;
        bottom: 0;
        left: 0;
        z-index: 13;
        display: flex;
        width:100%;
        height: 2rem;
        .cart_icon_num {
            flex: 1;
            .cart_icon_container {
                display: flex;
                background-color: #006025;
                position: absolute;
                padding: .4rem;
                border: 0.18rem solid #444;
                border-radius: 50%;
                left: .5rem;
                top: -.7rem;
                .cart_icon {
                    width: 1.2rem;
                    height: 1.2rem;
                }
                .cart_list_length{
                    position: absolute;
                    top: -.25rem;
                    right: -.25rem;
                    background-color: #ff461d;
                    line-height: .7rem;
                    text-align: center;
                    border-radius: 50%;
                    border: 0.025rem solid #ff461d;
                    min-width: .7rem;
                    height: .7rem;
                    font-size:.5rem;
                    color: #fff;
                }
            }
        }
        .cart_icon_activity{
            background-color: #ffe35c;
        }
        .gotopay{
        position: absolute;
        right: 0;
        background-color: #535356;
        width:5rem;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        .gotopay_button_style{
            size:.7rem;
            color: #fff;
            font-weight: bold;
        }
    }
    }

    </style>
