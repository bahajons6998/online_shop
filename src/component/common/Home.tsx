import React, { useEffect, useState } from "react";
import { get_products } from "../utils/Api_fetch";
import Products from "./products/Products";
import { Link } from "react-router";

export default function Home() {
    return (
        <div>
           
            <Products />
        </div>
    );
}
