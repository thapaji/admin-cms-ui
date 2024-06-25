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
        <Col className="theme-default" md={2}>
          <Sidebar />
        </Col>
        <Col className="main">
          <Outlet />
        </Col>
      </Row>
      <Footer />
    </>
  );
};
