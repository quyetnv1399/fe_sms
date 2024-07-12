import React, { memo } from "react";
import Provider from "../../../common/api/ProviderApi";
import CreateUpdateView from "./CreateUpdateView";
import { Form } from "antd";

const CreateUpdateComponent = ({
  visible,
  onClose,
  param,
  getall,
  showMess,
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
  };

  const onFinish = (values) => {
    if (param.data._id) {
      onUpdate(values, param.data._id);
    } else {
      onCreate(values);
    }
  };

  const onCreate = async (values) => {
    try {
      const res = await Provider.create(values);
      if (res.status === 200) {
        showMess("success", "You successfully added");
        onClose();
        getall();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdate = async (values, id) => {
    try {
      const res = await Provider.update(values, id);
      if (res.status === 200) {
        showMess("success", "You successfully edited");
        onClose();
        getall();
      }
    } catch (error) {
      console.log(error);
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

  return CreateUpdateView({
    visible,
    form,
    handleOk,
    onFinish,
    onFinishFailed,
    param,
    onClose,
    nameData,
    levelData,
    initialValues,
  });
};

export default memo(CreateUpdateComponent);
