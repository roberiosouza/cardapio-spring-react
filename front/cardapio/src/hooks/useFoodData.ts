import axios, {AxiosPromise} from "axios"
import { FoodData } from "../interface/FoodData"
import { useQuery } from "@tanstack/react-query";

const URL_API = "http://localhost:8080"

const fechData =async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(URL_API + "/food");
    return response;
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fechData,
        queryKey: ['food-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}