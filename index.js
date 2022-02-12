$(document).ready( function () {
    const content = document.querySelector('.content')
    console.log(content)
    let product = []

    axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=5000&%24format=JSON')
     .then(res=>{
         product = res.data
         console.log(product)
        //  let str = ''
        //  product.forEach((item,index) => {
        //      str += `<tr>
        //      <td>${item.RestaurantID}</td>
        //      <td>${item.RestaurantName}</td>
        //      <td>${index + 1}</td>
        //    </tr>`
        //  });
        //  content.innerHTML = str
        $('#table_id').DataTable({
            'data' : product,
            "columns": [
                { data: 'RestaurantID' },
                { data: 'RestaurantName' },
                { data: 'Phone' },
                ]
        }); 
     })
} );