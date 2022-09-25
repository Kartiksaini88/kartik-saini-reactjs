import { legacy_createStore as createstore , applyMiddleware, combineReducers, compose,} from "redux";
import thunk from "redux-thunk";
import { favreducer } from "./Addfav/Addfavreducer";
import { getProductDatareducer } from "./Detailproductpageredux/detail";
import { getcategoiresreducer, getproductsdatareducer } from "./Homepageredux/Home-reducer";




export const store = createstore(
    combineReducers({
        products:getproductsdatareducer,
        categories:getcategoiresreducer,
        oneproduct:getProductDatareducer,
        fav:favreducer
    }),
    compose(applyMiddleware(thunk))
)