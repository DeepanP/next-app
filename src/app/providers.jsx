'use client';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo-client';

export default function Providers({ children, initialApolloState }) {
  const client = useApollo(initialApolloState);

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}