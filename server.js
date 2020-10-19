const express = require('express')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express()
const path = require('path')

const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

app.use(express.static('public'))
app.engine('handlebars', handlebars)
app.set('view engine','handlebars')

app.get('/about', (request,response) => {
    response.render('about', {datetime: new Date(), box: "We're cats. We like to eat and nap.... And ruin the house at 3 AM", rights: "All Rights Reserved 2020" }
)
})


app.get('/', (request,response) => {
    response.render('home', {datetime: new Date(), img1: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-videoSixteenByNineJumbo1600.jpg", img2: "https://boston.cbslocal.com/wp-content/uploads/sites/3859903/2020/06/cat-generic.jpg?w=1024", img3: "https://lh3.googleusercontent.com/proxy/7mow4Rq_mtYZvOKvroPXxi_fgEyxKoHYq09vfjxCon8w5aa_j2TeK0_x0sdOkno-2Bxh8G1g1TDSBTF0VTUi1vDyRpoCUCjuS8NN3jW_vFsrSKnGWSrd4EuQmm0Dxc34Lu9LBOFk5TM"})

})

app.get('/gallery', (request, response) => {
    response.render('gallery', {datetime: new Date(), img1: "https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-videoSixteenByNineJumbo1600.jpg", img2: "https://boston.cbslocal.com/wp-content/uploads/sites/3859903/2020/06/cat-generic.jpg?w=1024", img3: "https://lh3.googleusercontent.com/proxy/7mow4Rq_mtYZvOKvroPXxi_fgEyxKoHYq09vfjxCon8w5aa_j2TeK0_x0sdOkno-2Bxh8G1g1TDSBTF0VTUi1vDyRpoCUCjuS8NN3jW_vFsrSKnGWSrd4EuQmm0Dxc34Lu9LBOFk5TM"})

})
app.get('/email', (request, response) => {
    response.render('email')
})

app.listen(3000, () => console.log('web server running on port 3000'))