# e-commerce

## API Documentation

> ## USER 

*   **POST /user/register**

    Menambahkan User Baru

    body : 

        {
            username : String
            email : String
            password : String
            role : String (Admin / Customer )
        }


    output :

        {
            _id :
            username :
            email :
            password : (hashed)
            role :
            __v :
        }

*   **POST /user/login**

    Login untuk user yang sudah terdaftar

    body : 

        { 
            email : String
            password : String
        }


    output :

        {
            access_token :
        }


> ## Product 

*   **POST /products** (Admin)



    header : 

        {
            access_token : 
        }

    body : 

        { 
            itemName : String
            stock : Number
            price : Number
            img : String
        }


    output :

        { 
            _id :
            itemName :
            stock :
            price :
            img :
            __v :
        }

*   **GET /products**

    header : 

        {
            access_token : 
        }

    output :

        [{ 
            _id :
            itemName :
            stock :
            price :
            img :
            __v :
        },{ 
            _id :
            itemName :
            stock :
            price :
            img :
            __v :
        }, 
        ...]

*   **GET /products/:id**

    header : 

        {
            access_token : 
        }
    
    output :

        { 
            _id :
            itemName :
            stock :
            price :
            img :
            __v :
        }

*   **PUT /products/:id** (Admin)

    header : 

        {
            access_token : 
        }

    body : 

        { 
            _id : <new value>
            itemName : <new value>
            stock : <new value>
            price : <new value>
            img : <new value>
            __v : <new value>
        }


*   **DELETE /products/:id** (Admin)

    header : 

        {
            access_token : 
        }
  


    
> ## Cart

*   **POST /carts**

    header : 

        {
            access_token : 
        }

    body : 

        {
            productId : ObjectID   
        }
    
    output :

        { 
            _id :
            userId :
            productId : 
            __v :
        }

*   **GET /carts**

    header : 

        {
            access_token : 
        }
    
    output :

        [{ 
            _id :
            userId :
            productId : 
            __v :
        },{ 
            _id :
            userId :
            productId : 
            __v :
        },
        ...]

*   **DELETE /carts/:id**

    header : 

        {
            access_token : 
        }
    


    



    