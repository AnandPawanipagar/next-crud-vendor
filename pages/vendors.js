import React, { useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const vendors = ({ vendors }) => {
  const router = useRouter();
  const handleDelete = async (record, index) => {
    try {
      await axios.delete(`http://localhost:3000/api/vendor/${index._id}`);
      router.push("/vendors");
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Edit/Delete",
      key: "deleteVendor",
      dataIndex: "deleteVendor",
      render: (record, index) => (
        <>
          <DeleteOutlined
            onClick={() => {
              handleDelete(record, index);
            }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EditOutlined
            onClick={() => {
              router.push(`http://localhost:3000/${index._id}`);
            }}
          />
        </>
      ),
    },
    {
      title: "Vendor Name",
      dataIndex: "vendorName",
      key: "vendorName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Account Number",
      dataIndex: "accountNumber",
      key: "accountNumber",
    },
    {
      title: "Bank Name",
      dataIndex: "bankName",
      key: "bankName",
    },
    {
      title: "Address One",
      dataIndex: "addressOne",
      key: "addressOne",
    },
    {
      title: "Address Two",
      dataIndex: "addressTwo",
      key: "addressTwo",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Zip Code",
      dataIndex: "zipcode",
      key: "zipcode",
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={vendors} />
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:3000/api/vendor");
  console.log(res.data);
  const { vendors } = res.data;
  return {
    props: { vendors: vendors },
  };
}

export default vendors;
