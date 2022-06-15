import React from "react";
import {TransactionProvider} from "../context/transactions";
import {SpeechProvider} from "@speechly/react-client";
import {AppWithTheme} from "../context/theme";

const Authenticated = ({user, handleLogout}) => {
  return (
    <SpeechProvider appId="410b56f4-8a17-4a4f-891b-fd4c5266d590" language='en-US'>
      <TransactionProvider user={user}>
        <AppWithTheme handleLogout={handleLogout} user={user} />
      </TransactionProvider>
    </SpeechProvider>
  );
};

export default Authenticated;
