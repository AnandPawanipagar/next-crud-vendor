import { Button, Form, Input, Row, Col } from "antd";
import Router, { useRouter } from "next/router";
import axios from "axios";
import React, { useState } from "react";

const editVendor = ({ vendor }) => {
  const router = useRouter();
  const vendorId = router.query.id;
  let [vendorName, setVendorName] = useState(vendor.vendorName);
  let [accountNumber, setAccountNumber] = useState(vendor.accountNumber);
  let [bankName, setBankName] = useState(vendor.bankName);
  let [addressOne, setAddressOne] = useState(vendor.addressOne);
  let [addressTwo, setAddressTwo] = useState(vendor.addressTwo);
  let [city, setCity] = useState(vendor.city);
  let [country, setCountry] = useState(vendor.country);
  let [zipcode, setZipCode] = useState(vendor.zipcode);
  const { TextArea } = Input;
  let handleSubmit = async () => {
    let res = await axios.put(`http://localhost:3000/api/vendor/${vendorId}`, {
      vendorName: vendorName,
      accountNumber: accountNumber,
      bankName: bankName,
      addressOne: addressOne,
      addressTwo: addressTwo,
      city: city,
      country: country,
      zipcode: zipcode,
    });
    if (res.status == 200) {
      window.alert("Form Edited Successfully");
      Router.push("/vendors");
    }
  };

  return (
    <>
      <Form
        onFinish={handleSubmit}
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Row>
          <Col span={12}>
            <Form.Item
              label="Vendor Name"
              name="vendorname"
              rules={[
                {
                  required: false,
                  message: "Please input vendorname!",
                },
              ]}
            >
              <Input
                defaultValue={vendorName}
                onChange={(e) => {
                  setVendorName(e.target.value);
                }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Bank Name"
              name="bankname"
              rules={[
                {
                  required: false,
                  message: "Please input your bank name",
                },
              ]}
            >
              <Input
                defaultValue={bankName}
                onChange={(e) => {
                  setBankName(e.target.value);
                }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Account Number"
              name="accountnumber"
              rules={[
                {
                  required: false,
                  message: "Please input your account number",
                },
              ]}
            >
              <Input
                defaultValue={accountNumber}
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Address One"
              name="addressone"
              rules={[
                {
                  required: false,
                  message: "Please input your address one ",
                },
              ]}
            >
              <TextArea
                defaultValue={addressOne}
                onChange={(e) => {
                  setAddressOne(e.target.value);
                }}
                rows={3}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Address Two"
              name="addresstwo"
              rules={[
                {
                  required: false,
                  message: "Please input your address two ",
                },
              ]}
            >
              <TextArea
                defaultValue={addressTwo}
                onChange={(e) => {
                  setAddressTwo(e.target.value);
                }}
                rows={3}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: false,
                  message: "Please input your city!",
                },
              ]}
            >
              <Input
                defaultValue={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="country"
              rules={[
                {
                  required: false,
                  message: "Please input your country",
                },
              ]}
            >
              <Input
                defaultValue={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Zip Code"
              name="zipcode"
              rules={[
                {
                  required: false,
                  message: "Please input your zip code",
                },
              ]}
            >
              <Input
                defaultValue={zipcode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
                size="large"
              />
            </Form.Item>
          </Col>
          ,
          <Col span={12}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                size="large"
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios.get(`http://localhost:3000/api/vendor/${id}`);
  console.log(res.data);
  const { vendor } = res.data;

  return {
    props: { vendor: vendor },
  };
}

export default editVendor;
