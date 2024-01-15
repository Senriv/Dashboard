import data from '../../data/customers.json';
import CustomersTableItem from '../CustomersTableItem/CustomersTableItem';
import { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';

function CustomersTable() {
  const itemsPerPage = 8;
  const [customers, setCustomers] = useState(data);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedCustomers = data.slice(startIndex, endIndex);

    setCustomers(slicedCustomers);
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [page]);

  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(page * itemsPerPage, data.length);

  return (
    <>
      <div className="customers__table-wrapper">
        <table className="customers__table">
          <thead className="customers__table-head">
            <tr className="customers__table-head-line">
              <td>Customer Name</td>
              <td>Company</td>
              <td>Phone Number</td>
              <td>Email</td>
              <td>Country</td>
              <td className="customers__status">Status</td>
            </tr>
          </thead>
          <tbody className="customers__table-body">
            {customers.map((customer) => (
              <CustomersTableItem key={customer.id} data={customer} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="customers__footer">
        <p className="customers__footer-info">
          Showing data {startIndex} to {endIndex} of {data.length} entries
        </p>
        {!!totalPages && (
          <Pagination
            page={page}
            count={totalPages}
            onChange={(_, num) => setPage(num)}
          />
        )}
      </div>
    </>
  );
}

export default CustomersTable;
