import React from 'react';

const apps = [
  { name: 'App 1', packageName: 'com.example.app1', logo: '/path/to/logo1.png', version: '1.0.0', updatedOn: '2024-08-01', installs: '1,000', status: 'Active' },
  { name: 'App 2', packageName: 'com.example.app2', logo: '/path/to/logo2.png', version: '2.0.0', updatedOn: '2024-07-15', installs: '500', status: 'Inactive' },
  // Add more apps as needed
];

export default function AppList() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">App List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-600 text-left">
            <tr>
              <th className="p-4 border-b">App</th>
              <th className="p-4 border-b">Version</th>
              <th className="p-4 border-b">Updated on</th>
              <th className="p-4 border-b">Installs (30 Days)</th>
              <th className="p-4 border-b">Status</th>
              <th className="p-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {apps.map((app, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 flex items-center space-x-4">
                  <img src={app.logo} alt={`${app.name} logo`} className="h-10 w-10 object-cover rounded-full" />
                  <div>
                    <div className="font-semibold">{app.name}</div>
                    <div className="text-gray-600 text-sm">{app.packageName}</div>
                  </div>
                </td>
                <td className="p-4">{app.version}</td>
                <td className="p-4">{app.updatedOn}</td>
                <td className="p-4">{app.installs}</td>
                <td className="p-4">{app.status}</td>
                <td className="p-4 flex space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">View</button>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
