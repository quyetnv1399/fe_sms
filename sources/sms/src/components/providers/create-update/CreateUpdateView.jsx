import React from "react";
import { Card, Modal, Form, Select, Checkbox, Switch } from "antd";

const CreateUpdateView = (props) => {
  return (
    <Modal
      open={props.visible}
      title={props.param.title}
      onCancel={props.onClose}
      onOk={props.handleOk}
    >
      <Card>
        <Form
          form={props.form}
          initialValues={props.initialValues}
          onFinish={props.onFinish}
          onFinishFailed={props.onFinishFailed}
          autoComplete="off"
        >
          <div>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please select a name" }]}
            >
              <Select>
                {props.nameData.map((item, index) => (
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
                {props.levelData.map((item, index) => {
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

export default CreateUpdateView;
