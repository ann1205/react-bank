import React, { useContext, createContext, useReducer, Reducer } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Page from "./page";
import WellcomePage from "./container/welcome-page";
import SignupPage from "./container/signup-page";

const SignupConfirmPage: React.FC = () => {
  return <div className="App-header">Sign Up Confirm</div>;
};

const SigninPage: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (auth) auth.login(true);
    navigate("/BalancePage");
  };

  return (
    <div className="App-header">
      <div onClick={handleClick} className="">
        Sign In
      </div>
    </div>
  );
};

const RecoveryPage: React.FC = () => {
  return <div className="App-header">Recovery</div>;
};

const RecoveryConfirmPage: React.FC = () => {
  return <div className="App-header">Recovery Confirm</div>;
};

const BalancePage: React.FC = () => {
  return <div className="App-header">Balance</div>;
};

const NotificationsPage: React.FC = () => {
  return <div className="App-header">Notifications</div>;
};

const SettingsPage: React.FC = () => {
  return <div className="App-header">Settings</div>;
};

const RecivePage: React.FC = () => {
  return <div className="App-header">Recive</div>;
};

const SendPage: React.FC = () => {
  return <div className="App-header">Send</div>;
};

const TransactionPage: React.FC = () => {
  const { transactionId } = useParams();

  React.useEffect(() => {
    alert(`Заванатаження ${transactionId}`);
  }, [transactionId]);

  return <div className="">{transactionId}</div>;
};

const Error: React.FC = () => {
  return <div className="App-header">Error Page</div>;
};

const initialState = {
  token: null as string | null,
  user: null as any,
};

type Action = {
  type: string;
  payload?: {
    token: string;
    user: any;
  };
};

const ActionTypes = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
  LOG_OUT: "LOG_OUT",
};

const authReducer: Reducer<typeof initialState, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        token: action.payload?.token || null,
        user: action.payload?.user || null,
      };
    case ActionTypes.SIGN_UP:
      return {
        ...state,
        token: null,
        user: null,
      };
    case ActionTypes.LOG_OUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

type ContextType = {
  state: typeof initialState;
  isLogged: boolean;
  login: (status: boolean) => void;
  dispatch: React.Dispatch<Action>;
};

const AuthContext = createContext<ContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const [isLogged, login] = React.useState(false);

  return (
    <AuthContext.Provider value={{ state, isLogged, login, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const auth = useContext(AuthContext);

  if (!auth) return <Error />;

  return auth.isLogged ? <>{children}</> : <Navigate to="/Signin" replace />;
};

// const AuthRoute: React.FC<> = () => {
//   const auth = useContext(AuthContext);

//   if (auth)
//     return auth.isLogged ? <Navigate to="/balance" replace />;
// };

function App() {
  return (
    <Page>
      <AuthProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              {/* <Route
                index
                element={
                  <PrivateRoute>
                    <WellcomePage />
                  </PrivateRoute>
                }
              /> */}
              <Route
                path="/signup"
                element={
                  // <PrivateRoute>
                  <SignupPage />
                  /* </PrivateRoute> */
                }
              />
              {/* <Route
                path="/signup-confirm"
                element={
                  <PrivateRoute>
                    <SignupConfirmPage />
                  </PrivateRoute>
                }
              /> */}
              {/* <Route
                path="/signin"
                element={
                  <AuthRoute>
                    <SigninPage />
                  </AuthRoute>
                }
              /> */}
              {/* <Route
                path="/recovery"
                element={
                  <AuthRoute>
                    <RecoveryPage />
                  </AuthRoute>
                }
              /> */}
              {/* <Route
                path="/recovery-confirm"
                element={
                  <AuthRoute>
                    <RecoveryConfirmPage />
                  </AuthRoute>
                }
              /> */}
              {/* <Route
                path="/balance"
                element={
                  <PrivateRoute>
                    <BalancePage />
                  </PrivateRoute>
                }
              /> */}
              {/* <Route
                path="/notifications"
                element={
                  <PrivateRoute>
                    <NotificationsPage />
                  </PrivateRoute>
                }
              /> */}
              {/* <Route
                path="/settings"
                element={
                  <PrivateRoute>
                    <SettingsPage />
                  </PrivateRoute>
                }
              /> */}
              {/* <Route
                path="/recive"
                element={
                  <PrivateRoute>
                    <RecivePage />
                  </PrivateRoute>
                }
              /> */}
              {/* <Route
                path="/send"
                element={
                  <PrivateRoute>
                    <SendPage />
                  </PrivateRoute>
                }
              /> */}
              {/* <Route
                path="/transaction/:transactionId"
                element={
                  <PrivateRoute>
                    <TransactionPage />
                  </PrivateRoute>
                }
              /> */}
              <Route path="*" Component={Error} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </AuthProvider>
    </Page>
  );
}

export default App;
