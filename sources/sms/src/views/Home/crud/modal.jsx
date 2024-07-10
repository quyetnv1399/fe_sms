import { Card, Modal, Form, Select, Checkbox } from "antd";
import React, { memo, useState } from "react";

const ModalComponent = ({ visible, onClose, title, data }) => {
  const nameData = [
    {
      title: "FPT",
      value: "fpt",
    },
    {
      title: "GapOne",
      value: "gapone",
    },
  ];
  console.log(data);
  return (
    <Modal visible={visible} title={title} onCancel={onClose}>
      <Card>
        <Form>
          <Form.Item label="Name">
            <Select>
              {nameData.map((item) => {
                return (
                  <Select.Option value={item.value}>{item.title}</Select.Option>
                );
              })}
            </Select>
            <div className="flex justify-between pt-3">
              <Form.Item label="Primary" name="primary" valuePropName="checked">
                <Checkbox></Checkbox>
              </Form.Item>
              <Form.Item label="In Use" name="use" valuePropName="checked">
                <Checkbox checked={data?.isinuse || false}></Checkbox>
              </Form.Item>
            </div>
            <div className="flex justify-between">
              <Form.Item
                label="Message ID"
                name="message"
                valuePropName="checked"
              >
                <Checkbox checked={data?.isinuse || false}></Checkbox>
              </Form.Item>
              <Form.Item label="Period" name="period" valuePropName="checked">
                <Checkbox></Checkbox>
              </Form.Item>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </Modal>
  );
};

export default memo(ModalComponent);
