import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Sidebar } from "./Sidebar";

export const AdminLayout = () => {
  return (
    <>
      <Header />
      <Row>
        <Col className="theme-default" sm={2}>
          <Sidebar />
        </Col>
        <Col className="main" sm={10}>
          <Outlet />
        </Col>
      </Row>
      <Footer />
    </>
  );
};
