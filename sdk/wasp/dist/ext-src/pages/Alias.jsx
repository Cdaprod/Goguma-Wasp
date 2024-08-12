import React, { useState } from 'react';
import { useQuery, useAction, createAlias, getAliases } from 'wasp/client/operations';
import { Link } from 'wasp/client/router';
const AliasPage = () => {
    const { data: aliases, isLoading, error } = useQuery(getAliases);
    const createAliasFn = useAction(createAlias);
    const [newAliasName, setNewAliasName] = useState('');
    if (isLoading)
        return 'Loading...';
    if (error)
        return 'Error: ' + error;
    const handleCreateAlias = () => {
        createAliasFn({ name: newAliasName });
        setNewAliasName('');
    };
    return (<div className='p-4'>
      <div className='flex gap-x-4 py-5'>
        <input type='text' placeholder='New Alias' className='px-1 py-2 border rounded text-lg' value={newAliasName} onChange={(e) => setNewAliasName(e.target.value)}/>
        <button onClick={handleCreateAlias} className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded'>
          Add Alias
        </button>
      </div>
      <div>
        {aliases.map((alias) => (<div key={alias.id} className='py-2 px-2 flex items-center hover:bg-gray-100 gap-x-2 rounded'>
            <p>{alias.name}</p>
          </div>))}
      </div>
    </div>);
};
export default AliasPage;
//# sourceMappingURL=Alias.jsx.map