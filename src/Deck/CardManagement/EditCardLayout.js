import React from "react";
import { useRouteMatch } from "react-router-dom";

export const EditCardLayout = ({ deck={} }) => {
    const { url, path } = useRouteMatch();
return (
    <p>EditCardLayout Placeholder</p>
)
};

export default EditCardLayout;