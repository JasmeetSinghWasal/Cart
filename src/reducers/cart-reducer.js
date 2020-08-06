const GROCERY_ITEMS = [{
        name: "Algeria",
        price: 4160.22
    },
    {
        name: "Argentina",
        price: 1698.29
    },
    {
        name: "Australia",
        price: 56561.41
    },
    {
        name: "Austria",
        price: 44206.78
    },
    {
        name: "Azerbaijan",
        price: 5500.31
    },
    {
        name: "ahrain",
        price: 28888
    },
    {
        name: "Belarus",
        price: 5949.11
    },
    {
        name: "Belgium",
        price: 40361.15
    },
    {
        name: "Bolivia",
        price: 3077.03
    },
    {
        name: "Bosnia and Herzegovina",
        price: 4584.24
    },
    {
        name: "Brazil",
        price: 8750.22
    },
    {
        name: "Bulgaria",
        price: 6993.48
    },
    {
        name: "Cameroon",
        price: 1353.92
    },
    {
        name: "Canada",
        price: 43525.37
    },
    {
        name: "Chile",
        price: 13736.64
    },
    {
        name: "China",
        price: 8069.21
    },
    {
        name: "Colombia",
        price: 644.53
    },
    {
        name: "Costa Rica",
        price: 1193.02
    }
]

const cartReducer = (state, action) => {
    console.log('action',action)
    if (state === undefined) {
        return {
            forSale: GROCERY_ITEMS,
            cart: []
        }
    }
    switch (action.type) {
        case 'ADD_TO_CART': {
            
            const cart = [...state.cart, action.item]
            return {
                ...state,
                cart
            };

        }
        case 'REMOVE_FROM_CART': {
           
            const cart = [...state.cart]
            cart.splice(action.index, 1)

            return {
                ...state,
                cart
            }

        }
        case  'UNDO' : 
        {
            const cart = [...state.cart]
            return 
        }
        case 'REDO' :
            {
                return
            }
        default: {

            return state
        }
    }
}
export default cartReducer