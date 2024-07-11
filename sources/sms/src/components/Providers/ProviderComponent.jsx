import React, { useEffect, useState } from "react";
import ProviderView from "./ProviderView";
import Provider from "../../api/Provider";
import { message } from 'antd'

const ProviderComponent = () => {
  const [visible, setvisible] = useState(false);
  const [data, setdata] = useState([]);
  const [isDelete, setisdelete] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  const [dataDetail, setDataDetail] = useState({
    title: null,
    data: null,
  });

  //getall data api
  const getProviders = () => {
    Provider.getAll().then((res) => {
      const { providers } = res.data;

      let newData = [];

      providers.forEach((x, index) => {
        let item = {
          key: index + 1,
          ...x,
        };
        newData.push(item);
      });

      setdata(newData);
    });
  };

  
  const viewActionProvider = (record) => {
    let data = {};
    let title = "New Provider";

    console.log(record);
    if (record) {
      console.log(1);
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
    // setTableParams({
    //   pagination,
    // });
    // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
    //   // setData([]);
    // }
    const { current, pageSize } = pagination;
    Provider.panigation(current, pageSize).then((res) => {
      setTableParams({
        pagination: {
          current: res.data.currentPage,
          pageSize: res.data.pageSize,
        },
      });
      // setdata(res.data.providers);
      // console.log(res.data);
    });
  };

  //xử lý xóa
  const handleDelete = (record) => {
    setSelectedRecord(record);
    setisdelete(!isDelete);
  };

  const onDelete = (record) => {
    Provider.deleteProvider(record._id).then(() => {
      getProviders();
      setisdelete(!isDelete);
    });
  };

  //hiện data lên màn hình
  useEffect(() => {
    getProviders();
  }, []);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a prompt message with custom className and style",
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
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
    tableParams,
    handleTableChange,
    onDelete,
    getProviders,
    viewActionProvider,
    handleDelete,
    contextHolder,
    messageApi,
  });
};

export default ProviderComponent;
