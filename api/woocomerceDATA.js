

// API/giblo film
const client_key = "ck_29ff3cd2e02c2a827d0afffa53156815211f7378";
const client_secret = "cs_ec0960d7d3dfa7e05a68e2ea0c8cabd822a94a56";


export function getProducts (product_name,page) {
  const url = 'https://www.protfitness.com/wp-json/wc/v3/products?page='+page+'&search='+product_name+'&consumer_key='+client_key+'&consumer_secret='+client_secret
  return fetch(url)
  .then((response) => response.json())
  .catch((error) => console.error(error))
}
  

/*function that return product detail */
export function GetProductDetailById (id) {
  const url ='https://www.protfitness.com/wp-json/wc/v3/products/'+id+'?consumer_key='+client_key+'&consumer_secret='+client_secret
return fetch(url)
.then ((response) => response.json())
.catch((error) => console.error(error))
}


/* function that return all categories by parent */

export function GetAllCtegoriesByParent (parent,p) {
 const url ='https://www.protfitness.com/wp-json/wc/v3/products/categories?parent='+parent+'&page='+p+'&consumer_key='+client_key+'&consumer_secret='+client_secret
 return fetch(url)
 .then ((response) => response.json())
 .catch ((error) => console.error(error))
}

 