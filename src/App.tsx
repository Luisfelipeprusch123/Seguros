import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./admin/Header";
import Sidebar from "./admin/Sidebar";
import Clients from "./admin/Clients";
import Policies from "./admin/Policies";
import Reports from "./admin/Reports";
import Login from "./admin/Login";
import { NiveisAcesso } from "./admin/acesso/NiveisAcesso";
// import UserList from './components/UserList';
// import AddUser from './components/AddUser';
// import EditUser from './components/EditUser';
// import UserDetails from './components/UserDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/admin/clients" element={<Clients />} />
        <Route path="/admin/policies" element={<Policies />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        {/*  {/* <Route path="/" exact component={UserList} /> 
        <Route path="/users/add" component={AddUser} />
        <Route path="/users/:id/edit" component={EditUser} />
        <Route path="/users/:id" component={UserDetails} /> */}{" "}
        */
      </Routes>
    </Router>
  );
};

const PrivateRoute: React.FC<{ component: React.FC }> = ({
  component: Component,
}) => {
  const isAuthenticated = () => {
    // Verifique se o token JWT existe e é válido
    const token = localStorage.getItem("token");
    return token !== null; // Modifique aqui para verificar a validade do token
  };

  const navigate = useNavigate();

  if (!isAuthenticated()) {
    navigate("/login");
    return <p>Redirecionando para a página de login...</p>;
  }

  return <Component />;
};

export default App;
