//エントリポイント
'use strict'

import {Product} from './Product/Product.js';
import {Test} from './Test.js';
// import {BaseProduct} from './BaseProduct.js';

const product = new Product();
const test = new Test();
// const baseProduct = new BaseProduct();

product.getProduct();
test.getTest();
// baseProduct.getBaseProduct();
product.getBaseProduct();