import { Card, Modal, Form, Select, Checkbox, Switch } from "antd";
import React, { memo, useState } from "react";
import Provider from "../../../api/Provider";


const ModalComponent = ({ visible, onClose, param, getall }) => {

  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
    console.log(param)

  };

  const onFinish = (values) => {
    // console.log("Success:", values);
    console.log(param.data._id);
    if (param.data._id) {
      Provider.update(values, param.data._id).then(() => {
        onClose();
        getall();
      });
    } else {
      Provider.create(values).then(() => {
        onClose();
        getall();
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const nameData = [
    {
      title: "FPT",
      value: "FPT",
    },
    {
      title: "GapOne",
      value: "GapOne",
    },
  ];

  const levelData = [
    {
      title: "Primary",
      value: "Primary",
    },
    {
      title: "Secondary",
      value: "Secondary",
    },
  ];

  const initialValues = {
    period: param.data.period || false,
    noOfSuccessfulMessages: param.data.noOfSuccessfulMessages || false,
    isInUse: param.data.isInUse || false,
    name: param.data.name || null,
    level: param.data.level || null,
  };
 

  return (
    <Modal open={visible} title={param.title} onCancel={onClose} onOk={handleOk}>
      <Card>
        <Form
          form={form}
          initialValues={initialValues}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please select a name" }]}
            >
              <Select>
                {nameData.map((item, index) => (
                  <Select.Option key={index} value={item.value}>
                    {item.title}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="level"
              label="Level"
              rules={[{ required: true, message: "Please select a Level" }]}
            >
              <Select>
                {levelData.map((item, index) => {
                  return (
                    <Select.Option key={index} value={item.value}>
                      {item.title}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>

          <div className="flex justify-between pt-3">
            <Form.Item
              label="Message ID"
              name="noOfSuccessfulMessages"
              valuePropName="checked"
            >
              <Checkbox></Checkbox>
            </Form.Item>

            <Form.Item label="Period" name="period" valuePropName="checked">
              <Checkbox></Checkbox>
            </Form.Item>
          </div>
          <div className="flex justify-between pt-3">
            <Form.Item label="In Use" name="isInUse" valuePropName="checked">
              <Switch></Switch>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </Modal>
  );
};

export default memo(ModalComponent);
