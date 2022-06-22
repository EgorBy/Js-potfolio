Vue.component('products', {
    data() {
        return {
            catalogUrl: `/catalogData.json`,
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value) {
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `<div class="products container">
            <product 
            v-for="product of filtered" 
            :key="product.id_product"
            :product="product"
            :img="product.imgProduct"></product>
        </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="card" >
                 <img class="card-img-top" :src="img" :alt="product.product_name">
                <div class="card-body">
                    <h3 class="card-title">{{ product.product_name }}</h3>
                    <p class="card-text"> {{product.productInfo }}</p>
                    <div class="price d-flex justify-content-start align-items-end"><p>{{ product.price }} $</p></div>
                    <div class="cardFooter">
                    <button class="buy-btn btn btn-primary" @click="$root.$refs.cart.addProduct(product)">BUY</button>
                    <a href="product.html" class="btn btn-primary">More details...</a>
                    </div>
                </div>
            </div>`
})