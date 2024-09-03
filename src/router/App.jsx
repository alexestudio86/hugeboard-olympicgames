import { createBrowserRouter } from "react-router-dom";
import { GeneralLayout } from "../layouts/General.Layout";
import '../css/val.min.css';
import '../fontAwesome.js';
  import { IsErrorView } from "../views/IsError.View";
  import { HomeLayout } from "../layouts/Home.Layout.jsx";
  import { IsPrivateView } from "../views/IsPrivate.View.jsx";
    import { ProductionPage } from "../pages/Production.Page.jsx";
  import { LoginLayout } from "../layouts/Login.Layout.jsx";
import { RouterProvider } from "react-router-dom";


const App = () => {

  const router = createBrowserRouter([
    {
      element:      <GeneralLayout/>,
      errorElement: (<GeneralLayout><IsErrorView/></GeneralLayout>),
      children: [
        {
          index:      true,
          element:    <HomeLayout/>,
          path:       '/'
        },{
          element:  <IsPrivateView/>,
          children: [
            {
              element:  <ProductionPage/>,
              path:     'production'
            }
          ]
        },{
          element:  <LoginLayout/>,
          path:     'login'
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />

}

export default App;
