import React, { useEffect, useState } from "react";
import ProviderView from "./ProviderView";
import Provider from "../../common/api/ProviderApi";
import { message } from "antd";
import { Utils } from "../../_shared/utils";

const ProviderComponent = () => {
  const [visible, setvisible] = useState(false);
  const [data, setdata] = useState([]);
  const [isDelete, setisdelete] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
  });

  const [dataDetail, setDataDetail] = useState({
    title: null,
    data: null,
  });

  //getall data api
  const getProviders = async (pagination) => {

    try {
      const res = await Provider.panigation(pagination.current, pagination.pageSize);
      const { totalProviders, providers } = res.data; 

      let newData = Utils.getKeyData(providers);
      
      setdata(newData);

      setPagination({
        ...pagination,
        total: totalProviders, 
      });

    } catch (error) {
      console.log(error)
    } 

  };

  const viewActionProvider = (record) => {
    let data = {};
    let title = "New Provider";

    if (record) {
      data = record;
      title = "Edit Provider";
    }

    setDataDetail({
      title: title,
      data: data,
    });

    setvisible(true);
  };

  //phân trang bằng api
  const handleTableChange = (pagination) => {
    getProviders(pagination);
  };

  //xử lý xóa
  const handleDelete = (record) => {
    setSelectedRecord(record);
    setisdelete(!isDelete);
  };

  const onDelete = (record) => {
    Provider.deleteProvider(record._id).then(() => {
      getProviders(pagination);
      setisdelete(!isDelete);
    });
  };

  //hiện data lên màn hình
  useEffect(() => {
    getProviders(pagination);
  }, []);

  const showMess = (type, title) => {
    messageApi.open({
      type: type,
      content: title,
      className: "custom-class",
    });
  };

  return ProviderView({
    visible,
    setvisible,
    data,
    dataDetail,
    isDelete,
    setisdelete,
    selectedRecord,
    pagination,
    handleTableChange,
    onDelete,
    getProviders,
    viewActionProvider,
    handleDelete,
    contextHolder,
    showMess,
  });
};

export default ProviderComponent;
