import { createBrowserRouter } from "react-router-dom";
import { GeneralLayout } from "../layouts/General.Layout";
  import { IsErrorView } from "../views/IsError.View";
  import { IsPrivateView } from "../views/IsPrivate.View.jsx";
    import { HomeLayout } from "../layouts/Home.Layout.jsx";
    import { LoginLayout } from "../layouts/Login.Layout.jsx";
    import '../css/val.min.css';
import 'w3-css/w3.css';
import '../fontAwesome.js';
import { RouterProvider } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider.jsx";


const App = () => {

  const {user} = useLoginContext();

  const router = createBrowserRouter([
    {
      element:      <GeneralLayout/>,
      errorElement: (<GeneralLayout><IsErrorView/></GeneralLayout>),
      children: [
        {
          index:      true,
          element:    <h1>is Home</h1>,
          path:       '/'
        },{
          element: <IsPrivateView user={user} />,
          children: [
            {
              element:  <h1>proposals</h1>,
              path:     'proposals'
            }
          ]
        },{
          element:  <h1>analytics</h1>,
          path:     'analytics'
        },{
          element:  <h1>login</h1>,
          path:     'login'
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />

}

export default App;
