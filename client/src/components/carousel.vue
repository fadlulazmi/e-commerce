<template>
    <div>
        <hooper :progress="true" :autoPlay="true" :playSpeed="3000" style="height:300px; background-color:white; border-bottom:2.8px dotted red">
            <slide>
                <img src="https://banner-hiroba.com/wp/wp-content/uploads/2018/05/0ad9d524a0d8a4dfdda9580f9267f484.jpg" alt="banner" style="height:100%">
            </slide>
            <slide>
                <img src="https://www.airportels.asia/wp-content/uploads/sites/2/2017/07/banner-price-v2-01.jpg" alt="" style="height:100%">
            </slide>
            <slide>
                <img src="https://www.pinkcitykirana.com/image/cache/catalog/categories/1000x300%20banner%20003-cm-1600x300.jpg" alt="" style="height:100%">
            </slide>
            <slide>
                <img src="https://yessbuy.com/media/catalog/product/cache/8/csbanner/1000x300/170ec19af00183b5e0368529fc2daa2f/ced/csmarketplace/default/csbanner.jpg" alt="" style="height:100%">
            </slide>
            <slide>
                <img src="https://www.cimbniaga.com/content/dam/cimb-niaga/personal/savings/PoinXtra/BANNER-1000X300-CINEMAXX-ComboHulk-PoinXtra-DebitCard.jpg" alt="" style=" height:100%">
            </slide>
            <slide>
                <img src="https://www.pinkcitykirana.com/image/cache/catalog/categories/1000x300%20banner%20001-1600x300.png" alt="" style=" height:100%">
            </slide>
            <slide>
                <img src="https://www.cetak2u.com/image/cetak2u/image/cache/data/vehicle%20wrap%20promosi%2019-1000x300.jpg" alt="" style=" height:100%">
            </slide>
            <slide>
                <img src="https://sites.create-cdn.net/siteimages/32/0/2/320225/13/9/9/13992076/1000x300.jpg?1484304557" alt="" style=" height:100%">
            </slide>
            <slide>
                <img src="https://images1.voonik.com/campaigns/Dec_13th_carousal_1000x300%20_01.jpg" alt="" style=" height:100%">
            </slide>
        </hooper>
    </div>
</template>

<script>

import { Hooper, Slide} from 'hooper'
import 'hooper/dist/hooper.css';

export default {
    components : {
        Hooper,
        Slide
    }
};


</script>

<style>
</style>
