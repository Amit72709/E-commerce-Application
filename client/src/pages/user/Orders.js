import React, { useState, useEffect } from "react";
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import axios from "axios";
import { useAuth } from "../../context/auth";
 const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);


   return (
    <Layout title={"Your order"}>
    <div className="container-flui p-3 m-3">
       <div className="row">

         <div className="col-md-3">
         <UserMenu />
           </div>
           <div className="col-md-9">
           <h1>All Order</h1>
           <p>{JSON.stringify(orders,null,4)}</p>
           </div>
        </div>
    </div>
    </Layout>
   )
 }
 
 export default Orders