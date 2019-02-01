/*


 shop-IT
 ---------

  a. Billing       ( dependent )

    - getTotalPrice(cart)

  b. PriceMatrix   ( dependency )
  
    - getPrice(code)


*/
var PriceMatrix_v1 = /** @class */ (function () {
    function PriceMatrix_v1() {
    }
    PriceMatrix_v1.prototype.getPrice = function (code) {
        // db or n/wing code
        return 1000.00;
    };
    return PriceMatrix_v1;
}());
var PriceMatrix_v2 = /** @class */ (function () {
    function PriceMatrix_v2() {
    }
    PriceMatrix_v2.prototype.getPrice = function (code) {
        // db or n/wing code
        return 2000.00;
    };
    return PriceMatrix_v2;
}());
//--------------------------------------------------
var Billing = /** @class */ (function () {
    function Billing(priceMatrix) {
        this.priceMatrix = priceMatrix;
    } // DI
    Billing.prototype.getTotalPrice = function (cart) {
        var total = 0.0;
        for (var i = 0; i < cart.length; i++) {
            total = total + this.priceMatrix.getPrice(cart[i]);
        }
        return total;
    };
    return Billing;
}());
//--------------------------------------------------
// design & performance issues on billing component
//------------------------------------------------
/*

    => tight-coupling b/w dependent & dependency
       -> can't extend component with new features easily
    => too many dependency instances are created & discarded
       -> memory/resource use high ==> slow
    => Unit-Testing not possible
       -> dev & bug fix slow

      why these issues ?
      
      => dependent itself creating it's own dependency

      soln:

      ==> dependency should not create dependency, lookup/get from factory
         ( factory design pattern)

       limitation on factory-lookup
       
       => factory location tight-coupling

      best-soln:
      
       ==> dont create/lookup ,  get/inject by 'third-party'   ( IOC ==> Inversion Of Control )


            how to implement IOC ?

            => dependency injection ( DI )

               types
               ----

                - constructor DI
                - setter DI

     ----------------------------------------------

     S.O.L.I.D principles
     ---------------------

        Single Responsibility Principle
        Open for extension/Closed for modification Principle
        Liskov Substitution Principle
        Interface Segregation Principle
        Dependency Inversion Principle



     ----------------------------------------------
      

*/
//--------------------------------------------------
// init-phase
var priceMatriV1 = new PriceMatrix_v1();
var priceMatriV2 = new PriceMatrix_v2();
var billing = new Billing(priceMatriV2);
// use-Phase
var cart = ['1212', '1313', '1414'];
var totalPrice = billing.getTotalPrice(cart);
console.log("Total Price:" + totalPrice);
// destroy-phase
//--------------------------------------------------
