import { Card, Modal, Form, Select, Checkbox, Switch } from "antd";
import React, { memo, useState } from "react";
import Provider from "../../../api/Provider";

const ModalComponent = ({ visible, onClose, title, data, getall }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    const { name, level } = form.getFieldsValue();
    if (!name || !level) {
      return;
    }
    Provider.create(form.getFieldsValue()).then(() => {
      onClose();
      getall();
    });
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
    period: false,
    noOfSuccessfulMessages: false,
    isInUse: false,
  };

  return (
    <Modal visible={visible} title={title} onCancel={onClose} onOk={handleOk}>
      <Card>
        <Form form={form} initialValues={initialValues}>
          <div>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please select a name" }]}
            >
              <Select>
                {nameData.map((item) => (
                  <Select.Option key={item.value} value={item.value}>
                    {item.title}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="level" label="Level" rules={[{ required: true }]}>
              <Select>
                {levelData.map((item) => {
                  return (
                    <Select.Option value={item.value}>
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
              <Checkbox defaultChecked={false}></Checkbox>
            </Form.Item>
          </div>
          <div className="flex justify-between pt-3">
            <Form.Item label="In Use" name="isInUse" valuePropName="checked">
              <Switch defaultValue={false}></Switch>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </Modal>
  );
};

export default memo(ModalComponent);
