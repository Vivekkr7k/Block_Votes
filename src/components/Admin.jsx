import React, { useState } from 'react';

function AdminDashboard() {
  const [electionName, setElectionName] = useState('');
  const [parties, setParties] = useState([]);
  const [newPartyName, setNewPartyName] = useState('');
  const [newPartyLogo, setNewPartyLogo] = useState('');

  function handleElectionNameChange(e) {
    setElectionName(e.target.value);
  }

  function handleNewPartyNameChange(e) {
    setNewPartyName(e.target.value);
  }

  function handleNewPartyLogoChange(e) {
    setNewPartyLogo(e.target.value);
  }

  function handleAddParty() {
    if (newPartyName.trim()) {
      setParties([...parties, { name: newPartyName.trim(), logo: newPartyLogo }]);
      setNewPartyName('');
      setNewPartyLogo('');
    }
  }

  function handleCreateElection() {
   
    console.log(`Creating election ${electionName} with parties ${parties.map(party => party.name).join(', ')}`);
  }

  return (
    <div className="p-4">
         <h1 className='text-xl font-bold flex justify-center'>Admin Dashboard</h1>
      <h2 className="text-lg font-bold mb-4">Create Election</h2>
      <label className="block mb-2">
        <span className="font-bold">Election Name:</span>
        <input type="text" value={electionName} onChange={handleElectionNameChange} className="block w-full border border-gray-400 rounded p-2 mt-1" />
      </label>
      <h3 className="text-md font-bold mb-2">Parties:</h3>
      <ul className="mb-4">
        {parties.map(party => (
          <li key={party.name} className="mb-2 flex items-center">
            <img src={party.logo} alt={`${party.name} logo`} className="w-6 h-6 mr-2" />
            <span>{party.name}</span>
          </li>
        ))}
      </ul>
      <label className="block mb-2">
        <span className="font-bold">New Party Name:</span>
        <input type="text" value={newPartyName} onChange={handleNewPartyNameChange} className="block w-full border border-gray-400 rounded p-2 mt-1" />
      </label>
      <label className="block mb-2">
        <span className="font-bold">New Party Logo URL:</span>
        <input type="text" value={newPartyLogo} onChange={handleNewPartyLogoChange} className="block w-full border border-gray-400 rounded p-2 mt-1" />
      </label>
      <button onClick={handleAddParty} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Party</button>
      <button onClick={handleCreateElection} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2">Create Election</button>
    </div>
  );
}

export default AdminDashboard;
