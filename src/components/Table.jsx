

function Table() {
  return (
    <div className="flex flex-col mt-9 border border-gray-100 rounded">
      <table className="w-full table-auto">
        <thead className=" capitalize text-base text-gray-100 font-medium border-b border-g">
            <tr>
                <th className="py-1">asset</th>
                <th className="py-1">Name</th>
                <th className="py-1">Price</th>
                <th className="py-1">Total Volume</th>
                <th className="py-1">Market Cap Change</th>
                <th className="py-1">1H</th>
                <th className="py-1">24H</th>
                <th className="py-1">7D</th>
            </tr>
        </thead>
        <tbody>
        <tr className="text-center text-base border-b border-gray-100 hover:bg-gray-200">
                <td className="py-4">Name</td>
                <td className="py-4">asset</td>
                <td className="py-4">Price</td>
                <td className="py-4">Total Volume</td>
                <td className="py-4">Market Cap Change</td>
                <td className="py-4">1H</td>
                <td className="py-4">24H</td>
                <td className="py-4">7D</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
