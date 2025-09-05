import React, { useState } from "react";
import UserTable from "../../../components/subadmin/app/users/UserTable";
import { useGlobal } from "../../../hooks/api/Get";
import { ErrorToast, SuccessToast } from "../../../components/global/Toaster";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { loading, data, pagination } = useGlobal(
    "/admin/get-all-users",
    currentPage,
    search
  );

  return (
    <div>
      <UserTable
        data={data}
        pagination={pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        loading={loading}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default Users;
