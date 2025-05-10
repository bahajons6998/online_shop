import React, { useEffect, useState } from "react";
import { get_products } from "../utils/Api_fetch";
import Products from "./products/Products";

export default function Home() {
    return (
        <div>
            <Products />
        </div>
    );
}
