// Mock News API Service to replace the broken Bing News API
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// This is a mock service that returns static data because the RapidAPI Bing News service is no longer available.
const mockNewsData = {
    value: [
        {
            name: 'Bitcoin hits new high as market rallies',
            url: 'https://cointelegraph.com',
            description: 'Bitcoin has surged past expectations today as the global crypto market sees a significant uptake in volume...',
            image: { thumbnail: { contentUrl: 'https://cointelegraph.com/magazine/wp-content/uploads/2021/08/mag-cover-2.jpg' } },
            provider: [{ name: 'CoinTelegraph', image: { thumbnail: { contentUrl: 'https://cointelegraph.com/favicon.ico' } } }],
            datePublished: new Date().toISOString(),
        },
        {
            name: 'Ethereum 2.0: What you need to know',
            url: 'https://www.coindesk.com',
            description: 'The long awaited upgrade to the Ethereum network is finally here. Here is a breakdown of what changes...',
            image: { thumbnail: { contentUrl: 'https://www.coindesk.com/resizer/f4d3.jpg' } },
            provider: [{ name: 'CoinDesk', image: { thumbnail: { contentUrl: 'https://www.coindesk.com/favicon.ico' } } }],
            datePublished: new Date().toISOString(),
        },
        {
            name: 'Crypto Regulation: Global Updates',
            url: 'https://www.bloomberg.com/crypto',
            description: 'Regulators around the world are tightening their grip on digital assets. We explore the latest policies...',
            image: { thumbnail: { contentUrl: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i.JHd.C.jpg' } },
            provider: [{ name: 'Bloomberg', image: { thumbnail: { contentUrl: 'https://www.bloomberg.com/favicon.ico' } } }],
            datePublished: new Date().toISOString(),
        },
        {
            name: 'Top 5 Altcoins to Watch',
            url: 'https://coinmarketcap.com',
            description: 'Beyond Bitcoin and Ethereum, these 5 alternative coins are showing promising signs of growth...',
            image: { thumbnail: { contentUrl: 'https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png' } },
            provider: [{ name: 'CoinMarketCap', image: { thumbnail: { contentUrl: 'https://coinmarketcap.com/favicon.ico' } } }],
            datePublished: new Date().toISOString(),
        },
    ]
};

// We keep the same API structure so we don't have to refactor the components
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com' }), // Base URL ignored in mock
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            // We ignore the actual query and return our mock data
            queryFn: async () => {
                return { data: mockNewsData };
            },
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
