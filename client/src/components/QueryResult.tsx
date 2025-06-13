import { ApolloError } from "@apollo/client";
import type { PropsWithChildren } from "react";
import { DotLoader } from "react-spinners";
import type React from "react";

interface QueryResultProps {
  loading: boolean;
  error?: ApolloError | undefined;
  data?: unknown;
}

const QueryResult: React.FC<PropsWithChildren<QueryResultProps>> = ({
  loading,
  error,
  data,
  children,
}): React.ReactElement => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center h-100">
        <DotLoader />
      </div>
    );
  }
  if (data) {
    return <>{children}</>;
  }

  return <p>Nothing to show...</p>;
};

export default QueryResult;
