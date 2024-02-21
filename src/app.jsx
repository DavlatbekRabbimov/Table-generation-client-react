import {Provider} from "./provider/provider.jsx";
import {Routers} from "./routers/routers.jsx";

export const App = () => {

    return (
        <div className={`overflow-auto bg-red-950`}>
            <Provider>
                <Routers/>
            </Provider>
        </div>
    )
}
