import { useQuery } from "react-query";
import { Axios } from "axios";
import { useEffect, useState } from "react";

const superheroes = () => {
     const [isLoading,setIsLoading] = useState(true);
     const [error , setError] = useState("");
     const [data,setData] = usestate([]);

    useEffect (() => {
        getsuperherosdata();

    },[]);



    

}