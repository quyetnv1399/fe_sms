import { Card, Modal, Form, Select, Checkbox, Switch } from "antd";
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
  return (
    <Modal visible={visible} title={title} onCancel={onClose}>
      <Card>
        <Form>
          <div>
            <Form.Item label="Name">
              <Select>
                {nameData.map((item) => {
                  return (
                    <Select.Option value={item.value}>
                      {item.title}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item label="Level">
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
              name="message"
              valuePropName="checked"
            >
              <Checkbox checked={data?.isinuse || false}></Checkbox>
            </Form.Item>
            <Form.Item label="Period" name="period" valuePropName="checked">
              <Checkbox></Checkbox>
            </Form.Item>
          </div>
          <div className="flex justify-between pt-3">
            <Form.Item label="In Use" name="use" valuePropName="checked">
              <Switch checked={data?.isinuse || false}></Switch>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </Modal>
  );
};

export default memo(ModalComponent);
