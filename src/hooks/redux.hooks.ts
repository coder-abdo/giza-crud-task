import { AppDispatch, RootState } from "@/types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppDispatch, useAppSelector }
