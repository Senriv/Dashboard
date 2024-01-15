import { Icon } from '../../components/Icon';
import CustomersTable from '../../components/CustomersTable/CustomersTable';

function CustomersPage() {
  return (
    <section className="customers">
      <div className="customers__header">
        <div className="customers__header-inner">
          <h1 className="customers__header-name">All Customers</h1>
          <p className="customers__header-text">Active Members</p>
        </div>
        <span className="customers__header-search-wrap">
          <Icon
            className="customers__header-icon--search"
            id="search"
            width="24"
            height="24"
          />
          <input
            className="customers__header-search"
            type="text"
            placeholder="Search"
            name="search"
          />
        </span>
      </div>
      <CustomersTable/>
    </section>
  );
}

export default CustomersPage;
