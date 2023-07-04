import ProductsPage from '../pages/products'

describe('Actions', ()=> {

    const productsPage = new ProductsPage();
   
    it('Add Product', ()=> {
        cy.visit('/')
       productsPage.addProductandVerify();

        })     
    })

