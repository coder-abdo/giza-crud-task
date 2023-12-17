import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hooks";
import { getBook } from "@/utils";
import { useEffect } from "react";

export const useBookDetails = () => {
  const { id } = useParams();
  const { error, isLoading, book } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBook(id!));
  }, [dispatch, id]);
  return { error, isLoading, book };
};
