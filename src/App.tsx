import React from "react";
import Layout from "app/Layout";
import LoadingScreen from "components/LoadingScreen";
import { creatRoutes } from "app/functions";
import { Routes } from "react-router-dom";
import routes from "app/routes";

function App() {
  return (
    <Layout>
      <React.Suspense fallback={<LoadingScreen />}>
        <Routes>{routes.map((route) => creatRoutes(route))}</Routes>
      </React.Suspense>
    </Layout>
  );
}

export default App;
