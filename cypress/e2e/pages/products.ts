const data = require('../../fixtures/product.json')


class ProductsPage{
    visit(){
        cy.visit('/')
    }

    addProductandVerify(){
        cy.get('input[id="productNameInput"]').type(data.productName)
        cy.get('input[id="productPriceInput"]').type(data.productPrice)
        cy.get('input[id="productCategoryInput"]').type(data.productCategory)
        cy.get('input[id="productDescriptionInput"]').type(data.prodcutDescription)
        cy.get('input[id="productImageURLInput"]').type(data.productImage)
        cy.get('button[type="submit"]').click()
        cy.get('b[id="p"]').should('have.text','Product Added Successfully')

    }
}
export default ProductsPage