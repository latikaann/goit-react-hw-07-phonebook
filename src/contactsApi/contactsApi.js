import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsList',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6480f626f061e6ec4d4a1f54.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({ url: `contacts/${id}`, method: 'DELETE' }),

      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useCreateContactMutation,
} = contactsApi;
