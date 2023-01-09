import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const newContact = (contact) => {
  return axios.post("http://localhost:5000/contacts", contact);
};

const getContacts = () => {
  return axios.get("http://localhost:5000/contacts");
};

const removeUser = (id) => {
  return axios.delete(`http://localhost:5000/contacts/${id}`);
};

export const useContactsData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
    onSuccess,
    onError,
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};

export const useAddContactsData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: newContact,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};
