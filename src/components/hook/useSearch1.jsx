import { useState } from "react";

export default function useSearch(index){
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = index.filter((item)=>
    item.tensp.toLowerCase().includes(searchTerm.toLowerCase())
);

return {
    searchTerm,
    setSearchTerm,
    filteredData
};
}