import React, { useState } from 'react';
import { ClientList } from '../Components/ClientList';

export default function Home() {
  const [clientId, setClientId] = useState(null);

  return (
    <main>
      <ClientList onSelectClient={setClientId} />
    </main>
  );
}