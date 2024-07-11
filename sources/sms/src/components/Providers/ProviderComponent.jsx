import React, { useEffect, useState } from "react";
import ProviderView from "./ProviderView";
import Provider from "../../api/Provider";

const ProviderComponent = () => {
  const [visible, setvisible] = useState(false);
  const [data, setdata] = useState([]);
  const [isDelete, setisdelete] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
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

  const handleTableChange = (pagination) => {
    // setTableParams({
    //   pagination,
    // });
    // if (pagination.pageSize !== tableParams.pagination?.pageSize) {
    //   // setData([]);
    // }
    const { current, pageSize } = pagination;
    Provider.panigation(current, pageSize).then((res) => {
      setdata(res.data.providers);
    });
  };

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

  useEffect(() => {
    getProviders();
  }, []);

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
  });
};

export default ProviderComponent;
