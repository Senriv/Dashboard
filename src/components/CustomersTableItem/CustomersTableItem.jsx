function CustomersTableItem({ data }) {
  const { name, company, phone_number, email, country, status } = data;
  return (
    <tr className="customers__table-body-line">
      <td>{name}</td>
      <td>{company}</td>
      <td>{phone_number}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td className="customers__status">
        {status ? (
          <span className="customers__table-status customers__table-status--active">
            Active
          </span>
        ) : (
          <span className="customers__table-status customers__table-status--inactive">
            Inactive
          </span>
        )}
      </td>
    </tr>
  );
}

export default CustomersTableItem;
