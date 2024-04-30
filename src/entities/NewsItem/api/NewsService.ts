import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CommentType, NewsType } from "../model/types";

export const NewsApi = createApi({
    reducerPath: 'NewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0' }),
    endpoints: (build) => ({
        getLatestNews: build.query<number[], void>({
            query: () => ({
                url: '/newstories.json?print=pretty'
            })
        }),
        getNewsById: build.query<NewsType, number>({
            query: (id) => ({
                url: `/item/${id}.json?print=pretty`
            })
        }),
        getMaxItemId: build.query<string, void>({
            query: () => ({
                url: '/maxitem.json?print=pretty'
            })
        }),
        getCommentById: build.query<CommentType, number>({
            query: (id) => ({
                url: `/item/${id}.json?print=pretty`
            }),
            
        }),
        getAllComments: build.query<CommentType[], number[]>({
            query: (id) => ({
                url: `/item/${id}.json?print=pretty`
            }),
            
        }),
    })
})