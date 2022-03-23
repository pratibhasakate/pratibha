



function OrderPizza(){
    console.log("pizza Ordered")
    setTimeout(
        ()=>{
           console.log("Pizza is a ready")

         setTimeout(
           ()=>{
             console.log("Pass instruction to the cook")
              setTimeout(
                   ()=>{
                  console.log("vegetable are cut")
                  setTimeout(
                    ()=>{
                      console.log("Cook pizza heat")
                      setTimeout(
                        ()=>{
                          console.log("finally pizza heat")
                          setTimeout(
                            ()=>{
                              console.log("Order Delivery Start")
                              setTimeout(
                                ()=>{
                                  console.log("Order Dilivered")
                                  setTimeout(
                                    ()=>{
                                      console.log("You Ate")
                                    },
                                    5000

                                  )

                                },
                                11000

                              )
                            },
                            10000
                          )
            
                        },
                        5000

                      )

                    },
                    8000

                  )
                },
                 6000

                   )


                     },
                     2000

                      )


                        },
                          1000
                         )

                          }

setTimeout(OrderPizza, 5000)