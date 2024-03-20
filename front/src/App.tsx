import React, { useContext, createContext, useReducer, Reducer } from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Page from "./page";
import WellcomePage from "./container/index";
import SignupPage from "./container/signup-page";
import SignupConfirmPage from "./container/signup-confirm-page";
import SigninPage from "./container/signin-page";
import RecoveryPage from "./container/recovery-page";
import RecoveryConfirmPage from "./container/recovery-confirm-page";
import RecivePage from "./container/recive-page";
import SendPage from "./container/send-page";
import NotificationsPage from "./container/notifications-page";
import SettingsPage from "./container/settings-page";
import BalancePage from "./container/balance-page";

// document.addEventListener("DOMContentLoaded", () => {
//   if (window.session) {
//     const { user } = window.session;

//     if (user.isConfirm) {
//       window.location.assign("/balance");
//     } else {
//       window.location.assign("/signup-confirm");
//     }
//   } else {
//     window.location.assign("/signup");
//   }
// });

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
              <Route
                index
                element={
                  // <PrivateRoute>
                  <WellcomePage />
                  // </PrivateRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  // <PrivateRoute>
                  <SignupPage />
                  /* </PrivateRoute> */
                }
              />
              <Route
                path="/signup-confirm"
                element={
                  // <PrivateRoute>
                  <SignupConfirmPage />
                  // </PrivateRoute>
                }
              />
              <Route
                path="/signin"
                element={
                  // <AuthRoute>
                  <SigninPage />
                  // </AuthRoute>
                }
              />
              <Route
                path="/recovery"
                element={
                  // <AuthRoute>
                  <RecoveryPage />
                  /* </AuthRoute> */
                }
              />
              <Route
                path="/recovery-confirm"
                element={
                  // <AuthRoute>
                  <RecoveryConfirmPage />
                  /* </AuthRoute> */
                }
              />
              <Route
                path="/balance"
                element={
                  // <PrivateRoute>
                  <BalancePage />
                  // </PrivateRoute>
                }
              />
              <Route
                path="/notifications"
                element={
                  // <PrivateRoute>
                  <NotificationsPage />
                  /* </PrivateRoute> */
                }
              />
              <Route
                path="/settings"
                element={
                  // <PrivateRoute>
                  <SettingsPage />
                  // </PrivateRoute>
                }
              />
              <Route
                path="/recive"
                element={
                  // <PrivateRoute>
                  <RecivePage />
                  // </PrivateRoute>
                }
              />
              <Route
                path="/send"
                element={
                  // <PrivateRoute>
                  <SendPage />
                  // </PrivateRoute>
                }
              />
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
